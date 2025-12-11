'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect, useRef, useState } from 'react'

const COOKIE_PREFERENCES_KEY = "econokids_cookie_preferences"

function getAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  const prefs = localStorage.getItem(COOKIE_PREFERENCES_KEY)
  if (!prefs) return false
  try {
    const parsed = JSON.parse(prefs)
    return parsed.analytics === true
  } catch {
    return false
  }
}

function ScrollTracker() {
  const trackedDepths = useRef<Set<number>>(new Set())

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      const depths = [25, 50, 75, 100]

      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth)
          posthog.capture('scroll_depth', {
            depth_percent: depth,
            page_path: window.location.pathname,
          })
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Vérifier si l'utilisateur revient de la page de connexion
  useEffect(() => {
    if (typeof window === 'undefined') return

    const referrer = document.referrer
    if (referrer.includes('app.econokids.fr')) {
      posthog.capture('returned_from_app', {
        referrer: referrer,
        came_from_login: referrer.includes('/login'),
      })
    }
  }, [])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [hasConsent, setHasConsent] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Vérifier le consentement initial
    const consent = getAnalyticsConsent()
    setHasConsent(consent)

    // Écouter les changements de consentement
    const handleConsentChange = (e: CustomEvent) => {
      const newConsent = e.detail?.analytics === true
      setHasConsent(newConsent)

      // Si le consentement est retiré, désactiver PostHog
      if (!newConsent && isInitialized) {
        posthog.opt_out_capturing()
      }
    }

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener)
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener)
    }
  }, [isInitialized])

  useEffect(() => {
    // N'initialiser PostHog que si consentement obtenu
    if (!hasConsent || isInitialized) return
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_KEY) return

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      respect_dnt: true,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          posthog.debug()
        }
      },
    })
    setIsInitialized(true)
  }, [hasConsent, isInitialized])

  // Sans consentement, on rend juste les enfants sans tracking
  if (!hasConsent || !process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>
  }

  return (
    <PHProvider client={posthog}>
      <ScrollTracker />
      {children}
    </PHProvider>
  )
}

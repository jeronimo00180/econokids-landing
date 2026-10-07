'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useSyncExternalStore } from 'react'
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_PREFERENCES_KEY,
  applyAnalyticsConsent,
  readAnalyticsConsent,
  readStoredAttribution,
  storeAttribution,
} from '@/lib/analytics-consent.mjs'

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, onStoreChange)
  return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onStoreChange)
}

function getConsentSnapshot() {
  return readAnalyticsConsent(localStorage.getItem(COOKIE_PREFERENCES_KEY))
}

function ScrollTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const trackedDepths = new Set<number>()

    const fromUrl = storeAttribution(
      window.localStorage,
      new URLSearchParams(window.location.search)
    )
    const attribution =
      Object.keys(fromUrl).length > 0
        ? fromUrl
        : readStoredAttribution(window.localStorage)
    posthog.capture('$pageview', {
      ...attribution,
      page_path: pathname,
      page_title: document.title,
    })

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      const depths = [25, 50, 75, 100]

      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth)
          posthog.capture('scroll_depth', {
            ...attribution,
            depth_percent: depth,
            page_path: window.location.pathname,
          })
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const hasConsent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, () => false)
  const isInitialized = useRef(false)

  useEffect(() => {
    if (!hasConsent && !isInitialized.current) return
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_KEY) return

    if (!isInitialized.current) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        person_profiles: 'identified_only',
        autocapture: false,
        disable_session_recording: true,
        capture_pageview: false,
        capture_pageleave: false,
        persistence: 'localStorage+cookie',
        cross_subdomain_cookie: true,
        secure_cookie: true,
        respect_dnt: true,
      })
      isInitialized.current = true
    }

    applyAnalyticsConsent(posthog, hasConsent)
  }, [hasConsent])

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

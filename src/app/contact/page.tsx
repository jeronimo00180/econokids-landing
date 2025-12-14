import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Clock, Shield, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Econo'kids",
  description:
    "Contactez-nous pour une démo gratuite d'Econo'kids, l'application d'éducation financière pour les écoles et mairies.",
  openGraph: {
    title: "Contact | Econo'kids",
    description: "Contactez-nous pour une démo gratuite d'Econo'kids.",
    url: "https://econokids.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header simple */}
      <header className="bg-white border-b border-border">
        <div className="container py-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Econo'kids"
              width={140}
              height={35}
              className="h-9 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Demandez une démo gratuite
            </h1>
            <p className="text-lg text-muted-foreground">
              Prenez 30 minutes pour découvrir Econo&apos;kids en conditions
              réelles. Sans engagement.
            </p>
          </div>

          {/* Contact Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contactez-nous par email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Envoyez-nous un email avec les informations suivantes et nous
                vous recontacterons sous 48h pour planifier une démo.
              </p>

              <div className="bg-slate-50 rounded-lg p-4 text-sm">
                <p className="font-medium mb-2">À inclure dans votre email :</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Nom de votre commune/établissement</li>
                  <li>• Nombre approximatif d&apos;élèves CM1/CM2</li>
                  <li>• Votre fonction (élu, directeur, enseignant...)</li>
                  <li>• Vos disponibilités pour une démo</li>
                </ul>
              </div>

              <Button size="lg" className="w-full" asChild>
                <a href="mailto:support@econokids.fr?subject=Demande%20de%20d%C3%A9mo%20Econo'kids&body=Bonjour%2C%0A%0AJe%20souhaite%20demander%20une%20d%C3%A9mo%20d'Econo'kids.%0A%0ANom%20de%20la%20commune%2F%C3%A9tablissement%20%3A%20%0ANombre%20d'%C3%A9l%C3%A8ves%20CM1%2FCM2%20%3A%20%0AMa%20fonction%20%3A%20%0ADisponibilit%C3%A9s%20%3A%20%0A%0ACordialement">
                  <Mail className="mr-2 h-4 w-4" />
                  Envoyer un email à support@econokids.fr
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-border">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-sm">Réponse rapide</p>
                <p className="text-xs text-muted-foreground">
                  Sous 48h ouvrées
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-border">
              <Shield className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-sm">Sans engagement</p>
                <p className="text-xs text-muted-foreground">
                  Démo gratuite de 30 min
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-border">
              <Building2 className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-sm">Devis personnalisé</p>
                <p className="text-xs text-muted-foreground">
                  Adapté à votre taille
                </p>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="text-center">
            <Link
              href="/mairies"
              className="text-primary hover:underline text-sm"
            >
              ← Retour à la page mairies
            </Link>
          </div>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="border-t border-border bg-white py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Econo&apos;kids. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

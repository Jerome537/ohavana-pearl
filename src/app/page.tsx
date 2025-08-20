import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AuthenticityBadge, CertificationBadge } from "@/components/ui/authenticity-badge"
import { Shield, Truck, Award, Phone } from "lucide-react"

const collections = [
  {
    name: "Colliers",
    href: "/categorie/colliers",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    description: "Découvrez nos colliers en perles de Tahiti"
  },
  {
    name: "Boucles d'oreilles",
    href: "/categorie/boucles-oreilles", 
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop",
    description: "Élégantes boucles d'oreilles"
  },
  {
    name: "Bracelets",
    href: "/categorie/bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop", 
    description: "Bracelets raffinés en perles authentiques"
  }
]

const uspFeatures = [
  {
    icon: Shield,
    title: "Authenticité Garantie",
    description: "Toutes nos perles sont certifiées authentiques de Tahiti"
  },
  {
    icon: Award,
    title: "Savoir-faire Artisanal",
    description: "Créations uniques réalisées par nos artisans experts"
  },
  {
    icon: Truck,
    title: "Livraison Sécurisée",
    description: "Expédition assurée dans toute la Polynésie et à l'international"
  },
  {
    icon: Phone,
    title: "Service Client Expert",
    description: "Conseils personnalisés pour choisir vos bijoux"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop"
          alt="Lagon de Tahiti avec perles"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="font-title text-5xl md:text-7xl font-title-semibold mb-6">
            L'Authenticité des 
            <span className="block text-gradient bg-grad-iridescent bg-clip-text text-transparent">
              Perles de Tahiti
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Découvrez notre collection exclusive de bijoux artisanaux 
            créés avec les plus belles perles de culture de Polynésie française.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Découvrir la Collection
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-neutral-dark">
              Notre Histoire
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-neutral-light">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl font-title-semibold text-neutral-dark mb-4">
              Nos Collections
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Chaque collection raconte l'histoire unique des lagons de Tahiti, 
              où naissent les plus belles perles du monde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link key={collection.name} href={collection.href}>
                <Card variant="product" className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-card">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-title text-2xl font-title-semibold mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-neutral-dark/70">{collection.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-neutral-light">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl font-title-semibold text-neutral-dark mb-4">
              L'Excellence Ohavana Pearl
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Nous nous engageons à vous offrir des bijoux d'exception, 
              dans le respect de la tradition polynésienne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uspFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-grad-iridescent rounded-full mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-title text-xl font-title-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-dark/70">
                    {feature.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Authenticity Section */}
      <section className="py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-title text-4xl font-title-semibold text-neutral-dark mb-6">
                Garantie d'Authenticité
              </h2>
              <p className="text-lg text-neutral-dark/70 mb-6">
                Chaque perle de Tahiti de notre collection est accompagnée d'un certificat 
                d'authenticité. Nos perles proviennent exclusivement des fermes perlières 
                certifiées de Polynésie française.
              </p>
              <div className="space-y-4 mb-8">
                <AuthenticityBadge variant="large" />
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent-teal rounded-full"></div>
                  <span>Certificat d'origine garanti</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent-teal rounded-full"></div>
                  <span>Traçabilité complète des perles</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent-teal rounded-full"></div>
                  <span>Qualité contrôlée par nos experts</span>
                </div>
              </div>
              <Button size="lg">
                En Savoir Plus
              </Button>
            </div>
            <div>
              <CertificationBadge certificationNumber="TH-2024-001" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
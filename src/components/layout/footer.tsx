import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "Catalogue", href: "/catalogue" },
    { name: "Colliers", href: "/categorie/colliers" },
    { name: "Boucles d'oreilles", href: "/categorie/boucles-oreilles" },
    { name: "Bracelets", href: "/categorie/bracelets" },
    { name: "Nouveautés", href: "/nouveautes" },
  ],
  company: [
    { name: "À propos", href: "/a-propos" },
    { name: "Notre histoire", href: "/notre-histoire" },
    { name: "Authenticité", href: "/authenticite" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Livraison & Retours", href: "/livraison-retours" },
    { name: "Guide des tailles", href: "/guide-tailles" },
    { name: "Entretien des perles", href: "/entretien" },
  ],
  legal: [
    { name: "CGV", href: "/cgv" },
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "Cookies", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="footer-sand mt-16">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="font-title text-3xl font-title-semibold text-gradient">
                  Ohavana Pearl
                </span>
              </div>
              <p className="text-neutral-dark/80 mb-6 max-w-md">
                Découvrez l'authenticité des perles de Tahiti dans nos créations 
                artisanales. Chaque bijou raconte l'histoire des lagons de Polynésie française.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-500" />
                  <span className="text-sm">Papeete, Tahiti - Polynésie française</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-500" />
                  <span className="text-sm">+689 40 xx xx xx</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-500" />
                  <span className="text-sm">contact@ohavanapearl.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://instagram.com/ohavanapearl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-dark hover:text-primary-500 transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/ohavanapearl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-dark hover:text-primary-500 transition-colors duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="font-title text-lg font-title-semibold mb-4">Boutique</h3>
              <ul className="space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-dark/80 hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-title text-lg font-title-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-dark/80 hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-title text-lg font-title-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-dark/80 hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-neutral-dark/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-title text-lg font-title-semibold mb-2">
                Restez informé de nos nouveautés
              </h3>
              <p className="text-neutral-dark/80">
                Recevez en avant-première nos nouvelles collections et offres exclusives.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 md:w-64 px-4 py-2 border border-neutral-dark/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-2 bg-grad-iridescent text-white rounded-r-lg hover:translate-y-[-1px] transition-transform duration-200">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-dark/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-dark/60 hover:text-primary-500 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-neutral-dark/60">
              © 2024 Ohavana Pearl. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
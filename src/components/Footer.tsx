"use client";

export default function Footer() {
  return (
    <footer className="bg-background-light border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-background font-bold text-lg font-[var(--font-playfair)]">M</span>
              </div>
              <div>
                <p className="text-foreground font-[var(--font-playfair)] text-lg font-semibold leading-tight">
                  Mr. Mike&apos;s
                </p>
                <p className="text-accent text-xs tracking-widest uppercase">Grill</p>
              </div>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Family-owned since 2014. Serving homestyle cooked dishes with the freshest
              ingredients in Westland, MI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Menu", href: "#menu" },
                { name: "Reservations", href: "#reservations" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground-muted hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-foreground-muted text-sm">
              <li>6047 N. Wayne Rd</li>
              <li>Westland, MI 48185</li>
              <li>
                <a href="tel:+17347296453" className="hover:text-accent transition-colors">
                  (734) 729-6453
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
              Hours
            </h4>
            <ul className="space-y-2 text-foreground-muted text-sm">
              <li className="flex justify-between">
                <span>Mon</span>
                <span className="text-warm-red">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Tue</span>
                <span>8am – 3pm</span>
              </li>
              <li className="flex justify-between">
                <span>Wed – Sat</span>
                <span>8am – 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sun</span>
                <span>8am – 3pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-muted text-xs">
            © {new Date().getFullYear()} Mr. Mike&apos;s Grill. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-foreground-muted text-xs">
              Free Wi-Fi Available
            </span>
            <span className="text-border">|</span>
            <span className="text-foreground-muted text-xs">
              Carry Out Available
            </span>
            <span className="text-border">|</span>
            <span className="text-foreground-muted text-xs">
              Catering Services
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-background-light border-t border-border/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="lg" className="mb-5" />
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs mt-4">
              Family-owned since 2014. Serving homestyle cooked dishes with the freshest
              ingredients in Westland, MI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-[0.15em] mb-5">
              Navigate
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
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-[0.15em] mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-foreground-muted text-sm">
              <li>6047 N. Wayne Rd</li>
              <li>Westland, MI 48185</li>
              <li>
                <a href="tel:+17347296453" className="hover:text-accent transition-colors font-medium">
                  (734) 729-6453
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-[0.15em] mb-5">
              Hours
            </h4>
            <ul className="space-y-2.5 text-foreground-muted text-sm">
              <li className="flex justify-between gap-4">
                <span>Mon</span>
                <span className="text-warm-red font-medium">Closed</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Tue</span>
                <span>8am – 3pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Wed – Sat</span>
                <span>8am – 8pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sun</span>
                <span>8am – 3pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-foreground-muted text-xs tracking-wide">
            © {new Date().getFullYear()} Mr. Mike&apos;s Grill. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <span className="text-foreground-muted text-xs">Free Wi-Fi</span>
            <span className="text-border/60 hidden sm:inline">·</span>
            <span className="text-foreground-muted text-xs">Carry Out</span>
            <span className="text-border/60 hidden sm:inline">·</span>
            <span className="text-foreground-muted text-xs">Catering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

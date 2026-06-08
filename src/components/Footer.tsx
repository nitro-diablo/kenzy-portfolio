"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background">
      {/* Main footer */}
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column — wider */}
          <div className="lg:col-span-4">
            <Logo size="lg" glow className="mb-6" />
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
              Family-owned since 2014. Serving homestyle cooked dishes with the freshest
              ingredients in Westland, MI.
            </p>
            <div className="accent-line-long mt-6" />
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-5">
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
                    className="text-foreground-muted hover:text-accent transition-colors text-sm tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-foreground-muted text-sm">
              <li className="tracking-wide">6047 N. Wayne Rd</li>
              <li className="tracking-wide">Westland, MI 48185</li>
              <li>
                <a href="tel:+17347296453" className="hover:text-accent transition-colors font-medium tracking-wide">
                  (734) 729-6453
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-5">
              Hours
            </h4>
            <ul className="space-y-2 text-foreground-muted text-sm">
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
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/15">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-foreground-muted text-[11px] tracking-wider">
            &copy; {new Date().getFullYear()} Mr. Mike&apos;s Grill. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-foreground-muted text-[11px] tracking-wider">
            <span>Dine-In</span>
            <span className="text-accent/20">·</span>
            <span>Carry Out</span>
            <span className="text-accent/20">·</span>
            <span>Catering</span>
            <span className="text-accent/20">·</span>
            <span>Free Wi-Fi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

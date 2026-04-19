import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Properties", href: "/properties" },
    { label: "Gallery", href: "/gallery" },
  ],
  Services: [
    { label: "Buy Property", href: "/properties?status=buy" },
    { label: "Sell Property", href: "/properties?status=sell" },
    { label: "Consultation", href: "/#faq" },
  ],
  Support: [
    { label: "Contact", href: "mailto:hello@AreaProps.com" },
    { label: "FAQ's", href: "/#faq" },
    { label: "Terms", href: "/properties" },
  ],
};

export default function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-black/6 bg-white px-6 py-10 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-white">
                N
              </div>
              <span className="text-xl font-semibold tracking-tight">AreaProps</span>
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
              Discover modern homes, premium spaces, and investment-ready
              properties with a platform designed to make your search simpler,
              clearer, and more inspiring.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <a href="mailto:hello@AreaProps.com" className="detail-pill">
                hello@AreaProps.com
              </a>
              <a href="tel:+910000000000" className="detail-pill">
                +91 00000 00000
              </a>
              <span className="detail-pill">Mumbai, India</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                  {title}
                </h3>
                <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
                  {links.map((link) => (
                    <Link key={link.label} href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/6 pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 AreaProps. All rights reserved.</p>
          <p>Designed for modern real estate portfolios.</p>
        </div>
      </div>
    </footer>
  );
}

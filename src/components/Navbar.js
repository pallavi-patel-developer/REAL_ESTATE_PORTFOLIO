import Link from "next/link";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Properties", href: "/properties" },
  { label: "Lets Talk", href: "/lets-talk" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ's", href: "/#faq" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="site-navbar glass-panel rounded-[2rem] px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-white">
                A
              </div>
              <span className="text-lg font-semibold tracking-tight">AreaProps</span>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] lg:flex">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={index === 0 ? "nav-link nav-link-active" : "nav-link"}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href="/properties" className="primary-button">
              Contact Us
            </Link>
          </div>

          <nav className="mt-4 flex flex-wrap gap-2 border-t border-black/6 pt-4 text-sm text-[var(--muted)] lg:hidden">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="mobile-nav-chip">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
      </div>
    </div>
  );
}

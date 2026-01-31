"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Hide header when scrolling down past hero section (approx 600px)
      // Show header when scrolling up or at the top
      if (currentScrollY > 600) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "About Us",
      href: "/about",
      submenu: [
        { title: "History of the OBA", href: "/about/history" },
        { title: "Principal's Message", href: "/about/principals-message" },
        { title: "Senior Vice President's Message", href: "/about/vp-message" },
        { title: "2023/2024 Committee", href: "/about/committee" },
        { title: "Past Committees", href: "/about/past-committees" },
        { title: "Affiliated Groups", href: "/about/affiliated-groups" },
      ],
    },
    { title: "Education Projects", href: "/education" },
    {
      title: "Sports",
      href: "/sports",
      submenu: [
        { title: "Rugby", href: "/sports/rugby" },
        { title: "Cricket", href: "/sports/cricket" },
        { title: "Athletics", href: "/sports/athletics" },
        { title: "Basketball", href: "/sports/basketball" },
        { title: "Hockey", href: "/sports/hockey" },
      ],
    },
    {
      title: "AGM 2026",
      href: "/agm",
      submenu: [
        { title: "Annual Report", href: "/agm/reports" },
        { title: "Agenda", href: "/agm/agenda" },
      ]
    },
    {
      title: "Membership",
      href: "/membership",
      submenu: [
        { title: "Membership Info", href: "/membership/info" },
        { title: "Apply Online", href: "/membership/apply" },
      ]
    },
    { title: "Downloads", href: "/downloads" },
    { title: "Contact Us", href: "/contact" },
  ];

  const filteredMenuItems = menuItems.filter(item => {
    if (item.title === "Home" && pathname === "/") {
      return false;
    }
    return true;
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      {/* Top Bar - Simplified */}
      <div
        className={`bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-blue-dark)] text-white transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-12 opacity-100 hidden lg:block"
        }`}
      >
        <div className="container-custom h-full">
          <div className="flex justify-between items-center h-full text-sm">
            <div className="flex items-center gap-8">
              <a
                href="mailto:info@iobauk.org"
                className="flex items-center gap-2 hover:text-[var(--accent-gold)] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@iobauk.org
              </a>
              <a
                href="tel:+94112123456"
                className="flex items-center gap-2 hover:text-[var(--accent-gold)] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +94 11 2 123 456
              </a>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/membership/login"
                className="hover:text-[var(--accent-gold)] transition-colors font-medium"
              >
                Member Login
              </Link>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="hover:text-[var(--accent-gold)] transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-[var(--accent-gold)] transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-[var(--accent-gold)] transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? "py-2.5" : "py-3.5 md:py-4"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group shrink-0">
              <div
                className={`relative transition-all duration-300 ${isScrolled ? "w-14 h-14" : "w-18 h-18"}`}
              >
                <Image
                  src="/Logo.png"
                  alt="Isipathana OBA Logo"
                  width={100}
                  height={100}
                  className={`object-contain transition-all group-hover:scale-105 ${isScrolled ? "w-14 h-14" : "w-18 h-18"}`}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h3
                  className={`font-serif font-black text-[var(--primary-blue)] leading-none tracking-tight transition-all duration-300 whitespace-nowrap lg:text-2xl ${
                    isScrolled ? "text-base" : "text-xl"
                  }`}
                >
                  Isipathana College
                </h3>
                <p
                  className={`text-gray-500 font-bold uppercase tracking-[0.2em] mt-0.5 transition-all duration-300 h-0 overflow-visible ${
                    isScrolled ? "text-[7px]" : "text-[9px]"
                  }`}
                >
                  Old Boys' Association UK
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-2.5 xl:gap-5">
              {filteredMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() =>
                    item.submenu && setActiveDropdown(item.title)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`hover:text-[var(--accent-gold)] font-bold transition-colors px-3 xl:px-3.5 py-2.5 leading-none block relative group text-[13px] xl:text-[15px] tracking-tight whitespace-nowrap ${
                      activeDropdown === item.title ? "text-[var(--accent-gold)]" : "text-gray-800"
                    }`}
                  >
                    <span className="relative flex items-center gap-1">
                      {item.title}
                      {item.submenu && (
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            activeDropdown === item.title ? "rotate-180 text-[var(--accent-gold)]" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[var(--accent-gold)] transition-all ${
                        activeDropdown === item.title ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                    </span>
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && activeDropdown === item.title && (
                    <ul className="absolute top-full left-0 mt-1 bg-[#f0f9f0] shadow-xl py-1.5 min-w-[240px] animate-fade-in border border-green-100/50 rounded-sm">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            className="block px-5 py-2 text-[15px] text-gray-700 hover:bg-[#e0f2e0] hover:text-[var(--primary-blue)] transition-all font-medium"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-80px)] animate-slide-up">
              <ul className="container-custom py-4 space-y-1">
                {filteredMenuItems.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-gray-50 last:border-0 pb-1"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="block py-2 px-3 text-gray-800 font-bold hover:text-[var(--primary-blue)] transition-colors grow"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.title ? null : item.title,
                            )
                          }
                          className="p-2 text-gray-400"
                        >
                          <svg
                            className={`w-5 h-5 transition-transform ${activeDropdown === item.title ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                    {item.submenu && activeDropdown === item.title && (
                      <ul className="ml-3 space-y-1 bg-[#E8F5E9]/50 rounded-lg p-2 mt-2 border-l-2 border-[var(--primary-blue)]">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              href={subItem.href}
                              className="block py-2 px-3 text-sm text-gray-700 hover:text-[var(--primary-blue)] font-medium transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

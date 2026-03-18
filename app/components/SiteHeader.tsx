"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavItem = "Home" | "About" | "Services" | "Products" | "Contact";

const NAV_ITEMS: NavItem[] = ["Home", "About", "Services", "Products", "Contact"];

const navHref = (item: NavItem) => {
  switch (item) {
    case "Home":
      return "/";
    case "About":
      return "/about";
    case "Services":
      return "/services";
    case "Products":
      return "/products";
    case "Contact":
      return "/contact";
  }
};

type SiteHeaderProps = {
  active?: NavItem;
};

export function SiteHeader({ active }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("opacity");
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalOpacity = document.body.style.opacity;

    document.body.style.overflow = "hidden";
    document.body.style.opacity = "1";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.opacity = originalOpacity;
    };
  }, [isMenuOpen]);

  const mobilePanelClassName = useMemo(() => {
    return `fixed inset-0 z-50 flex flex-col gap-8 bg-[#f9f7ff] px-6 py-8 transition-all duration-300 ease-in-out sm:hidden ${isMenuOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"}`;
  }, [isMenuOpen]);

  return (
    <>
      <header className="relative w-full flex flex-col gap-5 md:gap-6 lg:flex-row lg:items-center lg:justify-between px-6 pt-6 sm:px-10 sm:pt-8 md:px-12 md:pt-10 lg:px-12 xl:px-16 z-50">
        <div className="flex items-center gap-4 py-2 md:py-0 lg:py-0 lg:flex-1">
          <div className="flex items-center">
            <Image
              src="/assets/waygibb/logo.png"
              alt="WayGibb logo"
              width={270}
              height={120}
              priority
              className="h-[60px] w-auto sm:h-[70px] lg:h-[80px]"
            />
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="ml-auto flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-full border border-[#372161] text-[#372161] lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className={`h-[2px] w-6 bg-current transition-transform ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-6 bg-current transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-[2px] w-6 bg-current transition-transform ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>

        <nav className="hidden items-center justify-center gap-6 rounded-[176px] bg-white/60 px-6 py-4 text-base font-semibold shadow-[0_2px_27px_rgba(0,0,0,0.05)] backdrop-blur lg:flex lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mt-6">
          <div className="flex flex-nowrap items-center justify-center gap-8 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item;
              return (
                <Link
                  href={navHref(item)}
                  key={item}
                  className={`relative z-50 pb-1 transition-all whitespace-nowrap ${isActive ? "border-b-2 border-[#2c1a4d] text-[#372161]" : "text-[#3a3a3a] hover:text-[#372161]"}`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <DownloadCTA />
        </div>
      </header>

      <div className={mobilePanelClassName}>
        <div className="flex items-center justify-between py-2">
          <Image
            src="/assets/waygibb/logo.png"
            alt="WayGibb logo compact"
            width={180}
            height={90}
            className="h-[72px] w-auto"
            priority
          />
          <button
            type="button"
            aria-label="Close navigation"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#372161] text-xl text-[#372161]"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-3 px-2 text-lg font-semibold">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item;
            return (
              <Link
                href={navHref(item)}
                key={item}
                className={`rounded-full px-6 py-4 text-left transition-colors ${isActive ? "bg-[#372161] text-white" : "text-[#3a3a3a] hover:text-[#372161]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <DownloadCTA className="w-full justify-center" onClick={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
}

type DownloadCTAProps = {
  className?: string;
  onClick?: () => void;
};

function DownloadCTA({ className = "", onClick }: DownloadCTAProps) {
  return (
    <Link
      href="/download-app"
      onClick={onClick}
      className={`pointer-events-auto whitespace-nowrap rounded-full border border-[#422774] px-6 py-3 text-[15px] font-semibold text-[#372161] transition hover:bg-[#372161] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#372161] md:px-5 md:py-2 md:text-[16px] ${className}`}
    >
      Download App
    </Link>
  );
}


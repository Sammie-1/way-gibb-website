"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "About", "Services", "Products", "Contact", "Download App"];

const ITEM_IMAGES: Record<string, string> = {
  "Phones": "/assets/phones.png",
  "Laptops": "/assets/laptops.png",
  "TVs": "/assets/TVs.png",
  "Home Appliances": "/assets/home-appliances.png",
  "Accessories": "/assets/accessories.png",
  "Construction Tools": "/assets/construction-tools.png",
  "Electrical Tools": "/assets/electrical-tools.png",
  "Safety Gear": "/assets/safety-gear.png",
  "Sand": "/assets/sand.png",
  "Cements": "/assets/cement.png",
  "Granite": "/assets/granite.png",
  "Iron Rods": "/assets/iron-rods.png",
  "Tiles": "/assets/tiles.png",
  "Paints": "/assets/paints.png",
  "Lighting": "/assets/lightning.png",
  "Furniture": "/assets/furniture.png",
  "Interior Finishes": "/assets/interior.png",
};

const CATEGORY_SECTIONS = [
  {
    title: "Electronics",
    items: ["Phones", "Laptops", "TVs", "Home Appliances", "Accessories"],
  },
  {
    title: "Tools & Equipment",
    items: ["Construction Tools", "Electrical Tools", "Safety Gear"],
  },
  {
    title: "Building Materials",
    items: ["Sand", "Cements", "Granite", "Iron Rods", "Tiles"],
  },
  {
    title: "Home Improvement",
    items: ["Lighting", "Furniture", "Interior Finishes"],
  },
];

const navHref = (item: string) => {
  switch (item) {
    case "Home":
      return "/";
    case "About":
      return "/about";
    case "Services":
      return "/services";
    case "Products":
      return "/products";
    case "Download App":
      return "/download-app";
    case "Contact":
      return "/contact";
    default:
      return "/";
  }
};

type StoreButtonProps = {
  label: string;
  href: string;
  iconSrc: string;
  className?: string;
};

export default function ProductsPage() {
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

  return (
    <div className="min-h-screen bg-[#f9f7ff] text-[#3a3a3a]">
      <div className="relative flex min-h-screen w-full flex-col gap-8 px-6 pb-20 pt-6 sm:gap-10 sm:px-10 md:px-12 md:pb-24 md:pt-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-12 xl:gap-16 xl:px-16">
        <div className="flex flex-col gap-8 sm:gap-10">
          <header className="relative z-20 flex flex-col gap-5 md:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex items-center gap-4 py-2 md:py-0 lg:py-0">
              <Image
                src="/assets/waygibb/logo.png"
                alt="WayGibb logo"
                width={270}
                height={120}
                priority
                className="h-[110px] w-auto sm:h-[130px] lg:h-[100px]"
              />
              <button
                type="button"
                aria-label="Toggle navigation"
                className="ml-auto flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-full border border-[#372161] text-[#372161] sm:hidden"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span
                  className={`h-[2px] w-6 bg-current transition-transform ${
                    isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-6 bg-current transition-opacity ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-[2px] w-6 bg-current transition-transform ${
                    isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>

            <nav className="hidden items-center justify-center gap-4 rounded-[999px] bg-white/90 px-6 py-4 text-sm font-semibold text-[#3a3a3a] shadow-[0_12px_30px_rgba(55,33,97,0.08)] backdrop-blur md:flex lg:hidden">
              <div className="flex w-full items-center justify-center gap-8 overflow-x-auto px-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = item === "Products";
                  const isDownloadApp = item === "Download App";
                  return (
                    <Link
                      href={navHref(item)}
                      key={item}
                      className={`whitespace-nowrap px-1 py-2 transition-colors ${
                        isDownloadApp
                          ? "rounded-full border-2 border-[#422774] px-4 py-2 hover:bg-[#422774] hover:text-white"
                          : isActive
                          ? "border-b-2 border-[#2c1a4d] text-[#372161]"
                          : "text-[#3a3a3a] hover:text-[#372161]"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <nav className="relative z-50 hidden items-center justify-center gap-6 rounded-[176px] bg-white px-6 py-4 text-base font-semibold shadow-[0_2px_27px_rgba(0,0,0,0.11)] backdrop-blur lg:mr-16 lg:flex xl:mr-[-250px]">
              <div className="flex flex-nowrap items-center justify-center gap-6 whitespace-nowrap">
                {NAV_ITEMS.map((item) => {
                  const isActive = item === "Products";
                  const isDownloadApp = item === "Download App";
                  return (
                    <Link
                      href={navHref(item)}
                      key={item}
                      className={`relative z-50 transition-colors whitespace-nowrap ${
                        isDownloadApp
                          ? "rounded-full border-2 border-[#422774] px-4 py-2 hover:bg-[#422774] hover:text-white"
                          : isActive
                          ? "pb-1 border-b-2 border-[#2c1a4d] text-[#372161]"
                          : "pb-1 text-[#3a3a3a] hover:text-[#372161]"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </header>

          <div
            className={`fixed inset-0 z-50 flex flex-col gap-8 bg-[#f9f7ff] px-6 py-8 transition-all duration-300 ease-in-out sm:hidden ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-full opacity-0"
            }`}
          >
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
                const isActive = item === "Products";
                const isDownloadApp = item === "Download App";
                return (
                  <Link
                    href={navHref(item)}
                    key={item}
                    className={`rounded-full px-6 py-4 text-left transition-colors ${
                      isDownloadApp
                        ? "border-2 border-[#422774] text-center hover:bg-[#422774] hover:text-white"
                        : isActive
                        ? "bg-[#372161] text-white"
                        : "text-[#3a3a3a] hover:text-[#372161]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>

          <main className="flex flex-col gap-12 pt-8 md:pt-12 lg:items-start lg:pt-15">
            <section className="flex w-full max-w-[720px] flex-1 flex-col gap-10 md:gap-12">
              <div className="space-y-7 px-1 md:space-y-8 md:px-0">
                <h1 className="text-[24px] font-[700] leading-[1.2] text-[#3a3a3a] sm:text-[26px] sm:leading-[1.15] md:text-[28px] md:leading-[1.1] lg:text-[30px] lg:leading-[1.05]">
                  <span className="block">
                  Explore Our Product Categories
                  </span>
                </h1>
                <div className="space-y-4 text-base leading-[1.65] text-[#3a3a3a]/85 sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.75]">
                  <p className="m-0">
                  Find everything you need — from everyday essentials to 
                  construction supplies — all in one place on the WayGibb app.
                  </p>
                </div>
              </div>
              <div className="my-2 h-px w-full bg-[#d9d0f1] md:my-3" />
              <div className="space-y-8 px-1 md:space-y-10 md:px-0">
                <p className="text-lg font-semibold italic leading-[1.4] text-[#3a3a3a] sm:text-xl md:text-2xl">
                  Download the WayGibb App to Order Now!
                </p>
                <div
                  id="download"
                  className="flex flex-row flex-wrap gap-4 md:gap-5"
                >
                  <StoreButton
                    href="#download"
                    label="App Store"
                    iconSrc="/assets/logos_apple-app-store.svg"
                    className="flex-1 min-w-[160px] justify-center sm:min-w-[200px] lg:flex-none"
                  />
                  <StoreButton
                    href="#download"
                    label="Play Store"
                    iconSrc="/assets/logos_google-play-icon.svg"
                    className="flex-1 min-w-[160px] justify-center sm:min-w-[200px] lg:flex-none"
                  />
                </div>
              </div>
            </section>
          </main>
        </div>

        <div className="relative hidden lg:flex lg:items-start lg:justify-end lg:-mr-12 lg:-mt-8 xl:-mr-15 xl:-mt-12">
          <Image
            src="/assets/product.png"
            alt="WayGibb product showcase"
            width={600}
            height={600}
            className="w-[90%] h-auto object-contain"
            priority
          />
        </div>
      </div>

      <section className="w-full bg-[#e9e6ed] py-10 sm:py-12 md:py-14 lg:py-16 mt-10 md:mt-16">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-6 sm:px-10 md:px-12 lg:px-12 xl:px-16">
          {CATEGORY_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-6">
              <div className="space-y-2">
                <p className="text-[22px] font-bold text-[#422774] sm:text-[24px]">{section.title}</p>
                <div className="h-[1px] w-full bg-[#d1443e]" />
              </div>
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {section.items.map((item) => {
                  const imageSrc = ITEM_IMAGES[item];
                  return (
                    <div
                      key={item}
                      className="relative h-[294px] w-[266px] shrink-0 overflow-hidden rounded-[16px] bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.04)]"
                    >
                      {imageSrc && (
                        <div className="absolute inset-0">
                          <Image
                            src={imageSrc}
                            alt={item}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 rounded-[8px] bg-white px-4 py-2.5 min-w-fit">
                        <Image
                          src="/assets/mage_stars-b.png"
                          alt=""
                          width={26}
                          height={26}
                          className="h-[26px] w-[26px] shrink-0"
                        />
                        <p className="whitespace-nowrap text-center text-[18px] font-extrabold leading-[1] text-[#3a3a3a] sm:text-[20px]">{item}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0f002f] px-6 py-12 sm:px-10 md:px-12 md:py-14 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="flex max-w-[299px] flex-col gap-5">
              <div className="h-20 w-[206px]">
                <Image
                  src="/assets/footer/logo.png"
                  alt="WayGibb"
                  width={206}
                  height={80}
                  className="h-full w-auto object-contain"
                />
              </div>
              <p className="text-sm font-medium leading-[1.5] tracking-[-0.28px] text-[#f8f8f8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique..
              </p>
            </div>

            <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-[60px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-extrabold uppercase leading-[1.5] text-white">
                  Quick Link
                </h3>
                <div className="flex flex-col gap-2.5">
                  <Link href="#" className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white">
                    Home
                  </Link>
                  <Link href="#" className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white">
                    About
                  </Link>
                  <Link href="#" className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white">
                    Service
                  </Link>
                  <Link href="#" className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-base font-extrabold uppercase leading-[1.5] text-white">
                  Contact
                </h3>
                <div className="flex flex-col gap-4">
                  <a href="mailto:support@waygibb.com" className="text-sm font-medium leading-[1.5] text-[#fefefe] transition-colors hover:text-white">
                    support@waygibb.com
                  </a>
                  <a href="tel:+2349012345678" className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white">
                    +234 901 234 5678
                  </a>
                  <p className="max-w-[235px] text-sm font-normal leading-[1.5] text-[#fefefe]">
                    No. 15, WayGibb Plaza, Ring Road, Ibadan, Oyo State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-base font-extrabold uppercase leading-[1.5] text-white">
                  Social Link
                </h3>
                <div className="flex items-center gap-4">
                  <Link href="#" className="transition-opacity hover:opacity-80" aria-label="LinkedIn">
                    <Image
                      src="/assets/footer/linkedin-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Link>
                  <Link href="#" className="transition-opacity hover:opacity-80" aria-label="Facebook">
                    <Image
                      src="/assets/footer/facebook-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Link>
                  <Link href="#" className="transition-opacity hover:opacity-80" aria-label="Instagram">
                    <Image
                      src="/assets/footer/instagram-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Link>
                  <Link href="#" className="transition-opacity hover:opacity-80" aria-label="X (Twitter)">
                    <Image
                      src="/assets/footer/x-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8 h-px w-full bg-white opacity-30" />

          <div className="flex justify-center lg:justify-end">
            <p className="text-xs font-normal tracking-[-0.24px] text-white">
              © 2025 Waygibb. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StoreButton({ label, href, iconSrc, className = "" }: StoreButtonProps) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-full border border-[#422774] px-6 py-3.5 text-[#372161] transition hover:-translate-y-0.5 hover:bg-[#372161] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#372161] md:px-5 md:py-2.5 ${className}`}
    >
      <span className="inline-flex size-8 items-center justify-center md:size-8">
        <Image src={iconSrc} alt="" width={26} height={26} />
      </span>
      <span className="text-base font-extrabold leading-none md:text-lg">{label}</span>
    </Link>
  );
}


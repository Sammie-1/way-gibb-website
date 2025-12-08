"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "About", "Services", "Products", "Contact", "Download App"];
const SERVICES_HERO_IMAGE = "/assets/services/services-cart.png";

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

type DownloadCTAProps = {
  className?: string;
  onClick?: () => void;
};

export default function Services() {
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
          {/* Navbar (copied from home, with Services active) */}
          <header className="relative flex flex-col gap-5 md:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
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
                  const isActive = item === "Services";
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
                  const isActive = item === "Services";
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

          {/* Mobile nav overlay (copied from home) */}
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
                const isActive = item === "Services";
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

          {/* Hero section (copied from home) */}
          <main className="flex flex-col gap-12 pt-8 md:pt-12 lg:items-start lg:pt-15">
            <section className="flex w-full max-w-[720px] flex-1 flex-col gap-10 md:gap-12">
              <div className="space-y-7 px-1 md:space-y-8 md:px-0">
                <h1 className="text-[24px] font-[700] leading-[1.2] text-[#3a3a3a] sm:text-[26px] sm:leading-[1.15] md:text-[28px] md:leading-[1.1] lg:text-[30px] lg:leading-[1.05]">
                  <span className="block">
                    Designed Around You
                  </span>
                </h1>
                <div className="space-y-4 text-base leading-[1.65] text-[#3a3a3a]/85 sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.75]">
                  <p className="m-0">
                  From flexible payments to fast deliveries, WayGibb provides <br/>
                seamless solutions that make shopping smarter, easier, and <br/> more rewarding.
                  </p>
                </div>
              </div>
              <div className="my-2 h-px w-full bg-[#d9d0f1] md:my-3" />
              <div className="space-y-8 px-1 md:space-y-10 md:px-0">
                <p className="text-lg font-semibold italic leading-[1.4] text-[#3a3a3a] sm:text-xl md:text-2xl">
                  Discover Our Services
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

        {/* Hero side image (copied from home) */}
        <div className="relative hidden lg:flex lg:items-start lg:justify-end lg:-mr-12 lg:-mt-8 xl:-mr-15 xl:-mt-12">
          <Image
          src="/assets/Home.png"
            alt="WayGibb product showcase"
            width={600}
            height={600}
            className="w-[90%] h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Services detail section (from Figma) */}
      <section className="bg-[#e9e6ed] px-6 py-16 sm:px-10 md:px-12 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:gap-12">
          {/* Electronics Sales - wide card */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
            <Image
                src="/assets/first-card.png"
                alt="Electronics in a shopping cart"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-[rgba(0,0,0,0.2)]" />

              <div className="absolute inset-y-6 left-4 right-4 flex items-center sm:left-8 sm:right-auto sm:max-w-[420px] md:left-10 md:max-w-[520px] lg:left-[50px] lg:max-w-[570px]">
                <div className="w-full rounded-[19.851px] bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-9 md:py-10 shadow-[0px_8px_24px_rgba(0,0,0,0.08)]">
                  <h2 className="mb-4 text-lg font-bold leading-[1.3] text-[#422774] sm:text-xl md:text-2xl">
                    Electronics Sales
                  </h2>
                  <p className="text-sm leading-relaxed text-[#3a3a3a] sm:text-base md:text-[20px] md:leading-[1.25]">
                    Get the latest and most trusted gadgets at unbeatable prices. From phones to home appliances, we
                    offer only authentic and durable electronics. Enjoy a smooth shopping experience backed by
                    reliability and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle row: three service cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Doorstep Delivery */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
              <Image
                src="/assets/mini-card.png"
                alt="Packages ready for delivery"
                fill
                className="object-cover"
              />
                <div className="absolute inset-0 rounded-2xl bg-[rgba(0,0,0,0.2)]" />

                <div className="absolute inset-x-4 bottom-6 sm:inset-x-5 sm:bottom-7">
                  <div className="rounded-[19.851px] bg-white px-5 py-6 sm:px-6 sm:py-7 shadow-[0px_8px_24px_rgba(0,0,0,0.08)]">
                    <h3 className="mb-3 text-base font-bold leading-[1.3] text-[#422774] sm:text-lg md:text-xl">
                      Doorstep Delivery
                    </h3>
                    <p className="text-sm leading-relaxed text-[#3a3a3a] sm:text-[15px] md:text-[16px] md:leading-[1.3]">
                      Enjoy the comfort of shopping from anywhere and getting your orders delivered to your doorstep or
                      worksite. Our delivery network is fast, safe, and reliable. Track your items in real time and
                      receive them right on schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wholesale Orders */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
              <Image
                src="/assets/mini-card.png"
                alt="Wholesale packages in cart"
                fill
                className="object-cover"
              />
                <div className="absolute inset-0 rounded-2xl bg-[rgba(0,0,0,0.2)]" />

                <div className="absolute inset-x-4 bottom-6 sm:inset-x-5 sm:bottom-7">
                  <div className="rounded-[19.851px] bg-white px-5 py-6 sm:px-6 sm:py-7 shadow-[0px_8px_24px_rgba(0,0,0,0.08)]">
                    <h3 className="mb-3 text-base font-bold leading-[1.3] text-[#422774] sm:text-lg md:text-xl">
                      Wholesale Orders
                    </h3>
                    <p className="text-sm leading-relaxed text-[#3a3a3a] sm:text-[15px] md:text-[16px] md:leading-[1.3]">
                      Need bulk purchases? We cater to wholesale buyers with special rates and easy order processing.
                      Enjoy quick fulfillment, transparent pricing, and quality assurance on every order.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Ordering */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
              <Image
                src="/assets/mini-card.png"
                alt="Online shopping cart"
                fill
                className="object-cover"
              />
                <div className="absolute inset-0 rounded-2xl bg-[rgba(0,0,0,0.2)]" />

                <div className="absolute inset-x-4 bottom-6 sm:inset-x-5 sm:bottom-7">
                  <div className="rounded-[19.851px] bg-white px-5 py-6 sm:px-6 sm:py-7 shadow-[0px_8px_24px_rgba(0,0,0,0.08)]">
                    <h3 className="mb-3 text-base font-bold leading-[1.3] text-[#422774] sm:text-lg md:text-xl">
                      Online Ordering
                    </h3>
                    <p className="text-sm leading-relaxed text-[#3a3a3a] sm:text-[15px] md:text-[16px] md:leading-[1.3]">
                      Shop anytime, anywhere using our easy-to-navigate app or website. Browse, compare, and order with
                      just a few clicks. We’ve made online shopping faster, safer, and more convenient for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Building Materials Supply - wide card */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
            <Image
                src="/assets/last-card.png"
                alt="Building materials in cart"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-[rgba(0,0,0,0.2)]" />

              <div className="absolute inset-y-6 left-4 right-4 flex items-center sm:left-8 sm:right-auto sm:max-w-[420px] md:left-10 md:max-w-[520px] lg:left-[50px] lg:max-w-[570px]">
                <div className="w-full rounded-[19.851px] bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-9 md:py-10 shadow-[0px_8px_24px_rgba(0,0,0,0.08)]">
                  <h2 className="mb-4 text-lg font-bold leading-[1.3] text-[#422774] sm:text-xl md:text-2xl">
                    Building Materials Supply
                  </h2>
                  <p className="text-sm leading-relaxed text-[#3a3a3a] sm:text-base md:text-[20px] md:leading-[1.25]">
                    Order high-quality building materials directly from verified suppliers. Whether it’s cement, sand,
                    or fittings, we ensure you get only the best for your projects. Save time, reduce stress, and get
                    your materials delivered without hassle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (copied from home) */}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius elementum tristique..
              </p>
            </div>

            <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-[60px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-extrabold uppercase leading-[1.5] text-white">
                  Quick Link
                </h3>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="#"
                    className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white"
                  >
                    Service
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-base font-extrabold uppercase leading-[1.5] text-white">
                  Contact
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:support@waygibb.com"
                    className="text-sm font-medium leading-[1.5] text-[#fefefe] transition-colors hover:text-white"
                  >
                    support@waygibb.com
                  </a>
                  <a
                    href="tel:+2349012345678"
                    className="text-sm font-normal leading-[1.5] text-[#fefefe] transition-colors hover:text-white"
                  >
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
                  <Link
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    aria-label="LinkedIn"
                  >
                    <Image
                      src="/assets/footer/linkedin-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    aria-label="Facebook"
                  >
                    <Image
                      src="/assets/footer/facebook-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    aria-label="Instagram"
                  >
                    <Image
                      src="/assets/footer/instagram-icon.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    aria-label="X (Twitter)"
                  >
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
      <span className="text-base font-extrabold leading-none md:text-lg">
        {label}
      </span>
    </Link>
  );
}

function DownloadCTA({ className = "", onClick }: DownloadCTAProps) {
  return (
    <Link
      href="/download-app"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border border-[#422774] px-6 py-3 text-[15px] font-semibold text-[#372161] transition hover:bg-[#372161] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#372161] md:px-5 md:py-2 md:text-[16px] ${className}`}
    >
      Download App
    </Link>
  );
}



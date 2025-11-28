"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "About", "Services", "Products", "Contact"];

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

type MetricCardProps = {
  value: string;
  label: string;
};

export default function AboutPage() {
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
          <header className="relative flex flex-col gap-5 md:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex items-center gap-4 py-2">
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
                  const isActive = item === "About";
                  return (
                    <Link
                      href={navHref(item)}
                      key={item}
                      className={`whitespace-nowrap px-1 py-2 transition-colors ${
                        isActive
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

            <nav className="hidden items-center justify-center gap-6 rounded-[176px] bg-white px-6 py-4 text-base font-semibold shadow-[0_2px_27px_rgba(0,0,0,0.11)] backdrop-blur lg:mr-16 lg:flex xl:mr-[-250px]">
              <div className="flex flex-nowrap items-center justify-center gap-6 whitespace-nowrap">
                {NAV_ITEMS.map((item) => {
                  const isActive = item === "About";
                  return (
                    <Link
                      href={navHref(item)}
                      key={item}
                      className={`pb-1 transition-colors whitespace-nowrap ${
                        isActive
                          ? "border-b-2 border-[#2c1a4d] text-[#372161]"
                          : "text-[#3a3a3a] hover:text-[#372161]"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
              <DownloadCTA />
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
                const isActive = item === "About";
                return (
                  <Link
                    href={navHref(item)}
                    key={item}
                    className={`rounded-full px-6 py-4 text-left transition-colors ${
                      isActive
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
            <DownloadCTA
              className="w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          <main className="flex flex-col gap-12 pt-8 md:pt-12 lg:items-start lg:pt-15">
            <section className="flex w-full max-w-[720px] flex-1 flex-col gap-10 md:gap-12">
              <div className="space-y-7 px-1 md:space-y-8 md:px-0">
                <h1 className="text-[24px] font-[700] leading-[1.2] text-[#3a3a3a] sm:text-[26px] sm:leading-[1.15] md:text-[28px] md:leading-[1.1] lg:text-[30px] lg:leading-[1.05]">
                  <span className="block">Building Trust Through Innovation</span>
                
                </h1>
                <div className="space-y-4 text-base leading-[1.65] text-[#3a3a3a]/85 sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.75]">
                  <p className="m-0">
                  At WayGibb, we’re redefining online shopping with <br />
                    transparency, reliability, and customer-first experiences that <br />
                        make every purchase simple and secure.
                  </p>
                </div>
              </div>
              <div className="my-2 h-px w-full bg-[#d9d0f1] md:my-3" />
              <div className="space-y-8 px-1 md:space-y-10 md:px-0">
                <p className="text-lg font-semibold italic leading-[1.4] text-[#3a3a3a] sm:text-xl md:text-2xl">
                  Let&apos;s help you build, upgrade, and deliver faster.
                </p>
                <div className="flex flex-row flex-wrap gap-4 md:gap-5">
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

        <div className="relative hidden lg:flex lg:-mr-12 lg:-mt-8 lg:items-start lg:justify-end xl:-mr-15 xl:-mt-12">
          <Image
            src="/assets/about.png"
            alt="WayGibb team and deliveries"
            width={600}
            height={600}
            className="h-auto w-[90%] object-contain"
            priority
          />
        </div>
      </div>

      <section className="bg-[#f5f3ff] px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] bg-white px-6 py-10 shadow-[0px_20px_45px_rgba(15,8,38,0.08)] sm:px-10 sm:py-14">
              <Image
                src="/assets/Line 139.png"
                alt="Decorative dashed line"
                width={1128}
                height={1011}
                className="pointer-events-none absolute -right-24 bottom-0 hidden h-[90%] w-auto opacity-50 xl:block"
              />
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center rounded-[24px] border border-solid border-[#3a3a3a] px-4 py-2">
                  <p className="text-center text-base font-semibold text-[#3a3a3a] whitespace-nowrap">
                    Who we are
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#422774] sm:text-3xl md:text-4xl">
                    Your Partners in Seamless Shopping
                  </h2>
                  <p className="text-base leading-[1.7] text-[#3a3a3a] sm:text-lg">
                    WayGibb is your one-stop destination for everything you need
                    from high-quality electronics to essential building materials.
                    We’re on a mission to simplify shopping for individuals,
                    families, and businesses by combining technology, convenience,
                    and trusted delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="#"
                className="flex items-center gap-4 rounded-[28px] bg-white px-6 py-5 text-[#372161] shadow-[0px_12px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5"
              >
                <Image
                  src="/assets/logos_apple-app-store.svg"
                  alt="App Store"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px]"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-[#3a3a3a]/70">Download on</p>
                  <p className="text-xl font-bold">App Store</p>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 rounded-[28px] bg-white px-6 py-5 text-[#372161] shadow-[0px_12px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5"
              >
                <Image
                  src="/assets/logos_google-play-icon.svg"
                  alt="Google Play"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px]"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-[#3a3a3a]/70">Download on</p>
                  <p className="text-xl font-bold">Google Play</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <MetricCard value="200+" label="Verified Vendors" />
              <MetricCard value="100+" label="Secure Transactions" />
              <MetricCard value="100k" label="Successful Orders" />
              <MetricCard value="Nationwide" label="Delivery Coverage" />
            </div>
            <div className="overflow-hidden rounded-[32px] bg-white shadow-[0px_15px_35px_rgba(0,0,0,0.15)]">
              <Image
                src="/assets/Frame 1000012050.png"
                alt="WayGibb operations team collaborating"
                width={640}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(217,212,227,0.45)] px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative grid gap-6 md:grid-cols-2">
            <Image
              src="/assets/Line 139.png"
              alt=""
              width={1128}
              height={1011}
              className="pointer-events-none absolute inset-0 hidden h-full w-auto opacity-40 md:block"
            />
            <div className="relative rounded-[28px] bg-white px-6 py-10 shadow-[0px_12px_30px_rgba(0,0,0,0.12)] sm:px-8">
              <div className="inline-flex items-center justify-center rounded-[24px] border border-solid border-[#3a3a3a] px-4 py-2">
                <p className="text-center text-base font-semibold text-[#3a3a3a] whitespace-nowrap">
                  Our Vision
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-2xl font-bold text-[#372161] sm:text-3xl">Vision</h3>
                <p className="text-base leading-[1.6] text-[#3a3a3a] sm:text-lg">
                  To become Africa&apos;s most trusted online store for both electronic
                  gadgets and construction materials — delivering quality and
                  convenience right to your doorstep.
                </p>
              </div>
            </div>
            <div className="relative rounded-[28px] bg-white px-6 py-10 shadow-[0px_12px_30px_rgba(0,0,0,0.12)] sm:px-8">
              <div className="inline-flex items-center justify-center rounded-[24px] border border-solid border-[#3a3a3a] px-4 py-2">
                <p className="text-center text-base font-semibold text-[#3a3a3a] whitespace-nowrap">
                  Our Mission
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-2xl font-bold text-[#372161] sm:text-3xl">Mission</h3>
                <p className="text-base leading-[1.6] text-[#3a3a3a] sm:text-lg">
                  To make shopping simple, fast, and affordable by connecting
                  customers with verified suppliers through a secure and reliable
                  digital platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="space-y-6 lg:w-[45%]">
            <div className="inline-flex items-center justify-center rounded-[24px] border border-solid border-[#3a3a3a] px-4 py-2">
              <p className="text-center text-base font-semibold text-[#3a3a3a] whitespace-nowrap">
                Our Core Values
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-[#422774] sm:text-3xl md:text-4xl">
                What Drives Us
              </h2>
              <p className="text-base leading-[1.6] text-[#3a3a3a] sm:text-lg">
                At WayGibb, our values shape every decision, every interaction, and every
                delivery.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[0px_18px_35px_rgba(0,0,0,0.18)]">
              <Image
                src="/assets/core-.png"
                alt="WayGibb team collaborating"
                width={560}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-19">
            <CoreValueCard
              title="Integrity"
              description="We sell only authentic and trusted products. Every transaction is guided by honesty and transparency, so customers always get exactly what they pay for."
            />
            <CoreValueCard
              title="Convenience"
              description="Shop from anywhere, anytime. We make it easy to browse, order, and receive your items without stress."
            />
            <CoreValueCard
              title="Speed"
              description="Timely delivery to your doorstep or worksite. We value your time and ensure every order arrives quickly and safely."
            />
            <CoreValueCard
              title="Customer Satisfaction"
              description="Your happiness is our priority. We go the extra mile to ensure every shopping experience with WayGibb is smooth and rewarding."
            />
          </div>
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

function DownloadCTA({ className = "", onClick }: DownloadCTAProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border border-[#422774] px-6 py-3 text-[15px] font-semibold text-[#372161] transition hover:bg-[#372161] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#372161] md:px-5 md:py-2 md:text-[16px] ${className}`}
    >
      Download App
    </button>
  );
}

function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="rounded-[24px] bg-white px-6 py-5 text-left shadow-[0px_10px_24px_rgba(0,0,0,0.12)]">
      <p className="text-2xl font-extrabold text-[#d1443e]">{value}</p>
      <p className="mt-2 text-sm font-semibold text-[#3a3a3a] sm:text-base">{label}</p>
    </div>
  );
}

type CoreValueCardProps = {
  title: string;
  description: string;
};

function CoreValueCard({ title, description }: CoreValueCardProps) {
  return (
    <div className="min-h-[250px] min-w-[260px] rounded-[24px] bg-white px-9 py-9 shadow-[0px_6px_22px_rgba(0,0,0,0.14)]">
      <h3 className="text-lg font-bold text-[#372161]">{title}</h3>
      <p className="mt-3 text-sm leading-[1.6] text-[#3a3a3a] sm:text-base">{description}</p>
    </div>
  );
}


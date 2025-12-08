"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "About", "Services", "Products", "Contact", "Download App"];

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I place an order?",
    answer:
      "Download the WayGibb App, create an account, browse products, add to cart, and checkout.",
  },
  {
    question: "Can I pay on delivery?",
    answer:
      "Yes, Pay-on-Delivery is available in select locations.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After placing your order, you’ll get a tracking link via email or SMS so you can monitor your delivery progress in real time.",
  },
  {
    question: "Do you deliver nationwide?",
    answer:
      "Yes, we deliver across Nigeria.",
  },
  {
    question: "Do you offer wholesale pricing?",
    answer:
      "Absolutely! We support contractors and resellers with bulk discounts.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept debit cards, bank transfers, and wallet payments. Each option is safe, secure, and easy to use.",
  },
];

// Generates navigation href based on menu item name
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

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Prevent body scroll when mobile menu is open
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
    <div className="min-h-screen bg-white text-[#3a3a3a]">
      <div className="relative flex min-h-screen w-full flex-col gap-8 px-6 pb-0 pt-6 sm:gap-10 sm:px-10 md:px-12 md:pb-0 md:pt-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-12 xl:gap-16 xl:px-16">
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
                  const isActive = item === "Contact";
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

            <nav className="relative z-30 hidden items-center justify-center gap-6 rounded-[176px] bg-white px-6 py-4 text-base font-semibold shadow-[0_2px_27px_rgba(0,0,0,0.11)] backdrop-blur lg:mr-16 lg:flex xl:mr-[-250px]">
              <div className="flex flex-nowrap items-center justify-center gap-6 whitespace-nowrap">
                {NAV_ITEMS.map((item) => {
                  const isActive = item === "Contact";
                  const isDownloadApp = item === "Download App";
                  return (
                    <Link
                      href={navHref(item)}
                      key={item}
                      className={`relative z-10 transition-colors whitespace-nowrap ${
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
            className={`fixed inset-0 z-50 flex flex-col gap-8 bg-white px-6 py-8 transition-all duration-300 ease-in-out sm:hidden ${
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
                const isActive = item === "Contact";
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
                  <span className="block">We&apos;d Love to Hear From You</span>
                </h1>
                <div className="space-y-4 text-base leading-[1.65] text-[#3a3a3a]/85 sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.75]">
                  <p className="m-0">
                    Whether you have questions, feedback, or partnership
                    inquiries, the WayGibb team is here to support you every
                    step of the way.
                  </p>
                </div>
              </div>
              <div className="my-4 h-px w-full bg-[#d9d0f1] md:my-5" />
              <div className="px-1 md:px-0">
                <div className="w-full max-w-[567px] rounded-2xl bg-white/80 px-5 py-5 shadow-[0px_5px_13.5px_rgba(0,0,0,0.23)] sm:px-6 sm:py-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                      <p className="text-xl font-bold text-[#422774] sm:text-2xl">
                        Follow us
                      </p>
                      <p className="text-base font-bold text-[#3a3a3a] sm:text-lg">
                        @WayGibbOfficial
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-[#d9635e]">
                      <Link
                        href="#"
                        aria-label="TikTok"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent"
                      >
                        <Image
                          src="/assets/tiktok.png"
                          alt="TikTok"
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                      </Link>
                      <Link
                        href="#"
                        aria-label="Facebook"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent"
                      >
                        <Image
                          src="/assets/facebook.png"
                          alt="Facebook"
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                      </Link>
                      <Link
                        href="#"
                        aria-label="Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent"
                      >
                        <Image
                          src="/assets/instagram.png"
                          alt="Instagram"
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                      </Link>
                      <Link
                        href="#"
                        aria-label="X (Twitter)"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent"
                      >
                        <Image
                          src="/assets/twitter.png"
                          alt="X (Twitter)"
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <div className="relative hidden lg:flex lg:-mr-12 lg:-mt-8 lg:items-start lg:justify-end xl:-mr-15 xl:-mt-12">
          <Image
            src="/assets/contact.png"
            alt="WayGibb support team collage"
            width={600}
            height={600}
            className="h-auto w-[90%] object-contain"
            priority
          />
        </div>
      </div>

      <section className="bg-[#f9f7ff] px-6 py-16 sm:px-10 md:px-12 lg:px-16 flex items-center">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="space-y-7 rounded-[20px] bg-white px-5 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.1)] sm:px-6 sm:py-7">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-[#d9d0f1] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#3a3a3a]">
                  Contact us
                </span>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#422774] sm:text-3xl">
                    Get in Touch
                  </h2>
                  <p className="text-sm leading-relaxed text-[#3a3a3a]/85 sm:text-base">
                    Have questions, need support, or want to learn more about our
                    services? We&apos;re here to help.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-sm sm:text-base">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#fbe3e1] text-[#d9635e]">
                    <Image
                      src="/assets/location.png"
                      alt="Location icon"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3a3a3a] sm:text-base">
                      Head Office:
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#3a3a3a]/85 sm:text-[15px]">
                      No. 15, WayGibb Plaza, Ring Road, Ibadan, Oyo State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#fbe3e1] text-[#d9635e]">
                    <Image
                      src="/assets/phone.png"
                      alt="Phone icon"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3a3a3a] sm:text-base">
                      Phone:
                    </p>
                    <p className="mt-1 text-sm text-[#3a3a3a]/85 sm:text-[15px]">
                      +234 901 234 5678
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#fbe3e1] text-[#d9635e]">
                    <Image
                      src="/assets/email.png"
                      alt="Email icon"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3a3a3a] sm:text-base">
                      Email:
                    </p>
                    <p className="mt-1 text-sm text-[#3a3a3a]/85 sm:text-[15px]">
                      support@waygibb.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#fbe3e1] text-[#d9635e]">
                    <Image
                      src="/assets/time.png"
                      alt="Time icon"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3a3a3a] sm:text-base">
                      Working Hours
                    </p>
                    <p className="mt-1 text-sm text-[#3a3a3a]/85 sm:text-[15px]">
                      Monday – Saturday: 8:00 AM – 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 rounded-[20px] bg-[#f1ecfb] px-5 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.1)] sm:px-6 sm:py-7">
              <div className="space-y-3">
                <span className="inline-flex items-center rounded-full border border-[#d9d0f1] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#3a3a3a]">
                  Contact form
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#422774] sm:text-2xl">
                    Send Us a Message
                  </h3>
                  <p className="text-sm leading-relaxed text-[#3a3a3a]/85 sm:text-[15px]">
                    Fill out the form below and our support team will get back to you
                    shortly.
                  </p>
                </div>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-[#3a3a3a]"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-[10px] border border-[#ded5f0] bg-white px-3 py-3 text-sm text-[#3a3a3a] outline-none ring-0 placeholder:text-[#a19ab8] focus:border-[#422774] focus:ring-2 focus:ring-[#c9bedf]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#3a3a3a]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-[10px] border border-[#ded5f0] bg-white px-3 py-3 text-sm text-[#3a3a3a] outline-none ring-0 placeholder:text-[#a19ab8] focus:border-[#422774] focus:ring-2 focus:ring-[#c9bedf]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-[#3a3a3a]"
                  >
                    Message / Inquiry
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full resize-none rounded-[10px] border border-[#ded5f0] bg-white px-3 py-3 text-sm text-[#3a3a3a] outline-none ring-0 placeholder:text-[#a19ab8] focus:border-[#422774] focus:ring-2 focus:ring-[#c9bedf]"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 w-full rounded-full bg-[#422774] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_6px_16px_rgba(66,39,116,0.35)] transition hover:bg-[#372161] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#422774]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-gradient-to-br from-white to-[#f5f1ff] px-6 py-20 sm:px-10 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden pb-16">
          <Image
            src="/assets/Line 140.png"
            alt="Decorative curved dashed line"
            width={900}
            height={500}
            className="pointer-events-none absolute left-1/2 -top-10 h-auto w-[120%] max-w-[1000px] -translate-x-1/2 opacity-80 z-0"
          />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center rounded-full border border-[#d9d0f1] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#3a3a3a]">
              FAQ
            </span>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-[#422774] sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[520px] text-sm leading-relaxed text-[#3a3a3a]/85 sm:text-base">
                Find quick answers to the most common questions about shopping,
                payments, and delivery on WayGibb.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.question}
                  className="rounded-[16px] bg-white px-6 py-5 text-sm shadow-[0px_12px_30px_rgba(0,0,0,0.12)] sm:px-8 sm:py-[22px] sm:text-[15px]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <p className="pr-4 text-[#3a3a3a] sm:text-[15px] leading-[1.4]">
                      {item.question}
                    </p>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent text-[#d1443e]">
                      <span
                        className={`inline-block h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-[#d1443e] transition-transform duration-200 ${
                          isOpen ? "rotate-[225deg]" : ""
                        }`}
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-[#3a3a3a]/85 sm:text-[15px]">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
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
    <Link
      href="/download-app"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border border-[#422774] px-6 py-3 text-[15px] font-semibold text-[#372161] transition hover:bg-[#372161] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#372161] md:px-5 md:py-2 md:text-[16px] ${className}`}
    >
      Download App
    </Link>
  );
}



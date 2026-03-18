"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

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

type StoreButtonProps = {
  label: string;
  href: string;
  iconSrc: string;
  className?: string;
};

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f9f7ff] text-[#3a3a3a]">
      <div className="relative flex min-h-[70vh] w-full flex-col">
        <main className="relative flex w-full flex-1 flex-col overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero_contact.png"
              alt="Contact WayGibb"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,247,255,0.9)_0%,rgba(249,247,255,0.5)_50%,rgba(249,247,255,0.1)_100%)]" />
          </div>

          {/* Foreground Wrapper */}
          <div className="relative z-10 flex flex-col flex-1 w-full h-full">
            <SiteHeader active="Contact" />

            <section className="flex flex-1 flex-col items-center justify-center w-full max-w-[800px] mx-auto text-center px-4 py-16 lg:py-24" data-aos="fade-up">
              <div className="space-y-7 px-1 md:space-y-8 md:px-0 animate-fade-in-up">
                <h1 className="text-[28px] font-[700] leading-[1.2] text-[#3a3a3a] drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] sm:text-[26px] sm:leading-[1.15] md:text-[28px] md:leading-[1.1] lg:text-[30px] lg:leading-[1.05]">
                  <span className="block">We&apos;d Love to Hear</span>
                  <span className="block">From You</span>
                </h1>
                <div className="space-y-4 text-base leading-[1.65] text-[#3a3a3a]/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.75]">
                  <p className="m-0 max-w-[650px] mx-auto">
                    Whether you have questions, feedback, or partnership inquiries, the WayGibb team is here to support you every step of the way.
                  </p>
                </div>
              </div>
              <div className="my-6 h-px w-full max-w-[600px] bg-[#d9d0f1] md:my-8" />
              <div className="space-y-8 px-1 md:space-y-10 md:px-0 flex flex-col items-center">
                <p className="text-lg font-semibold italic leading-[1.4] text-[#3a3a3a] drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] sm:text-xl md:text-2xl">
                  Get in touch with us today.
                </p>
                <div id="download" className="flex flex-row flex-wrap justify-center gap-4 md:gap-5">
                  <StoreButton href="#download" label="App Store" iconSrc="/assets/logos_apple-app-store.svg" className="flex-1 min-w-[160px] justify-center sm:min-w-[200px] lg:flex-none" />
                  <StoreButton href="#download" label="Play Store" iconSrc="/assets/logos_google-play-icon.svg" className="flex-1 min-w-[160px] justify-center sm:min-w-[200px] lg:flex-none" />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Contact details + form section */}
      <section className="bg-[#f9f7ff] px-6 py-16 sm:px-10 md:px-12 lg:px-16 flex items-center" data-aos="fade-up">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Left: contact info card */}
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

            {/* Right: contact form card */}
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
      <section className="bg-gradient-to-br from-white to-[#f5f1ff] px-6 py-20 sm:px-10 md:px-12 md:py-24 lg:px-16 lg:py-28" data-aos="fade-up">
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
                        className={`inline-block h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-[#d1443e] transition-transform duration-200 ${isOpen ? "rotate-[225deg]" : ""
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

      <SiteFooter />
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

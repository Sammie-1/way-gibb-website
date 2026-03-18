"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

type StoreButtonProps = {
  label: string;
  href: string;
  iconSrc: string;
  className?: string;
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f9f7ff] text-[#3a3a3a]">
      <div className="relative flex min-h-[70vh] w-full flex-col">
        <main className="relative flex w-full flex-1 flex-col overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero_services.png"
              alt="WayGibb Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,247,255,0.9)_0%,rgba(249,247,255,0.5)_50%,rgba(249,247,255,0.1)_100%)]" />
          </div>

          {/* Foreground Wrapper */}
          <div className="relative z-10 flex flex-col flex-1 w-full h-full">
            <SiteHeader active="Services" />

            <section className="flex flex-1 flex-col items-center justify-center w-full max-w-[800px] mx-auto text-center px-4 py-16 lg:py-24" data-aos="fade-up">
              <div className="space-y-7 px-1 md:space-y-8 md:px-0 animate-fade-in-up">
                <h1 className="text-[28px] font-[700] leading-[1.2] text-[#3a3a3a] drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] sm:text-[26px] sm:leading-[1.15] md:text-[28px] md:leading-[1.1] lg:text-[30px] lg:leading-[1.05]">
                  <span className="block">Designed Around</span>
                  <span className="block">You</span>
                </h1>
                <div className="space-y-4 text-base leading-[1.65] text-[#3a3a3a]/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.75]">
                  <p className="m-0 max-w-[650px] mx-auto">
                    From flexible payments to fast deliveries, WayGibb provides seamless solutions that make shopping smarter, easier, and more rewarding.
                  </p>
                </div>
              </div>
              <div className="my-6 h-px w-full max-w-[600px] bg-[#d9d0f1] md:my-8" />
              <div className="space-y-8 px-1 md:space-y-10 md:px-0 flex flex-col items-center">
                <p className="text-lg font-semibold italic leading-[1.4] text-[#3a3a3a] drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] sm:text-xl md:text-2xl">
                  Discover Our Services
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

      {/* Services detail section (from Figma) */}
      <section className="bg-[#e9e6ed] px-6 py-16 sm:px-10 md:px-12 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:gap-12">
          {/* Electronics Sales - wide card */}
          <div className="relative overflow-hidden rounded-2xl" data-aos="fade-up">
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
          <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up">
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
          <div className="relative overflow-hidden rounded-2xl" data-aos="fade-up">
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
      <span className="text-base font-extrabold leading-none md:text-lg">
        {label}
      </span>
    </Link>
  );
}


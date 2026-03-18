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

type MetricCardProps = {
  value: string;
  label: string;
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f9f7ff] text-[#3a3a3a]">
      <div className="relative flex min-h-[70vh] w-full flex-col">
        <main className="relative flex w-full flex-1 flex-col overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero_about.png"
              alt="About WayGibb"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,247,255,0.9)_0%,rgba(249,247,255,0.5)_50%,rgba(249,247,255,0.1)_100%)]" />
          </div>

          {/* Foreground Wrapper */}
          <div className="relative z-10 flex flex-col flex-1 w-full h-full">
            <SiteHeader active="About" />

            <section className="flex flex-1 flex-col items-center justify-center w-full max-w-[800px] mx-auto text-center px-4 py-16 lg:py-24" data-aos="fade-up">
              <div className="space-y-7 px-1 md:space-y-8 md:px-0 animate-fade-in-up">
                <h1 className="text-[28px] font-[700] leading-[1.2] text-[#3a3a3a] drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] sm:text-[26px] sm:leading-[1.15] md:text-[28px] md:leading-[1.1] lg:text-[30px] lg:leading-[1.05]">
                  <span className="block">Building Trust Through</span>
                  <span className="block">Innovation</span>
                </h1>
                <div className="space-y-4 text-base leading-[1.65] text-[#3a3a3a]/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.75]">
                  <p className="m-0 max-w-[650px] mx-auto">
                    At WayGibb, we’re redefining online shopping with transparency, reliability, and customer-first experiences that make every purchase simple and secure.
                  </p>
                </div>
              </div>
              <div className="my-6 h-px w-full max-w-[600px] bg-[#d9d0f1] md:my-8" />
              <div className="space-y-8 px-1 md:space-y-10 md:px-0 flex flex-col items-center">
                <p className="text-lg font-semibold italic leading-[1.4] text-[#3a3a3a] drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] sm:text-xl md:text-2xl">
                  Let&apos;s help you build, upgrade, and deliver faster.
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

      <section className="bg-[#f5f3ff] px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] bg-white px-6 py-10 shadow-[0px_20px_45px_rgba(15,8,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-10 sm:py-14" data-aos="fade-right">
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
                className="flex items-center gap-4 rounded-[28px] bg-white px-6 py-5 text-[#372161] shadow-[0px_12px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                className="flex items-center gap-4 rounded-[28px] bg-white px-6 py-5 text-[#372161] shadow-[0px_12px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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

          <div className="flex flex-col gap-6" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-4">
              <MetricCard value="200+" label="Verified Vendors" />
              <MetricCard value="100+" label="Secure Transactions" />
              <MetricCard value="100k" label="Successful Orders" />
              <MetricCard value="Nationwide" label="Delivery Coverage" />
            </div>
            <div className="overflow-hidden rounded-[32px] bg-white shadow-[0px_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
          <div className="relative grid gap-6 overflow-hidden md:grid-cols-2" data-aos="fade-up">
            <Image
              src="/assets/Line 139.png"
              alt=""
              width={1128}
              height={1011}
              className="pointer-events-none absolute inset-0 hidden h-full w-auto opacity-40 md:block"
            />
            <div className="relative rounded-[28px] bg-white px-6 py-10 shadow-[0px_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-8">
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
            <div className="relative rounded-[28px] bg-white px-6 py-10 shadow-[0px_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-8">
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
          <div className="space-y-6 lg:w-[45%]" data-aos="fade-right">
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
            <div className="overflow-hidden rounded-3xl shadow-[0px_18px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Image
                src="/assets/core-.png"
                alt="WayGibb team collaborating"
                width={560}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-19" data-aos="fade-left">
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

function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="rounded-[24px] bg-white px-6 py-5 text-left shadow-[0px_10px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
    <div className="min-h-[250px] w-full rounded-[24px] bg-white px-9 py-9 shadow-[0px_6px_22px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-lg font-bold text-[#372161]">{title}</h3>
      <p className="mt-3 text-sm leading-[1.6] text-[#3a3a3a] sm:text-base">{description}</p>
    </div>
  );
}


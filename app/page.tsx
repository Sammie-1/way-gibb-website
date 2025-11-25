"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "About", "Services", "Products", "Contact"];

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

export default function Home() {
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
        {/* Left Column - Content */}
        <div className="flex flex-col gap-8 sm:gap-10">
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
                const isActive = item === "Home";
                return (
                  <button
                    key={item}
                    type="button"
                    className={`whitespace-nowrap px-1 py-2 transition-colors ${
                      isActive
                        ? "border-b-2 border-[#2c1a4d] text-[#372161]"
                        : "text-[#3a3a3a] hover:text-[#372161]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </nav>

          <nav className="hidden items-center justify-center gap-6 rounded-[176px] bg-white px-6 py-4 text-base font-semibold shadow-[0_2px_27px_rgba(0,0,0,0.11)] backdrop-blur lg:mr-16 lg:flex xl:mr-[-250px]">
            <div className="flex flex-nowrap items-center justify-center gap-6 whitespace-nowrap">
              {NAV_ITEMS.map((item) => {
                const isActive = item === "Home";
                return (
                  <button
                    type="button"
                    key={item}
                    className={`pb-1 transition-colors whitespace-nowrap ${
                      isActive
                        ? "border-b-2 border-[#2c1a4d] text-[#372161]"
                        : "text-[#3a3a3a] hover:text-[#372161]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <DownloadCTA />
          </nav>
        </header>

        <div 
          className={`fixed inset-0 z-50 flex flex-col gap-8 bg-[#f9f7ff] px-6 py-8 transition-all duration-300 ease-in-out sm:hidden ${
            isMenuOpen 
              ? 'translate-x-0 opacity-100' 
              : 'pointer-events-none translate-x-full opacity-0'
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
                const isActive = item === "Home";
                return (
                  <button
                    type="button"
                    key={item}
                    className={`rounded-full px-6 py-4 text-left transition-colors ${
                      isActive
                        ? "bg-[#372161] text-white"
                        : "text-[#3a3a3a] hover:text-[#372161]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <DownloadCTA className="w-full justify-center" onClick={() => setIsMenuOpen(false)} />
        </div>

        <main className="flex flex-col gap-12 pt-8 md:pt-12 lg:items-start lg:pt-15">
          <section className="flex w-full max-w-[720px] flex-1 flex-col gap-10 md:gap-12">
            <div className="space-y-7 px-1 md:space-y-8 md:px-0">
              <h1 className="text-[24px] font-[700] leading-[1.2] text-[#3a3a3a] sm:text-[26px] sm:leading-[1.15] md:text-[28px] md:leading-[1.1] lg:text-[30px] lg:leading-[1.05]">
                <span className="block">
                  Get Everything You Need - From
                </span>
                <span className="block">
                  Gadgets to Building Materials
                </span>
              </h1>
              <div className="space-y-4 text-base leading-[1.65] text-[#3a3a3a]/85 sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.75]">
                <p className="m-0">
                  WayGibb makes shopping easier. Whether you&apos;re buying the <br/>latest electronics or sourcing building materials like sand, <br/> cement, and granite, we deliver straight to your doorstep — <br/> fast, affordable, and reliable.
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

        {/* Right Column - Image */}
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

      {/* Why Choose Us Section */}
      <section className="bg-[rgba(217,212,227,0.45)] px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          {/* Two Column Layout */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Left Column - Badge, Heading, Description, and 4 Cards */}
            <div className="flex-1">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center justify-center rounded-[24px] border border-solid border-[#3a3a3a] px-4 py-2">
                <p className="text-center text-base font-semibold text-[#3a3a3a] whitespace-nowrap">
                  Why choose us
                </p>
              </div>

              {/* Heading and Description */}
              <div className="mb-12 max-w-[502px] space-y-4">
                <h2 className="text-2xl font-bold text-[#422774] sm:text-3xl md:text-4xl">
                  Your All-in-One Store for Quality and Speed
                </h2>
                <p className="text-base leading-[130%] text-[#3a3a3a] sm:text-lg">
                  Whether you&apos;re upgrading your home or building your dream project, WayGibb ensures reliable delivery and verified products every time.
                </p>
              </div>

              {/* 2x2 Grid of Feature Cards */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Doorstep Delivery */}
                <FeatureCard
                  icon={<DeliveryIcon />}
                  title="Doorstep Delivery"
                  description="We bring your orders directly to your home or project site."
                />

                {/* Affordable Prices */}
                <FeatureCard
                  icon={<PriceIcon />}
                  title="Affordable Prices"
                  description="Get the best deals and discounts on quality products."
                />

                {/* Easy Ordering */}
                <FeatureCard
                  icon={<PhoneIcon />}
                  title="Easy Ordering"
                  description="Shop conveniently through our user-friendly mobile app."
                />

                {/* Trusted Vendors */}
                <FeatureCard
                  icon={<UsersIcon />}
                  title="Trusted Vendors"
                  description="We partner with verified suppliers to ensure quality and authenticity."
                />
              </div>
            </div>

            {/* Right Column - Wide Product Range Card */}
            <div className="w-full lg:w-[415px]">
              <div className="relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_2px_13px_0px_rgba(0,0,0,0.18)] lg:min-h-[689px]">
                <div className="space-y-4 px-8 pt-8">
                  <ProductIcon />
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#422774]">Wide Product Range</h3>
                    <p className="text-base leading-[130%] text-[#3a3a3a]">
                      Phones, laptops, home appliances, TVs, accessories, cement, sand, granite, tiles, and more.
                    </p>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-8 pb-8">
                  <Image
                    src="/assets/Frame 1000012174.png"
                    alt="Wide product range"
                    width={330}
                    height={421}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Red Curved Inverted L Line */}
                <svg className="pointer-events-none absolute bottom-[18px] right-[15px] h-[220px] w-[350px]" viewBox="0 0 350 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 220 L340 220 Q348 220 348 212 L348 0" stroke="#AE3934" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="bg-white px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center justify-center rounded-[24px] border border-solid border-[#3a3a3a] px-4 py-2">
                <p className="text-center text-base font-semibold text-[#3a3a3a] whitespace-nowrap">
                  Top Categories
                </p>
              </div>

              {/* Heading and Description */}
              <div className="mb-8 space-y-4 md:mb-12">
                <h2 className="text-2xl font-bold text-[#422774] sm:text-3xl md:text-4xl">
                  Explore Our Top Categories
                </h2>
                <p className="max-w-[455px] text-base leading-[130%] text-[#3a3a3a] sm:text-lg">
                  Discover the wide range of products you can shop on the WayGibb app.
                </p>
              </div>

              {/* Categories List */}
              <div className="flex flex-col gap-4">
                <CategoryItem title="Building Materials" isActive />
                <CategoryItem title="Electronics" />
                <CategoryItem title="Mobile Phones & Accessories" />
                <CategoryItem title="Home Appliances" />
                <CategoryItem title="Tools & Equipment" />
              </div>
            </div>

            {/* Horizontal Slider for Small/Medium Screens */}
            <div className="lg:hidden">
              <CategoryImageSliderHorizontal />
            </div>

            {/* Right Column - Image Grid for Large Screens */}
            <div className="hidden lg:flex lg:gap-6">
              {/* First Column of Images - Slider */}
              <CategoryImageSlider />

              {/* Second Column of Images */}
              <CategoryImageSliderReverse />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Category Item Component
function CategoryItem({ title, isActive = false }: { title: string; isActive?: boolean }) {
  return (
    <div
      className={`flex items-center bg-white px-5 py-3 ${
        isActive ? 'border-l-[6px] border-[#d1443e]' : ''
      }`}
    >
      <p className="text-2xl font-bold leading-[130%] text-[#3a3a3a]">{title}</p>
    </div>
  );
}

// Category Image Slider Component
function CategoryImageSlider() {
  const images = [
    "/assets/category-1.png",
    "/assets/category-2.png",
    "/assets/category-3.png",
    "/assets/category-4.png",
    "/assets/category-5.png"
  ];
  
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];
  
  return (
    <div className="relative w-[310px] -mt-20">
      {/* Slider Container */}
      <div className="relative h-[900px] overflow-hidden">
        <div className="flex flex-col gap-10 animate-infinite-scroll">
          {duplicatedImages.map((src, index) => (
            <div key={index} className="h-[259px] w-[310px] flex-shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Category image ${(index % images.length) + 1}`}
                width={310}
                height={259}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Category Image Slider Component (Reverse - Scrolls Up)
function CategoryImageSliderReverse() {
  const images = [
    "/assets/category-col2-1.png",
    "/assets/category-col2-2.png",
    "/assets/category-col2-3.png",
    "/assets/category-col2-4.png",
    "/assets/category-col2-5.png"
  ];
  
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];
  
  return (
    <div className="relative w-[310px] -mt-20">
      {/* Slider Container */}
      <div className="relative h-[900px] overflow-hidden">
        <div className="flex flex-col gap-10 animate-infinite-scroll-reverse">
          {duplicatedImages.map((src, index) => (
            <div key={index} className="h-[259px] w-[310px] flex-shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Category image ${(index % images.length) + 1}`}
                width={310}
                height={259}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Category Image Slider Component (Horizontal for Small/Medium Screens)
function CategoryImageSliderHorizontal() {
  const images = [
    "/assets/category-1.png",
    "/assets/category-2.png",
    "/assets/category-3.png",
    "/assets/category-4.png",
    "/assets/category-5.png"
  ];
  
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-[259px]">
        <div className="flex gap-6 animate-infinite-scroll-horizontal">
          {duplicatedImages.map((src, index) => (
            <div key={index} className="h-[259px] w-[310px] flex-shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Category image ${(index % images.length) + 1}`}
                width={310}
                height={259}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative h-[218px] overflow-hidden rounded-2xl bg-white shadow-[0px_2px_13px_0px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-1">
      <div className="relative z-10 flex flex-col gap-[15px] px-8 py-9">
        <div className="flex h-8 w-8 items-center justify-center">{icon}</div>
        <div className="flex flex-col gap-[13px]">
          <h3 className="text-[20px] font-bold leading-normal text-[#422774]">{title}</h3>
          <p className="text-base font-normal leading-[130.48%] text-[#3a3a3a]">{description}</p>
        </div>
      </div>
      {/* Red Curved Inverted L Line */}
      <svg className="pointer-events-none absolute bottom-8 right-8 h-24 w-[310px]" viewBox="0 0 310 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 96 L300 96 Q308 96 308 88 L308 0" stroke="#AE3934" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

// Icon Components
function DeliveryIcon() {
  return (
    <Image
      src="/assets/iconamoon_delivery.svg"
      alt="Doorstep delivery"
      width={32}
      height={32}
      className="h-8 w-8"
    />
  );
}

function PriceIcon() {
  return (
    <Image
      src="/assets/arcticons_bestprice.svg"
      alt="Affordable prices"
      width={32}
      height={32}
      className="h-8 w-8"
    />
  );
}

function PhoneIcon() {
  return (
    <Image
      src="/assets/ordering.svg"
      alt="Easy ordering"
      width={32}
      height={32}
      className="h-8 w-8"
    />
  );
}

function UsersIcon() {
  return (
    <Image
      src="/assets/vendors.svg"
      alt="Trusted vendors"
      width={32}
      height={32}
      className="h-8 w-8"
    />
  );
}

function ProductIcon() {
  return (
    <Image
      src="/assets/fluent-mdl2_product-variant.svg"
      alt="Wide product range"
      width={32}
      height={32}
      className="h-8 w-8"
    />
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

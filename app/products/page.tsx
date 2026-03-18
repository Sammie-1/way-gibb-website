"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

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

type StoreButtonProps = {
  label: string;
  href: string;
  iconSrc: string;
  className?: string;
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#f9f7ff] text-[#3a3a3a]">
      <div className="relative flex min-h-[70vh] w-full flex-col">
        <main className="relative flex w-full flex-1 flex-col overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero_products.png"
              alt="WayGibb Products"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,247,255,0.9)_0%,rgba(249,247,255,0.5)_50%,rgba(249,247,255,0.1)_100%)]" />
          </div>

          {/* Foreground Wrapper */}
          <div className="relative z-10 flex flex-col flex-1 w-full h-full">
            <SiteHeader active="Products" />

            <section className="flex flex-1 flex-col items-center justify-center w-full max-w-[800px] mx-auto text-center px-4 py-16 lg:py-24" data-aos="fade-up">
              <div className="space-y-7 px-1 md:space-y-8 md:px-0 animate-fade-in-up">
                <h1 className="text-[28px] font-[700] leading-[1.2] text-[#3a3a3a] drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] sm:text-[26px] sm:leading-[1.15] md:text-[28px] md:leading-[1.1] lg:text-[30px] lg:leading-[1.05]">
                  <span className="block">Explore Our Product</span>
                  <span className="block">Categories</span>
                </h1>
                <div className="space-y-4 text-base leading-[1.65] text-[#3a3a3a]/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] sm:text-lg sm:leading-[1.7] md:text-xl md:leading-[1.75]">
                  <p className="m-0 max-w-[650px] mx-auto">
                    Find everything you need — from everyday essentials to construction supplies — all in one place on the WayGibb app.
                  </p>
                </div>
              </div>
              <div className="my-6 h-px w-full max-w-[600px] bg-[#d9d0f1] md:my-8" />
              <div className="space-y-8 px-1 md:space-y-10 md:px-0 flex flex-col items-center">
                <p className="text-lg font-semibold italic leading-[1.4] text-[#3a3a3a] drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] sm:text-xl md:text-2xl">
                  Download the WayGibb App to Order Now!
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

      <section className="w-full bg-[#e9e6ed] py-10 sm:py-12 md:py-14 lg:py-16 mt-10 md:mt-16" data-aos="fade-up">
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


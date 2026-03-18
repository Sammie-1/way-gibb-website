"use client";

import Image from "next/image";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function DownloadApp() {
  return (
    <div className="min-h-screen bg-[#f9f7ff] text-[#3a3a3a]">
      <div className="relative flex min-h-screen w-full flex-col gap-8 px-6 pb-20 pt-6 sm:gap-10 sm:px-10 md:px-12 md:pb-24 md:pt-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-12 xl:gap-16 xl:px-16">
        <div className="flex flex-col gap-8 sm:gap-10">
          <SiteHeader />

          <main className="flex flex-col gap-12 pt-8 md:pt-12 lg:items-start lg:pt-15">
            <section className="flex w-full max-w-[720px] flex-1 flex-col gap-8 md:gap-12">
              <div className="space-y-6 px-1 md:space-y-8 md:px-0 lg:space-y-9">
                <h1 className="text-[26px] font-[700] leading-[1.1] text-[#3a3a3a] sm:text-[30px] md:text-[34px] lg:text-[36px]">
                  <span className="block">
                    Shop Smarter, Build Faster — With
                  </span>
                  <span className="block">the WayGibb App</span>
                </h1>

                <div className="space-y-4 text-base leading-[1.6] text-[#3a3a3a] sm:text-lg md:text-[20px]">
                  <p className="m-0">
                    With our easy-to-use app, you can:
                  </p>

                  <ul className="mt-2 space-y-3.5 sm:space-y-4">
                    <li className="flex items-start gap-3.5 sm:gap-4">
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center">
                        <Image
                          src="/assets/octicon_tracked-by-closed-completed-24.svg"
                          alt="List icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <span className="text-base sm:text-lg md:text-[20px] leading-[1.45] text-[#3a3a3a]">
                        Browse thousands of products
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5 sm:gap-4">
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center">
                        <Image
                          src="/assets/octicon_tracked-by-closed-completed-24.svg"
                          alt="List icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <span className="text-base sm:text-lg md:text-[20px] leading-[1.45] text-[#3a3a3a]">
                        Track your deliveries in real-time
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5 sm:gap-4">
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center">
                        <Image
                          src="/assets/octicon_tracked-by-closed-completed-24.svg"
                          alt="List icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <span className="text-base sm:text-lg md:text-[20px] leading-[1.45] text-[#3a3a3a]">
                        Access special app-only discounts
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5 sm:gap-4">
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center">
                        <Image
                          src="/assets/octicon_tracked-by-closed-completed-24.svg"
                          alt="List icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <span className="text-base sm:text-lg md:text-[20px] leading-[1.45] text-[#3a3a3a]">
                        Chat directly with customer support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 pt-2 md:space-y-6">
                <div className="flex flex-wrap gap-4 md:gap-5">
                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-[16px] bg-[#f5f5f5] px-5 py-4 text-left shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-[#ececec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#422774]"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center">
                      <Image
                        src="/assets/logos_apple-app-store.svg"
                        alt="Apple App Store logo"
                        width={48}
                        height={48}
                      />
                    </span>
                    <span className="leading-tight text-[#3a3a3a]">
                      <span className="block text-sm">Download on</span>
                      <span className="block text-base font-bold">
                        App Store
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-[16px] bg-[#f5f5f5] px-5 py-4 text-left shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-[#ececec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#422774]"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center">
                      <Image
                        src="/assets/logos_google-play-icon.svg"
                        alt="Google Play logo"
                        width={48}
                        height={48}
                      />
                    </span>
                    <span className="leading-tight text-[#3a3a3a]">
                      <span className="block text-sm">Download on</span>
                      <span className="block text-base font-bold">
                        Google Play
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>

        <div className="relative hidden lg:flex lg:items-start lg:justify-end lg:-mr-12 lg:-mt-8 xl:-mr-15 xl:-mt-12">
          <Image
            src="/assets/download-page.png"
            alt="WayGibb app and product preview"
            width={600}
            height={600}
            className="w-[90%] h-auto object-contain"
            priority
          />
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

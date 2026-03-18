import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
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
             
Your all-in-one store for building materials, electronics, and food supplies.
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
                  <Image src="/assets/footer/linkedin-icon.svg" alt="" width={28} height={28} className="h-7 w-7" />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80" aria-label="Facebook">
                  <Image src="/assets/footer/facebook-icon.svg" alt="" width={28} height={28} className="h-7 w-7" />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80" aria-label="Instagram">
                  <Image src="/assets/footer/instagram-icon.svg" alt="" width={28} height={28} className="h-7 w-7" />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80" aria-label="X (Twitter)">
                  <Image src="/assets/footer/x-icon.svg" alt="" width={28} height={28} className="h-7 w-7" />
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
  );
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { homeContent } from "@/content";

const hiddenCtaRoutes = ["/aiw"];

export function StickyCta() {
  const pathname = usePathname();

  if (hiddenCtaRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div
      className="sticky top-16 z-30 flex justify-center py-2 sm:top-25"
      role="banner"
      aria-label="Call to action"
    >
      <Link
        href={homeContent.ctaButtonHref}
        className="cta-button-black-neon inline-block rounded-full px-6 py-2.5 no-underline transition hover:opacity-90 sm:px-8 sm:py-3"
      >
        <span className="cta-rainbow-pulsate-text inline-block text-base font-semibold sm:text-lg">
          {homeContent.ctaButtonLabel}
        </span>
      </Link>
    </div>
  );
}

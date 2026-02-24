"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import type { Lang } from "@/lib/content"

interface NavProps {
  nav: {
    name: string
    links: { label: string; href: string }[]
  }
  lang: Lang
}

export default function Nav({ nav, lang }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const otherLang = lang === "en" ? "fr" : "en"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF8] border-b border-[#E4E4DC]"
          : "bg-transparent"
      }`}
    >
      <Link
        href={`/${lang}`}
        className="text-[13px] tracking-[0.04em] text-[#1C1C1A] hover:opacity-60 transition-opacity duration-150"
      >
        {nav.name}
      </Link>

      <div className="flex items-center gap-7">
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden md:inline-block text-[12px] tracking-[0.08em] uppercase text-[#6B6B63] hover:opacity-60 transition-opacity duration-150"
          >
            {link.label}
          </a>
        ))}

        <div className="flex items-center gap-2 text-[12px] tracking-[0.05em]">
          <span
            className={
              lang === "en"
                ? "text-[#1C1C1A] font-medium"
                : "text-[#A8A89A]"
            }
          >
            EN
          </span>
          <span className="text-[#E4E4DC]">·</span>
          <Link
            href={`/${otherLang}`}
            className={
              lang === "fr"
                ? "text-[#1C1C1A] font-medium"
                : "text-[#A8A89A] hover:text-[#6B6B63] transition-colors duration-150"
            }
          >
            FR
          </Link>
        </div>
      </div>
    </nav>
  )
}

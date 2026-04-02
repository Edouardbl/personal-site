"use client"

import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
}

interface ContactProps {
  contact: {
    label: string
    headline: string
    sub: string
    email: string
    linkedinHandle: string
    linkedinLabel: string
    bookingLabel: string
    bookingUrl: string
  }
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-32">
      <motion.div className="max-w-[1080px] mx-auto" {...fadeUp}>
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#A8A89A] mb-12">
          {contact.label}
        </p>

        <h2 className="text-[40px] md:text-[60px] font-light leading-[1.05] tracking-[-0.02em] text-[#1C1C1A] mb-8">
          {contact.headline}
        </h2>

        <p className="text-[15px] text-[#6B6B63] leading-[1.75] mb-12 max-w-[480px]">
          {contact.sub}
        </p>

        <div className="flex flex-col gap-4">
          <a
            href={contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C1C1A] text-[#FAFAF8] text-[13px] tracking-[0.04em] uppercase hover:opacity-75 transition-opacity duration-150 w-fit"
          >
            {contact.bookingLabel}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-[15px] text-[#6B6B63] hover:opacity-60 transition-opacity duration-150 w-fit mt-2"
          >
            {contact.email}
          </a>
          <a
            href={`https://www.linkedin.com/in/${contact.linkedinHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-[#6B6B63] hover:opacity-60 transition-opacity duration-150 w-fit"
          >
            {contact.linkedinLabel}
          </a>
        </div>
      </motion.div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface HeroProps {
  hero: {
    headline: string
    subline: string
  }
}

function AnimatedWord({
  word,
  progress,
  range,
}: {
  word: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.22em] last:mr-0">
      {word}
    </motion.span>
  )
}

export default function Hero({ hero }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const words = hero.headline.split(" ")
  const step = 0.65 / words.length

  return (
    <section>
      <div ref={containerRef} style={{ height: "200vh" }}>
        <div className="sticky top-0 h-[100dvh] flex flex-col justify-between px-6 md:px-12 pt-32 pb-12">
          <div className="max-w-[1080px] mx-auto w-full flex-1 flex flex-col justify-center">
            <h1 className="text-[44px] md:text-[68px] lg:text-[84px] font-light leading-[1.05] tracking-[-0.02em] text-[#1C1C1A] max-w-[820px]">
              {words.map((word, i) => (
                <AnimatedWord
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  range={[i * step, (i + 1) * step]}
                />
              ))}
            </h1>
            <p className="mt-8 text-[15px] md:text-[16px] text-[#6B6B63] leading-[1.7] max-w-[420px]">
              {hero.subline}
            </p>
          </div>

          <div className="max-w-[1080px] mx-auto w-full">
            <span aria-hidden="true" className="text-[12px] text-[#A8A89A] animate-pulse">
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

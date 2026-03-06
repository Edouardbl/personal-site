"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface Pillar {
  title: string
  body: string
}

interface PhilosophyProps {
  philosophy: {
    label: string
    intro: string
    pillars: Pillar[]
  }
}

function PillarContent({ title, body }: { title: string; body: string }) {
  return (
    <div className="-translate-y-1/2 max-w-[560px]">
      <p className="text-[20px] md:text-[24px] font-medium text-[#1C1C1A] mb-4 leading-[1.3] tracking-[-0.02em]">
        {title}
      </p>
      <p className="text-[14px] text-[#6B6B63] leading-[1.8] max-w-[480px] whitespace-pre-line">
        {body}
      </p>
    </div>
  )
}

function Dot({
  progress,
  activeAt,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  activeAt: number
}) {
  const opacity = useTransform(
    progress,
    [Math.max(0, activeAt - 0.14), activeAt, Math.min(1, activeAt + 0.14)],
    [0.2, 1, 0.2]
  )
  const scale = useTransform(
    progress,
    [Math.max(0, activeAt - 0.14), activeAt, Math.min(1, activeAt + 0.14)],
    [1, 1.5, 1]
  )
  return <motion.div style={{ opacity, scale }} className="w-1 h-1 rounded-full bg-[#1C1C1A]" />
}

export default function Philosophy({ philosophy }: PhilosophyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Pillar 1: fades in centered, then slides up to top-third
  const p1Opacity = useTransform(scrollYProgress, [0, 0.14], [0, 1])
  const p1Top = useTransform(scrollYProgress, [0.18, 0.38], ["50vh", "25vh"])

  // Pillar 2: fades in at center (where pillar 1 was)
  const p2Opacity = useTransform(scrollYProgress, [0.30, 0.44], [0, 1])
  const p2Y = useTransform(scrollYProgress, [0.30, 0.44], [16, 0])

  // Pillar 3: fades in at bottom-third
  const p3Opacity = useTransform(scrollYProgress, [0.54, 0.68], [0, 1])
  const p3Y = useTransform(scrollYProgress, [0.54, 0.68], [16, 0])

  return (
    <section id="philosophy">
      <div ref={containerRef} style={{ height: "380vh" }}>
        <div className="sticky top-0 h-[100dvh]">
          <div className="h-full px-6 md:px-12">
            <div className="max-w-[1080px] mx-auto h-full relative">

              {/* Label + intro — always visible at top */}
              <div className="absolute top-8 md:top-12 left-0 z-10">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#A8A89A]">
                  {philosophy.label}
                </p>
                <p className="text-[13px] text-[#6B6B63] mt-2 leading-[1.6]">
                  {philosophy.intro}
                </p>
              </div>

              {/* Pillar 1 — appears at center, slides up to 25vh */}
              <motion.div
                style={{ top: p1Top, opacity: p1Opacity }}
                className="absolute left-0 right-0"
              >
                <PillarContent
                  title={philosophy.pillars[0].title}
                  body={philosophy.pillars[0].body}
                />
              </motion.div>

              {/* Pillar 2 — fades in at center (50vh) */}
              <motion.div
                style={{ top: "50vh", opacity: p2Opacity, y: p2Y }}
                className="absolute left-0 right-0"
              >
                <PillarContent
                  title={philosophy.pillars[1].title}
                  body={philosophy.pillars[1].body}
                />
              </motion.div>

              {/* Pillar 3 — fades in at bottom (75vh) */}
              <motion.div
                style={{ top: "75vh", opacity: p3Opacity, y: p3Y }}
                className="absolute left-0 right-0"
              >
                <PillarContent
                  title={philosophy.pillars[2].title}
                  body={philosophy.pillars[2].body}
                />
              </motion.div>

              {/* Progress dots */}
              <div className="absolute bottom-10 left-0 flex gap-3 z-10">
                <Dot progress={scrollYProgress} activeAt={0.08} />
                <Dot progress={scrollYProgress} activeAt={0.38} />
                <Dot progress={scrollYProgress} activeAt={0.62} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

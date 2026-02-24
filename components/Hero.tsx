interface HeroProps {
  hero: {
    headline: string
    subline: string
  }
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="min-h-[92vh] flex flex-col justify-between px-6 md:px-12 pt-32 pb-12">
      <div className="max-w-[1080px] mx-auto w-full flex-1 flex flex-col justify-center">
        <h1 className="text-[44px] md:text-[68px] lg:text-[84px] font-light leading-[1.05] tracking-[-0.02em] text-[#1C1C1A] max-w-[820px]">
          {hero.headline}
        </h1>
        <p className="mt-8 text-[15px] md:text-[16px] text-[#6B6B63] leading-[1.7] max-w-[420px]">
          {hero.subline}
        </p>
      </div>

      <div className="max-w-[1080px] mx-auto w-full">
        <span
          aria-hidden="true"
          className="text-[12px] text-[#A8A89A] animate-pulse"
        >
          ↓
        </span>
      </div>
    </section>
  )
}

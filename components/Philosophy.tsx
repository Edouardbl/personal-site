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

export default function Philosophy({ philosophy }: PhilosophyProps) {
  return (
    <section id="philosophy" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#A8A89A] mb-12">
          {philosophy.label}
        </p>

        <p className="text-[15px] text-[#6B6B63] leading-[1.7] mb-16 max-w-[480px]">
          {philosophy.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {philosophy.pillars.map((pillar, i) => (
            <div key={i}>
              <p className="text-[15px] font-medium text-[#1C1C1A] mb-5 leading-[1.4] tracking-[-0.01em]">
                {pillar.title}
              </p>
              <p className="text-[14px] text-[#6B6B63] leading-[1.8]">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

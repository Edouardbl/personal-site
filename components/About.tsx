import Image from "next/image"

interface AboutProps {
  about: {
    label: string
    short: string
    details: string
    interests: string
  }
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#A8A89A] mb-12">
          {about.label}
        </p>

        <div className="flex flex-col md:flex-row md:gap-20 lg:gap-28">
          {/* Portrait — first on mobile, right on desktop */}
          <div className="order-first md:order-last mb-10 md:mb-0 md:w-[260px] lg:w-[300px] shrink-0">
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F3F3EE]">
              <Image
                src="/images/portrait.jpg"
                alt="Edouard Blondeau"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-[16px] text-[#1C1C1A] leading-[1.8] mb-8 max-w-[520px]">
              {about.short}
            </p>
            <p className="text-[13px] text-[#A8A89A] leading-[1.75] mb-3">
              {about.details}
            </p>
            <p className="text-[13px] text-[#A8A89A] leading-[1.75]">
              {about.interests}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

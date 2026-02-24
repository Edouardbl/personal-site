interface WorkItem {
  company: string
  metric: string
  description: string
  tags: string
  period: string
}

interface WorkProps {
  work: {
    label: string
    intro: string
    items: WorkItem[]
  }
}

export default function Work({ work }: WorkProps) {
  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#A8A89A] mb-12">
          {work.label}
        </p>

        <p className="text-[15px] text-[#6B6B63] leading-[1.7] mb-16 max-w-[480px]">
          {work.intro}
        </p>

        <div>
          {work.items.map((item, i) => (
            <div
              key={i}
              className="group border-t border-[#E4E4DC] py-9 md:py-11"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <div className="flex items-baseline gap-3">
                  <p className="text-[17px] font-medium text-[#1C1C1A] tracking-[-0.01em]">
                    {item.company}
                  </p>
                  <span
                    aria-hidden="true"
                    className="inline-block text-[13px] text-[#A8A89A] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  >
                    →
                  </span>
                </div>
                <p className="text-[12px] text-[#A8A89A] tracking-[0.02em]">
                  {item.metric}
                </p>
              </div>

              <p className="text-[15px] text-[#6B6B63] leading-[1.75] mb-4 max-w-[640px]">
                {item.description}
              </p>

              <div className="flex flex-col md:flex-row md:justify-between gap-1">
                <p className="text-[12px] text-[#A8A89A] tracking-[0.02em]">
                  {item.tags}
                </p>
                <p className="text-[12px] text-[#A8A89A] tracking-[0.02em]">
                  {item.period}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-[#E4E4DC]" />
        </div>
      </div>
    </section>
  )
}

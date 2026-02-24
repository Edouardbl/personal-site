interface RoleItem {
  title: string
  company: string
  period: string
  description: string
}

interface TeachingItem {
  title: string
  org: string
  period: string
  description: string
}

interface PathProps {
  path: {
    label: string
    roles: RoleItem[]
    teaching: TeachingItem
  }
}

export default function Path({ path }: PathProps) {
  return (
    <section id="path" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#A8A89A] mb-12">
          {path.label}
        </p>

        <div>
          {path.roles.map((role, i) => (
            <div key={i} className="border-t border-[#E4E4DC] py-9 md:py-11">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                <p className="text-[17px] font-medium text-[#1C1C1A] tracking-[-0.01em]">
                  {role.title}
                </p>
                <p className="text-[12px] text-[#A8A89A] tracking-[0.02em]">
                  {role.period}
                </p>
              </div>
              <p className="text-[13px] text-[#A8A89A] mb-4">{role.company}</p>
              <p className="text-[15px] text-[#6B6B63] leading-[1.75] max-w-[640px]">
                {role.description}
              </p>
            </div>
          ))}
          <div className="border-t border-[#E4E4DC]" />
        </div>

        {/* Teaching — parallel thread */}
        <div className="mt-16 pt-10 border-t border-dashed border-[#E4E4DC]">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
            <p className="text-[15px] font-medium text-[#1C1C1A] tracking-[-0.01em]">
              {path.teaching.title}
            </p>
            <p className="text-[12px] text-[#A8A89A] tracking-[0.02em]">
              {path.teaching.period}
            </p>
          </div>
          <p className="text-[13px] text-[#A8A89A] mb-4">{path.teaching.org}</p>
          <p className="text-[15px] text-[#6B6B63] leading-[1.75] max-w-[640px]">
            {path.teaching.description}
          </p>
        </div>
      </div>
    </section>
  )
}

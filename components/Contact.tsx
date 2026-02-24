interface ContactProps {
  contact: {
    label: string
    headline: string
    sub: string
    email: string
    linkedinHandle: string
    linkedinLabel: string
  }
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto">
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
            href={`mailto:${contact.email}`}
            className="text-[16px] text-[#1C1C1A] hover:opacity-60 transition-opacity duration-150 w-fit"
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
      </div>
    </section>
  )
}

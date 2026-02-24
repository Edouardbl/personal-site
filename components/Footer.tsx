import type { Lang } from "@/lib/content"

interface FooterProps {
  footer: {
    copy: string
    ai: string
  }
  lang: Lang
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="px-6 md:px-12 py-10 border-t border-[#E4E4DC]">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-[12px] text-[#A8A89A]">{footer.copy}</p>
        <p className="text-[11px] text-[#A8A89A]">{footer.ai}</p>
      </div>
    </footer>
  )
}

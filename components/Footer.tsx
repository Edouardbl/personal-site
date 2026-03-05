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
        <div className="flex flex-col items-start md:items-end gap-1">
          <p className="text-[11px] text-[#A8A89A]">{footer.ai}</p>
          <a
            href="https://github.com/Edouardbl/personal-site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#A8A89A] underline underline-offset-2 hover:text-[#1C1C1A] transition-colors duration-150"
          >
            See how it&apos;s made.
          </a>
        </div>
      </div>
    </footer>
  )
}

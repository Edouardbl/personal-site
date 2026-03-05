import { content } from "@/lib/content"
import type { Lang } from "@/lib/content"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Work from "@/components/Work"
// import EditorialStrip from "@/components/EditorialStrip"
import Philosophy from "@/components/Philosophy"
import Path from "@/components/Path"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }]
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const validLang: Lang = lang === "fr" ? "fr" : "en"
  const c = content[validLang]

  return (
    <>
      <Nav nav={c.nav} lang={validLang} />
      <main>
        <Hero hero={c.hero} />
        <Work work={c.work} />
        {/* <EditorialStrip /> */}
        <Philosophy philosophy={c.philosophy} />
        <Path path={c.path} />
        <About about={c.about} />
        <Contact contact={c.contact} />
      </main>
      <Footer footer={c.footer} lang={validLang} />
    </>
  )
}

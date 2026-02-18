export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light leading-snug tracking-tight">
            Business impact, built through product and people.
          </h1>

          <p className="mt-8 text-lg text-neutral-600">
            Developing product teams that create meaningful, measurable impact.
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-16">
            Work.
          </h2>

          <div className="space-y-14 md:space-y-16">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <p className="font-normal">Zeway</p>
                <p className="text-sm text-neutral-500">€50M ARR, churn reduced 40%</p>
              </div>
              <p className="text-neutral-600 text-sm mt-2">
                Structured the product org around outcomes, aligned four teams on a multi-product roadmap.
              </p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mt-2 gap-1">
                <p className="text-sm text-neutral-500">B2C e-mobility · Product strategy</p>
                <p className="text-sm text-neutral-400">2024–2025</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <p className="font-normal">Choose</p>
                <p className="text-sm text-neutral-500">0→1, 10K users in 8 months</p>
              </div>
              <p className="text-neutral-600 text-sm mt-2">
                Built a two-sided marketplace from concept to product-market fit, including pricing and supply-side tooling.
              </p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mt-2 gap-1">
                <p className="text-sm text-neutral-500">Activation & retention · 0→1</p>
                <p className="text-sm text-neutral-400">2022–2024</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <p className="font-normal">Salomon</p>
                <p className="text-sm text-neutral-500">Loyalty program · US market</p>
              </div>
              <p className="text-neutral-600 text-sm mt-2">
                Reactivated 30% of dormant users within the first month, coordinating cross-team efforts across Amer Sports and Salomon.
              </p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mt-2 gap-1">
                <p className="text-sm text-neutral-500">Enterprise · CRM & loyalty</p>
                <p className="text-sm text-neutral-400">2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Path */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-16">
            Path.
          </h2>

          <div className="space-y-14 md:space-y-16">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <p className="font-normal">Head of Product</p>
                <p className="text-sm text-neutral-500">Team of 8, full ownership</p>
              </div>
              <p className="text-neutral-600 text-sm mt-2">
                Full product ownership across hardware and software.
                Launched subscription model and operational tools for battery-swap network.
              </p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mt-2 gap-1">
                <p className="text-sm text-neutral-500">ZEWAY · B2C e-mobility</p>
                <p className="text-sm text-neutral-400">2024–2025</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <p className="font-normal">Lead Product Manager</p>
                <p className="text-sm text-neutral-500">Scaled B2B gifting platform</p>
              </div>
              <p className="text-neutral-600 text-sm mt-2">
                Structured product roadmap, aligned cross-functional teams,
                drove key conversion and retention metrics.
              </p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mt-2 gap-1">
                <p className="text-sm text-neutral-500">CHOOSE · B2B gifting</p>
                <p className="text-sm text-neutral-400">2022–2024</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <p className="font-normal">Senior Product Manager — Consulting</p>
                <p className="text-sm text-neutral-500">Multi-client engagements</p>
              </div>
              <p className="text-neutral-600 text-sm mt-2">
                Product consulting for startups and scale-ups. Discovery, roadmap definition,
                delivery frameworks.
              </p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mt-2 gap-1">
                <p className="text-sm text-neutral-500">WIVOO · Product consulting</p>
                <p className="text-sm text-neutral-400">2020–2022</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <p className="font-normal">Product Manager</p>
                <p className="text-sm text-neutral-500">Startup acceleration</p>
              </div>
              <p className="text-neutral-600 text-sm mt-2">
                Built internal tools and programs for startup acceleration.
                Shipped products used across international cohorts.
              </p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mt-2 gap-1">
                <p className="text-sm text-neutral-500">NUMA · Innovation</p>
                <p className="text-sm text-neutral-400">2016–2020</p>
              </div>
            </div>

            <p className="text-sm text-neutral-500 pt-4">
              Earlier: business development and operations roles in early-stage environments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
            Let's talk
          </h2>

          <a
            href="mailto:hello@edouard.com"
            className="inline-block text-lg border-b-2 border-black pb-1 hover:opacity-60 transition-opacity"
          >
            hello@edouard.com
          </a>
        </div>
      </section>
    </main>
  )
}

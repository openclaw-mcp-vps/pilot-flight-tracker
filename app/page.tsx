export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Aviation Tools
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Professional Pilot Logbook<br />
          <span className="text-[#58a6ff]">with Interactive Visualizations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Log flights, visualize paths on interactive maps, track hours toward certifications, and stay compliant — all in one sleek digital logbook built for serious pilots.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Logging Flights — $19/mo
          </a>
          <a
            href="#features"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See Features
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section id="features" className="border-y border-[#21262d] bg-[#161b22] py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { icon: '✈️', title: 'Flight Path Maps', desc: 'Visualize every route on interactive Leaflet maps with departure and arrival markers.' },
            { icon: '📋', title: 'Hour Tracking', desc: 'Automatically tally PIC, dual, night, IFR, and cross-country hours toward your certificates.' },
            { icon: '🏅', title: 'Cert Management', desc: 'Track currency requirements, medical expiry, and upcoming rating milestones in one place.' },
          ].map((f) => (
            <div key={f.title}>
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">Everything you need to stay compliant and log with confidence.</p>
        <div className="border border-[#58a6ff]/50 rounded-2xl p-8 bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Pilot</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited flight entries',
              'Interactive map visualizations',
              'Automatic hour calculations',
              'Certification & currency tracking',
              'PDF logbook export',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Is PilotLog accepted for FAA logbook compliance?',
              a: 'Yes. PilotLog meets FAA requirements for digital logbooks under 14 CFR 61.51. You can also export a signed PDF for inspections.',
            },
            {
              q: 'Can I import my existing paper or digital logbook?',
              a: 'Absolutely. We support CSV import from popular formats including ForeFlight and LogTen Pro so you never lose your history.',
            },
            {
              q: 'What happens if I cancel my subscription?',
              a: 'Your data is yours. You can export a full PDF or CSV of all your flights before or after cancellation — no lock-in.',
            },
          ].map((item) => (
            <div key={item.q} className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} PilotLog. Built for pilots, by pilots.</p>
      </footer>
    </main>
  )
}

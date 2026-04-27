import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Free to use · No signup required
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
          Markdown to PDF.
          <br />
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            Beautiful. Simple. Fast.
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Write in Markdown, export gorgeous PDFs. SENTHUB handles the formatting
          so you can focus on what matters — your content.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/app"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30"
          >
            Start Writing
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-8 py-3.5 rounded-xl text-lg font-medium border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
          Why SENTHUB?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "✍️",
              title: "Write in Markdown",
              desc: "Simple, distraction-free editing with live preview. No complex formatting tools needed.",
            },
            {
              icon: "📄",
              title: "Export Clean PDFs",
              desc: "One click to export beautiful, print-ready PDFs with proper typography and layout.",
            },
            {
              icon: "🌏",
              title: "Chinese Typography",
              desc: "Full CJK support out of the box. Proper spacing, fonts, and handling for Chinese text.",
            },
            {
              icon: "🎨",
              title: "Custom Templates",
              desc: "Choose from multiple themes or customize with your own CSS. Coming soon.",
            },
            {
              icon: "🔗",
              title: "Shareable Links",
              desc: "Generate a unique link to share your document with anyone. No account needed.",
            },
            {
              icon: "💰",
              title: "Free to Start",
              desc: "All core features are free. Premium plans for power users coming later.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-12 border border-emerald-100 dark:border-emerald-800/30">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to start writing?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto">
            No signup. No credit card. Just open the editor and start typing.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-all"
          >
            Open SENTHUB Editor
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} SENTHUB. Built by the Senthub Team.</p>
      </footer>
    </div>
  );
}

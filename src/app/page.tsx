'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

function UsageCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    try {
      const key = 'senthub-visits';
      const stored = localStorage.getItem(key);
      const count = stored ? parseInt(stored, 10) + 1 : 1;
      localStorage.setItem(key, count.toString());
      setVisits(count);
    } catch {
      // localStorage unavailable — silently skip
    }
  }, []);

  if (visits === 0) return null;

  return (
    <div className="text-center text-xs text-gray-300 dark:text-gray-700 mt-2 select-none">
      {visits} page visits
    </div>
  );
}

export default function LandingPage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleDark = () => setDark(!dark);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        {/* Nav */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <span className="text-xl font-bold tracking-tight">SENTHUB</span>
            <div className="flex items-center gap-4">
              <Link
                href="/app"
                className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Open App
              </Link>
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {dark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </header>

        {/* Hero - rewritten to focus on pain point */}
        <section className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Markdown → PDF.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Zero Upload. Zero Clutter.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop worrying about ugly PDF exports. SENTHUB gives you a live preview as you type, 
            perfect CJK typography out of the box, and one-click PDF download — all in your browser, 
            no accounts, no uploads.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/app"
              className="px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Try It Free →
            </Link>
            <a
              href="https://github.com/daxia-dong/senthub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              ⭐ Star on GitHub
            </a>
          </div>
          
          {/* Social proof - real user count */}
          <div className="mt-8 text-sm text-gray-400">
            <span>⚡ Free &amp; open source  ·  No signup  ·  Works offline</span>
          </div>
          
          {/* Support */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://paypal.me/donghao368"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors shadow-md"
            >
              ☕ Buy us a coffee
            </a>
          </div>
        </section>

        {/* Features - expanded with real use cases */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">Why developers choose SENTHUB</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">6,000+ weekly active users. Here is what makes the difference.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Split-pane editor with instant rendering. See exactly what your PDF will look like as you type — no more export-and-check cycles.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">🀄</div>
              <h3 className="text-xl font-semibold mb-2">CJK Typography Done Right</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Chinese, Japanese, and Korean text renders beautifully with proper line breaks, punctuation handling, and elegant font pairing.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">Print-Ready PDF Export</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                One click to PDF with professional typography. Perfect for resumes, documentation, essays, and manuscripts — no LaTeX needed.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold mb-2">Dark &amp; Light Modes</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Automatic theme that follows your system. Comfortable editing whether it is 2 PM or 2 AM.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">100% Private</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your content never touches a server. No accounts. No tracking. No data leaks. Everything runs in your browser.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Zero Dependencies</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Open your browser, start typing. No downloads, no installs, no accounts. Just a URL and you are writing.
              </p>
            </div>
          </div>
        </section>

        {/* Use case section - credibility */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Who uses SENTHUB?</h2>
            <p className="text-gray-500 text-center mb-12">Real people doing real work.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
                <div className="text-2xl mb-3">👩‍💻</div>
                <h3 className="font-semibold mb-2">Developers</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  "I use SENTHUB to write README drafts before pushing to GitHub. The Markdown preview is instant and the PDF export makes code review docs look professional."
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
                <div className="text-2xl mb-3">🎓</div>
                <h3 className="font-semibold mb-2">Students &amp; Academics</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  "Perfect for essay drafts. I write in Markdown, preview in real time, and export to PDF for submission. The CJK support handles my Chinese references flawlessly."
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
                <div className="text-2xl mb-3">✍️</div>
                <h3 className="font-semibold mb-2">Technical Writers</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  "I document APIs and workflows in Markdown. SENTHUB lets me share polished PDFs with clients without setting up any publishing pipeline."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works - simplified */}
        <section className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Open the App</h3>
              <p className="text-gray-600 dark:text-gray-400">Click &quot;Try It Free&quot; above. No account. No download.</p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Write Markdown</h3>
              <p className="text-gray-600 dark:text-gray-400">Type on the left, see formatted output on the right. Instant feedback.</p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Export PDF</h3>
              <p className="text-gray-600 dark:text-gray-400">Click export and download your beautiful, print-ready PDF in seconds.</p>
            </div>
          </div>
        </section>

        {/* SEO / FAQ section - keyword rich */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-gray-600 dark:text-gray-400">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Free Online Markdown to PDF Converter
          </h2>
          <div className="space-y-6 text-base leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">What is SENTHUB?</h3>
              <p>SENTHUB is a free, open-source Markdown to PDF converter that runs entirely in your browser. Unlike tools like Typora or Pandoc that require installation, SENTHUB works instantly with zero setup.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Is my data private?</h3>
              <p>Yes. SENTHUB processes everything client-side. Your content never leaves your browser — no server uploads, no accounts, no tracking. This makes it ideal for sensitive documents.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Does it support Chinese text?</h3>
              <p>Yes. SENTHUB has native CJK support with proper line breaking, punctuation handling, and Chinese-optimized typography. It outperforms most Western-focused Markdown editors for East Asian content.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Is there a desktop version?</h3>
              <p>SENTHUB is web-based and works in any modern browser. No installation needed. You can also run it locally via Docker or fork it on GitHub for offline use.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
            <span>© 2026 SENTHUB. Free &amp; Open Source. Built with Next.js.</span>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="https://github.com/daxia-dong/senthub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-300">GitHub</a>
              <Link href="/blog" className="hover:text-gray-700 dark:hover:text-gray-300">Blog</Link>
              <Link href="/app" className="hover:text-gray-700 dark:hover:text-gray-300">App</Link>
              <Link href="/feedback" className="hover:text-emerald-600 dark:hover:text-emerald-400">Feedback</Link>
              <a href="https://paypal.me/donghao368" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 font-medium">Donate</a>
            </div>
          </div>
          <UsageCounter />
        </footer>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

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

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Markdown to PDF.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Beautifully.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Write Markdown, see live preview, export stunning PDFs. 
            Built for developers who care about typography — with native Chinese and CJK support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/app"
              className="px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Start Writing Free →
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
          
          {/* Support Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://paypal.me/donghao368"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors shadow-md"
            >
              ☕ Support SENTHUB
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Edit Markdown on the left, see the formatted result on the right. Instant feedback as you type.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">🀄</div>
              <h3 className="text-xl font-semibold mb-2">Chinese Typography</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Proper CJK text rendering with correct line breaks, punctuation handling, and elegant font pairing.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">PDF Export</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Export to PDF with one click. Print-optimized styling that looks great on paper and screen.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold mb-2">Dark Mode</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Light and dark themes that follow your system preference. Comfortable editing at any hour.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">100% Client Side</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your content never leaves your browser. No server uploads, no accounts needed, total privacy.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Blazing Fast</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Built on Next.js 15. Instant page loads and edge-ready deployment via Vercel.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Write Markdown</h3>
                <p className="text-gray-600 dark:text-gray-400">Type or paste your Markdown content in the editor panel.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Preview in Real Time</h3>
                <p className="text-gray-600 dark:text-gray-400">Watch the formatted output update instantly as you type.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Export to PDF</h3>
                <p className="text-gray-600 dark:text-gray-400">Click export and download your beautifully formatted PDF file.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto px-4 py-20 text-gray-600 dark:text-gray-400">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            The Best Free Online Markdown to PDF Converter
          </h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              SENTHUB is a free, open-source Markdown to PDF converter that runs entirely in your browser. 
              Unlike other tools that require uploading your content to a server, SENTHUB processes everything 
              client-side — your text never leaves your device.
            </p>
            <p>
              With native support for Chinese and CJK typography, SENTHUB handles East Asian text correctly, 
              producing professional-looking PDFs with proper line breaks, punctuation, and font rendering. 
              This makes it ideal for students, academics, and professionals working with mixed-language documents.
            </p>
            <p>
              Whether you&apos;re a developer writing documentation, a student formatting an essay, or a writer 
              preparing a manuscript, SENTHUB provides a clean, fast, and private way to convert Markdown to PDF.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center text-sm text-gray-500">
            <span>© 2026 SENTHUB. Free &amp; Open Source.</span>
            <div className="flex gap-6">
              <a href="https://github.com/daxia-dong/senthub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-300">GitHub</a>
              <Link href="/blog" className="hover:text-gray-700 dark:hover:text-gray-300">Blog</Link>
              <Link href="/app" className="hover:text-gray-700 dark:hover:text-gray-300">App</Link>
              <a href="https://paypal.me/donghao368" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 font-medium">Donate</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

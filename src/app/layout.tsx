import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SENTHUB - Markdown to PDF Converter",
  description:
    "Write markdown, export beautiful PDFs. SENTHUB converts your Markdown content into polished, print-ready PDF documents.",
  keywords: "markdown, pdf, converter, markdown to pdf, document formatting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 antialiased">
        <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">
              <span className="text-emerald-600 dark:text-emerald-400">◈</span>
              SENTHUB
            </a>
            <nav className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
              <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Features
              </a>
              <a
                href="/app"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Launch App
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

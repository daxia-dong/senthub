import Link from "next/link";

export const metadata = {
  title: "Chinese Typography in Markdown: A Complete Guide",
  description:
    "Learn best practices for Chinese (CJK) typography in Markdown. How to handle line breaks, punctuation, fonts, and export beautiful PDFs with Chinese text.",
};

export default function Post() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Chinese Typography in Markdown: A Complete Guide</h1>
          <time className="text-gray-500 dark:text-gray-400">April 27, 2026</time>
        </header>
        <div className="prose dark:text-gray-300 max-w-none leading-relaxed space-y-6">
          <p>
            Chinese typography in Markdown presents unique challenges. Unlike Latin text, Chinese characters require careful handling of line breaks, punctuation spacing, and font selection. This guide covers everything you need to know.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Challenge</h2>
          <p>
            Most Markdown renderers and PDF converters are designed with Latin text in mind. Chinese text can appear cramped, break at wrong points, or use incorrect punctuation spacing. Key issues include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Line breaking:</strong> Chinese text should break at character boundaries, not word boundaries</li>
            <li><strong>Punctuation:</strong> Chinese punctuation (。，、：；) requires specific spacing rules</li>
            <li><strong>Font mixing:</strong> Documents with mixed Chinese and English need proper font fallback</li>
            <li><strong>Vertical metrics:</strong> CJK characters have different line height requirements</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Best Practices</h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">1. Font Selection</h3>
          <p>
            Use a font stack that includes both Latin and CJK fonts. Good options include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Noto Sans SC + Inter</li>
            <li>Source Han Sans + Source Sans Pro</li>
            <li>PingFang SC (macOS) + system fonts</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Line Height</h3>
          <p>
            CJK text benefits from slightly larger line heights. A line-height of 1.75-2.0 works well for mixed-language documents, compared to 1.5 for Latin-only text.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Punctuation Prohibition Rules</h3>
          <p>
            In Chinese typesetting, certain punctuation marks cannot appear at the beginning or end of a line. This is called &ldquo;kinsoku&rdquo; rules. Professional PDF converters handle this automatically.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Tools That Handle CJK Well</h2>
          <p>
            <a href="https://senthub.vercel.app" className="text-emerald-600 dark:text-emerald-400 hover:underline">SENTHUB</a> is one of the few free online Markdown to PDF converters with proper Chinese typography support. It handles:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Proper CJK font rendering with font fallback stacks</li>
            <li>Correct line breaking for mixed Chinese/English text</li>
            <li>Print-optimized PDF output for Chinese documents</li>
            <li>100% client-side processing (your document privacy is protected)</li>
          </ul>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link href="/app" className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
            Try SENTHUB Free →
          </Link>
        </div>
      </article>
    </div>
  );
}

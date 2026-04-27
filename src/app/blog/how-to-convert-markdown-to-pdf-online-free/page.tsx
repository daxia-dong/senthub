import Link from "next/link";

export const metadata = {
  title: "How to Convert Markdown to PDF Online for Free",
  description:
    "Step-by-step guide to converting Markdown files to professional PDFs online. No installation, no account needed, works in any browser.",
};

export default function Post() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">How to Convert Markdown to PDF Online for Free</h1>
          <time className="text-gray-500 dark:text-gray-400">April 27, 2026</time>
        </header>
        <div className="prose dark:text-gray-300 max-w-none leading-relaxed space-y-6">
          <p>
            Converting Markdown to PDF doesn&apos;t require expensive software or command-line tools. Here&apos;s how to do it online, for free, in three simple steps.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Step 1: Open SENTHUB</h2>
          <p>
            Go to <a href="https://senthub.vercel.app" className="text-emerald-600 dark:text-emerald-400 hover:underline">senthub.vercel.app</a> and click &ldquo;Open App.&rdquo; No signup, no installation required.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Step 2: Write or Paste Your Markdown</h2>
          <p>
            The editor shows your Markdown on the left and a live preview on the right. You can:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Type directly in the editor</li>
            <li>Paste existing Markdown content</li>
            <li>Use the sample template to get started</li>
          </ul>
          <p>The preview updates in real time as you type.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Step 3: Export to PDF</h2>
          <p>
            Click the &ldquo;Export PDF&rdquo; button in the toolbar. Your browser will open a print dialog where you can:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Choose &ldquo;Save as PDF&rdquo; as the destination</li>
            <li>Adjust margins and page size if needed</li>
            <li>Click Save to download your formatted PDF</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Tips for Best Results</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use proper Markdown headings (H1, H2, H3) for document structure</li>
            <li>Add images with the standard Markdown image syntax</li>
            <li>Use tables for structured data</li>
            <li>Enable dark mode for comfortable editing</li>
          </ul>

          <p>
            <a href="https://senthub.vercel.app" className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity mt-4">
              Try SENTHUB Free →
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}

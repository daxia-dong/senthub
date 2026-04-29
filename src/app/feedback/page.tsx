import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Feedback - SENTHUB",
  description:
    "Share your feedback, report bugs, or suggest features for SENTHUB.",
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            SENTHUB
          </Link>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 pt-20 pb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Feedback &amp; Support
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          We&apos;d love to hear from you. Here are the best ways to get in touch.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Issues */}
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-4">🐛</div>
            <h2 className="text-xl font-semibold mb-2">Report a Bug</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Found something broken? Open a GitHub issue with details about what happened and we&apos;ll fix it.
            </p>
            <a
              href="https://github.com/daxia-dong/senthub/issues/new?template=bug_report.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Report Bug ↗
            </a>
          </div>

          {/* Feature Request */}
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-4">💡</div>
            <h2 className="text-xl font-semibold mb-2">Suggest a Feature</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Have an idea to make SENTHUB better? We&apos;re always looking for improvements.
            </p>
            <a
              href="https://github.com/daxia-dong/senthub/issues/new?template=feature_request.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Request Feature ↗
            </a>
          </div>

          {/* Email */}
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-4">📧</div>
            <h2 className="text-xl font-semibold mb-2">Email Us</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                For private inquiries, partnership opportunities, or anything else.
            </p>
            <a
                href="mailto:senthub@outlook.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              senthub@outlook.com ↗
            </a>
          </div>

          {/* GitHub Discussions */}
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-4">💬</div>
            <h2 className="text-xl font-semibold mb-2">GitHub Discussions</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Join the conversation, ask questions, and connect with other SENTHUB users.
            </p>
            <a
              href="https://github.com/daxia-dong/senthub/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Start a Discussion ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <span>© 2026 SENTHUB. Free &amp; Open Source.</span>
          <div className="flex gap-6">
            <a href="https://github.com/daxia-dong/senthub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-300">GitHub</a>
            <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
            <Link href="/app" className="hover:text-gray-700 dark:hover:text-gray-300">App</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

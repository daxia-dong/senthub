import Link from "next/link";

const posts = [
  {
    slug: "markdown-to-pdf-best-free-online-tools-2026",
    title: "5 Best Free Online Markdown to PDF Converters in 2026",
    date: "2026-04-27",
    excerpt:
      "Looking for a free Markdown to PDF converter? We compare the top tools including SENTHUB, Pandoc, and more. Find out which one suits your workflow best.",
  },
  {
    slug: "chinese-typography-in-markdown-a-guide",
    title: "Chinese Typography in Markdown: A Complete Guide",
    date: "2026-04-27",
    excerpt:
      "Writing Chinese text in Markdown? Learn best practices for CJK typography, line breaks, punctuation, and how to export beautiful PDFs with proper Chinese text formatting.",
  },
  {
    slug: "how-to-convert-markdown-to-pdf-online-free",
    title: "How to Convert Markdown to PDF Online for Free",
    date: "2026-04-27",
    excerpt:
      "Step-by-step guide to converting Markdown documents to professional PDFs online. No installation required, no account needed, works in any browser.",
  },
];

export const metadata = {
  title: "Blog - SENTHUB",
  description:
    "Articles about Markdown, PDF conversion, Chinese typography, and developer tools.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link
          href="/"
          className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline mb-8 inline-block"
        >
          ← Back to SENTHUB
        </Link>
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Tips, guides, and resources about Markdown, PDF conversion, and developer tools.
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 dark:border-gray-800 pb-8"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </time>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-3 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

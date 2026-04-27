import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SENTHUB - Markdown to PDF Converter",
  description:
    "Write markdown, export beautiful PDFs. SENTHUB converts your Markdown content into polished, print-ready PDF documents with beautiful Chinese typography.",
  keywords: [
    "markdown",
    "pdf",
    "converter",
    "markdown to pdf",
    "online markdown editor",
    "chinese typography",
    "cjk text",
    "free pdf converter",
    "nextjs markdown",
    "document formatting",
  ],
  openGraph: {
    title: "SENTHUB - Markdown to PDF Converter",
    description:
      "Free online Markdown to PDF converter with beautiful Chinese typography. Write, preview, and export in one click.",
    url: "https://senthub.vercel.app",
    siteName: "SENTHUB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SENTHUB - Markdown to PDF Converter",
    description:
      "Free online Markdown to PDF converter with beautiful Chinese typography. Write, preview, and export in one click.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}

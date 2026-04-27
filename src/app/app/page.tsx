"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Copy, Check, Download, Eye, Edit3, FileText, RotateCcw, Sun, Moon } from "lucide-react";

const SAVE_KEY = "senthub-draft";
const DEFAULT_MARKDOWN = `# Welcome to SENTHUB 🦐

Start typing your Markdown here. The preview updates in real-time.

## Features

- **Live preview** — see your document as you type
- **Export PDF** — one click to download a beautiful PDF
- **Chinese support** — 中文排版完美支持
- **Code highlighting** — \`const app = "SENTHUB"\`

## Code Example

\`\`\`javascript
// A simple markdown-to-pdf converter
function convert(markdown) {
  return markdown
    .split("\\n")
    .map(line => \`<p>\${line}</p>\`)
    .join("\\n");
}
\`\`\`

## Blockquote

> The best way to predict the future is to create it.
> — Peter Drucker

## Table

| Feature | Free | Pro |
|---------|------|-----|
| Markdown Editor | ✅ | ✅ |
| PDF Export | ✅ | ✅ |
| Custom Templates | — | ✅ |
| API Access | — | ✅ |

---

Edit this text to see how it looks in the preview panel!
`;

export default function AppPage() {
  const [markdown, setMarkdown] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout>>();

  // Load saved draft on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SAVE_KEY);
      setMarkdown(saved || DEFAULT_MARKDOWN);
    } catch {
      setMarkdown(DEFAULT_MARKDOWN);
    }
    setLoaded(true);
  }, []);

  // Auto-save to localStorage with debounce
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setMarkdown(val);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try { localStorage.setItem(SAVE_KEY, val); } catch {}
    }, 500);
  }, []);

  // Restore dark mode preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem("senthub-theme");
      if (saved === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    } catch {}
  }, []);

  const toggleDark = useCallback(() => {
    setDarkMode((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark");
      try { localStorage.setItem("senthub-theme", next ? "dark" : "light"); } catch {}
      return next;
    });
  }, []);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [markdown]);

  const handleReset = useCallback(() => {
    setMarkdown(DEFAULT_MARKDOWN);
    try { localStorage.setItem(SAVE_KEY, DEFAULT_MARKDOWN); } catch {}
  }, []);

  const handleExportPDF = useCallback(() => {
    if (!previewRef.current) return;
    const content = previewRef.current.innerHTML;
    const style = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Inter', 'Noto Sans SC', -apple-system, sans-serif;
          font-size: 14px;
          line-height: 1.75;
          color: #1e293b;
          padding: 48px;
          max-width: 800px;
          margin: 0 auto;
        }
        h1 { font-size: 2em; font-weight: 700; margin: 1.5em 0 0.5em; }
        h2 { font-size: 1.5em; font-weight: 600; margin: 1.5em 0 0.5em; }
        h3 { font-size: 1.25em; font-weight: 600; margin: 1.25em 0 0.5em; }
        p { margin: 0.75em 0; }
        code { background: #f1f5f9; padding: 0.15em 0.3em; border-radius: 0.25em; font-size: 0.875em; font-family: 'JetBrains Mono', monospace; }
        pre { background: #0f172a; color: #e2e8f0; padding: 1em; border-radius: 0.5em; overflow-x: auto; margin: 1em 0; }
        pre code { background: none; padding: 0; color: inherit; }
        blockquote { border-left: 3px solid #10b981; padding-left: 1em; margin: 1em 0; color: #64748b; }
        table { width: 100%; border-collapse: collapse; margin: 1em 0; }
        th, td { border: 1px solid #e2e8f0; padding: 0.5em 0.75em; text-align: left; }
        th { background: #f8fafc; font-weight: 600; }
        ul, ol { padding-left: 1.5em; margin: 0.5em 0; }
        li { margin: 0.25em 0; }
        a { color: #059669; text-decoration: underline; }
        img { max-width: 100%; border-radius: 0.5em; }
        hr { border: none; border-top: 1px solid #e2e8f0; margin: 2em 0; }
        strong { font-weight: 600; }
        .senthub-header { text-align: center; padding-bottom: 24px; margin-bottom: 32px; border-bottom: 2px solid #10b981; }
        .senthub-header h1 { margin: 0; font-size: 1.5em; color: #059669; }
        .senthub-footer { text-align: center; padding-top: 24px; margin-top: 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
      </style>
    `;
    const html = `
      <html>
        <head>${style}</head>
        <body>
          <div class="senthub-header"><h1>◈ SENTHUB</h1></div>
          ${content}
          <div class="senthub-footer">Generated by SENTHUB · senthub.app</div>
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const w = window.open(url);
    if (w) {
      w.setTimeout(() => w.print(), 500);
    }
    URL.revokeObjectURL(url);
  }, []);

  // Don't render until loaded to prevent flash
  if (!loaded) return null;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* Toolbar */}
        <div className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 backdrop-blur-sm sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("edit")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "edit"
                    ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                <Edit3 className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "preview"
                    ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                title="Reset to default"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={toggleDark}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                title="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                title="Copy markdown"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                onClick={handleExportPDF}
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Export PDF
              </button>
              <a
                href="https://paypal.me/donghao368"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                title="Support SENTHUB"
              >
                ☕ Donate
              </a>
            </div>
          </div>
        </div>

        {/* Editor area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid lg:grid-cols-2 gap-4 h-[calc(100vh-220px)]">
            {/* Editor pane */}
            <div className={`${activeTab === "edit" ? "block" : "hidden"} lg:block`}>
              <div className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="px-4 py-2.5 border-b border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" />
                  Markdown
                </div>
                <textarea
                  value={markdown}
                  onChange={handleChange}
                  className="flex-1 w-full resize-none bg-transparent p-4 font-mono text-sm leading-relaxed text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
                  spellCheck={false}
                  placeholder="Type your Markdown here..."
                />
              </div>
            </div>

            {/* Preview pane */}
            <div className={`${activeTab === "preview" ? "block" : "hidden"} lg:block`}>
              <div className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="px-4 py-2.5 border-b border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5" />
                  Preview
                </div>
                <div
                  ref={previewRef}
                  className="flex-1 overflow-y-auto p-6 prose dark:text-slate-200"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight as any]}
                  >
                    {markdown}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

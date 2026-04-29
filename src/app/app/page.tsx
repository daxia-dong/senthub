"use client";

import Link from "next/link";
import { useState, useCallback, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Copy, Check, Download, Eye, Edit3, FileText, RotateCcw, Sun, Moon, Sparkles, X, Lock } from "lucide-react";

const SAVE_KEY = "senthub-draft";
const PRO_KEY = "senthub-pro";

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

// Available Pro templates
const PRO_TEMPLATES = [
  { id: "default", name: "Default", desc: "Clean, minimal design" },
  { id: "modern", name: "Modern", desc: "Sleek gradients, rounded corners" },
  { id: "classic", name: "Classic", desc: "Traditional academic format" },
  { id: "dark", name: "Dark Paper", desc: "Dark mode PDF for night reading" },
  { id: "minimal", name: "Minimalist", desc: "Maximum whitespace, minimal borders" },
];

export default function AppPage() {
  const [markdown, setMarkdown] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [proDialog, setProDialog] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("default");
  const [showUpgradeButton, setShowUpgradeButton] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout>>();

  // Load saved draft and pro status on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SAVE_KEY);
      setMarkdown(saved || DEFAULT_MARKDOWN);
    } catch {
      setMarkdown(DEFAULT_MARKDOWN);
    }
    try {
      const pro = localStorage.getItem(PRO_KEY);
      if (pro === "true") setIsPro(true);
    } catch {}
    setLoaded(true);
  }, []);

  // Auto-save with debounce
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setMarkdown(val);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try { localStorage.setItem(SAVE_KEY, val); } catch {}
    }, 500);
  }, []);

  // Dark mode
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

  // Template CSS for Pro
  const getTemplateCSS = useCallback((templateId: string) => {
    const base = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        font-family: 'Inter', 'Noto Sans SC', -apple-system, sans-serif;
        font-size: 14px;
        line-height: 1.75;
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
      img { max-width: 100%; }
      hr { border: none; border-top: 1px solid #e2e8f0; margin: 2em 0; }
      .senthub-header { text-align: center; padding-bottom: 24px; margin-bottom: 32px; border-bottom: 2px solid #10b981; }
      .senthub-footer { text-align: center; padding-top: 24px; margin-top: 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
    `;
    const templates: Record<string, string> = {
      "default": base,
      "modern": base + `
        body { background: linear-gradient(135deg, #f0fdf4 0%, #fef2f2 100%); }
        h1 { color: #059669; letter-spacing: -0.02em; }
        h2 { border-bottom: 2px solid #10b981; padding-bottom: 0.25em; }
        pre { border-left: 4px solid #10b981; border-radius: 0 0.5em 0.5em 0; }
        blockquote { background: #f0fdf4; padding: 1em; border-radius: 0.5em; }
        table { border-radius: 0.5em; overflow: hidden; }
        th { background: #059669; color: white; }
      `,
      "classic": base + `
        body { font-family: 'Times New Roman', 'Noto Sans SC', serif; font-size: 12pt; }
        h1 { text-align: center; font-size: 18pt; }
        h2 { font-size: 16pt; border-bottom: 1px solid #333; }
        blockquote { border-left: 3px solid #333; }
        .senthub-header { border-bottom: 1px solid #333; }
        .senthub-header h1 { color: #333; }
      `,
      "dark": base + `
        body { background: #0f172a; color: #e2e8f0; }
        h1, h2, h3 { color: #f1f5f9; }
        code { background: #1e293b; color: #94a3b8; }
        pre { background: #020617; }
        blockquote { border-left-color: #64748b; color: #94a3b8; }
        th { background: #1e293b; }
        td { border-color: #334155; }
        .senthub-header h1 { color: #10b981; }
        .senthub-footer { color: #475569; }
      `,
      "minimal": base + `
        body { padding: 64px 80px; }
        h1 { font-weight: 300; font-size: 2.25em; letter-spacing: -0.03em; }
        h2 { font-weight: 300; }
        pre { background: #fafafa; border: 1px solid #e5e7eb; }
        th { background: #fafafa; }
        .senthub-header { border-bottom: 1px solid #d1d5db; }
        .senthub-header h1 { font-weight: 300; letter-spacing: 0.1em; }
      `,
    };
    return templates[templateId] || base;
  }, []);

  const handleExportPDF = useCallback(() => {
    if (!previewRef.current) return;
    const content = previewRef.current.innerHTML;
    const css = getTemplateCSS(selectedTemplate);
    const html = `
      <html>
        <head><style>${css}</style></head>
        <body>
          <div class="senthub-header"><h1>◈ SENTHUB</h1></div>
          ${content}
          <div class="senthub-footer">Generated by SENTHUB · senthub.app</div>
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    if (isPro) {
      // Pro: full-featured export with templates
      const w = window.open(url);
      if (w) w.setTimeout(() => w.print(), 500);
    } else {
      // Free: standard export, but show upgrade prompt on 3rd use
      try {
        const count = parseInt(localStorage.getItem("senthub-pdf-count") || "0", 10);
        localStorage.setItem("senthub-pdf-count", String(count + 1));
        if (count >= 2) setShowUpgradeButton(true);
      } catch {}
      const w = window.open(url);
      if (w) w.setTimeout(() => w.print(), 500);
    }
    URL.revokeObjectURL(url);
  }, [getTemplateCSS, selectedTemplate, isPro]);

  // Show upgrade dialog from toolbar button
  const handleProClick = useCallback(() => {
    setProDialog(true);
  }, []);

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
              {/* Pro button */}
              <button
                onClick={handleProClick}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isPro
                    ? "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300"
                    : "text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400"
                }`}
                title={isPro ? "Pro features enabled" : "Upgrade to Pro"}
              >
                <Sparkles className="w-4 h-4" />
                {isPro ? "Pro" : "Upgrade"}
              </button>

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
              <Link
                href="/feedback"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                💬 Feedback
              </Link>
            </div>
          </div>
        </div>

        {/* Upgrade prompt (appears after 3 exports) */}
        {showUpgradeButton && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  You have used the free PDF export 3 times. <strong>Upgrade to Pro</strong> for unlimited exports + custom templates!
                </p>
              </div>
              <button
                onClick={handleProClick}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0"
              >
                See Plans
              </button>
            </div>
          </div>
        )}

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

      {/* Upgrade Modal */}
      {proDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setProDialog(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-300" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">SENTHUB Pro</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Unlock the full potential</p>
                </div>
              </div>
              <button onClick={() => setProDialog(false)} className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Pricing */}
            <div className="px-6 py-6 space-y-4">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-300">$5</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">one-time payment · lifetime access</div>
              </div>

              {/* Features */}
              <div className="space-y-2.5">
                {[
                  { icon: "🎨", label: "Custom PDF Templates", desc: "5 beautiful templates (Modern, Classic, Dark, Minimalist)" },
                  { icon: "∞", label: "Unlimited PDF Exports", desc: "No limits, export as many as you need" },
                  { icon: "🔧", label: "Custom CSS Overrides", desc: "Add your own styles to templates" },
                  { icon: "📚", label: "Batch Export (coming soon)", desc: "Export multiple documents at once" },
                  { icon: "❤️", label: "Support Open Source", desc: "Help keep SENTHUB free for everyone" },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{f.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{f.label}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://paypal.me/donghao368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-colors"
                  onClick={() => {
                    // Store in localStorage that user paid (honor system for now)
                    setTimeout(() => {
                      try {
                        localStorage.setItem(PRO_KEY, "true");
                        setIsPro(true);
                        setProDialog(false);
                      } catch {}
                    }, 100);
                  }}
                >
                  ☕ Buy Pro — $5 via PayPal
                </a>
                {isPro ? (
                  <button
                    onClick={() => { setProDialog(false); }}
                    className="block w-full text-center bg-emerald-500 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    ✅ Pro Activated
                  </button>
                ) : (
                  <a
                    href="https://github.com/sponsors/daxia-dong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    ⭐ Sponsor on GitHub
                  </a>
                )}
                <p className="text-[10px] text-center text-slate-400">
                  After PayPal payment, Pro activates automatically (honor-based). Or sponsor on GitHub for same benefits.
                </p>
              </div>
            </div>

            {/* Template preview (for existing Pro) */}
            {isPro && (
              <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700 pt-4">
                <label className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-2">Your Templates</label>
                <div className="grid grid-cols-2 gap-2">
                  {PRO_TEMPLATES.filter(t => t.id !== "default").map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTemplate(t.id)}
                      className={`text-left p-3 rounded-lg border text-sm transition-colors ${
                        selectedTemplate === t.id
                          ? "border-amber-400 bg-amber-50 dark:bg-amber-900/20"
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-medium">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

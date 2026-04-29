# SENTHUB

> Markdown to PDF converter with beautiful Chinese typography support 🦐

**SENTHUB** is a free, modern web application for converting Markdown content to beautifully formatted PDFs. Built with Next.js 15 and designed with developer workflows in mind — write, preview, and export in one fluid experience.

![SENTHUB Screenshot](https://senthub.vercel.app/og-image.png)

## ✨ Features

- **📝 Live Markdown Editor** — Write in a distraction-free editor with real-time preview
- **🎨 Beautiful Chinese Typography** — Native support for CJK text, proper line breaks, and elegant type rendering
- **📄 PDF Export** — One-click PDF download with print-optimized styling
- **🌙 Dark Mode** — Light and dark themes for comfortable editing day or night
- **⚡ Blazing Fast** — Built on Next.js 15 with App Router for instant page loads
- **🔒 100% Client-Side** — Your content never leaves your browser. No data uploads, no servers involved
- **🚫 No Login Required** — Just open and use. Zero friction

## 🚀 Try It Now

👉 **[senthub.vercel.app](https://senthub.vercel.app)**

No signup, no installation — just paste your Markdown and export.

## 🎯 Why SENTHUB?

Most Markdown-to-PDF tools fall into two camps:
- **Too simple:** Basic conversion with ugly output
- **Too complex:** CLI tools like Pandoc that require installation

SENTHUB sits in the sweet spot — **a web-based tool that just works**, with beautiful output tailored for both Latin and CJK text.

Perfect for:
- Developers writing documentation
- Students formatting essays with Chinese text
- Writers exporting drafts for review
- Anyone who needs a quick, beautiful PDF from Markdown

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Markdown | react-markdown + rehype/remark plugins |
| PDF | Browser print-to-PDF with optimized styles |
| Deployment | Vercel (Edge-ready) |

## 🏗️ Local Development

```bash
# Clone the repo
git clone https://github.com/daxia-dong/senthub.git
cd senthub

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📦 Project Structure

```
senthub/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── app/page.tsx      # Editor application
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── ...
├── public/                   # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── package.json
```

## 🤝 Contributing

Contributions are welcome! This is an open-source project — feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a Pull Request

Or just [open an issue](https://github.com/daxia-dong/senthub/issues) if you have ideas or find bugs.

## 💬 Feedback

We'd love to hear from you! Here are all the ways to reach us:

- **🐛 Report a Bug:** [Open a Bug Report](https://github.com/daxia-dong/senthub/issues/new?template=bug_report.md)
- **💡 Suggest a Feature:** [Open a Feature Request](https://github.com/daxia-dong/senthub/issues/new?template=feature_request.md)
- **📧 Email:** [senthub@outlook.com](mailto:senthub@outlook.com)
- **💬 Discussions:** [GitHub Discussions](https://github.com/daxia-dong/senthub/discussions)
- **🌐 Feedback Page:** [senthub.vercel.app/feedback](https://senthub.vercel.app/feedback)

## 📋 Roadmap

- [ ] Custom PDF themes / templates
- [ ] Batch conversion (multiple files)
- [ ] API endpoint for programmatic conversion
- [ ] Cloud sync (GitHub Gist / Dropbox)
- [ ] Browser extension

## 📄 License

MIT — free to use, modify, and distribute.

---

**Made with 🦐 by [@daxia-dong](https://github.com/daxia-dong)**

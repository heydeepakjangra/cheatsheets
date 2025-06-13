# 🚀 Cheatsheets - Developer Reference Hub

<div align="center">

**Comprehensive developer cheatsheets for modern software engineering**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-15.2.0-orange)](https://fumadocs.vercel.app/)

[**🌐 Live Site**](https://cheatsheets.deepakjangra.com) • [**📖 Documentation**](https://fumadocs.vercel.app) • [**🐛 Report Bug**](https://github.com/heydeepakjangra/cheatsheets/issues)

</div>

---

## 📚 What is Cheatsheets?

Cheatsheets is a modern, fast, and comprehensive collection of developer reference guides and quick cheatsheets. Built for software engineers, DevOps professionals, and developers who need instant access to commands, syntax, and best practices.

### ✨ Features

- **🎯 12+ Comprehensive Guides** - From Git to Kubernetes, Python to TypeScript
- **⚡ Lightning Fast** - Built with Next.js 15 and optimized for performance  
- **🎨 Beautiful UI** - Clean, modern interface with dark/light mode support
- **📱 Fully Responsive** - Perfect experience on desktop, tablet, and mobile
- **🔍 Advanced Search** - Quickly find commands and code snippets
- **🏷️ Smart Tagging** - Organized by technology and use case
- **📊 SEO Optimized** - Comprehensive meta tags and structured data
- **🔗 RSS Feed** - Stay updated with new cheatsheets

---

## 🛠️ Tech Stack

**Frontend & Framework**
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - Modern React with concurrent features
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development

**Styling & UI**
- [Tailwind CSS 4.0](https://tailwindcss.com/) - Utility-first CSS framework
- [Fumadocs UI](https://fumadocs.vercel.app/) - Documentation-focused component library
- [Radix UI](https://www.radix-ui.com/) - Headless, accessible components
- [Lucide React](https://lucide.dev/) - Beautiful, customizable icons

**Content & SEO**
- [MDX](https://mdxjs.com/) - Markdown with React components
- [Shiki](https://shiki.style/) - Syntax highlighting with VS Code themes
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Front matter parsing
- [RSS Feed](https://www.npmjs.com/package/feed) - Automatic feed generation

**Developer Experience**
- [Biome](https://biomejs.dev/) - Fast formatter and linter
- [pnpm](https://pnpm.io/) - Efficient package manager

---

## 📖 Available Cheatsheets

| Technology | Description | Coverage |
|------------|-------------|----------|
| **🐙 Git** | Version control commands and workflows | Branching, merging, rebasing, hooks |
| **🐳 Docker** | Containerization and orchestration | Images, containers, compose, best practices |
| **🌐 cURL** | HTTP client commands and examples | Requests, authentication, debugging |
| **🖥️ Bash** | Shell scripting and command line | Scripts, variables, loops, system admin |
| **🐍 Python** | Python programming essentials | Syntax, data structures, libraries, async |
| **⚡ JavaScript** | Modern JS features and patterns | ES6+, DOM, async/await, modules |
| **📘 TypeScript** | Type-safe JavaScript development | Types, interfaces, generics, decorators |
| **🎨 HTML5** | Modern web markup | Semantic elements, forms, accessibility |
| **🎭 CSS3** | Styling and layout techniques | Flexbox, Grid, animations, responsive |
| **☁️ AWS** | Amazon Web Services essentials | EC2, S3, Lambda, IAM, networking |
| **⚓ Kubernetes** | Container orchestration platform | Pods, services, deployments, networking |
| **🗄️ Redis** | In-memory data structure store | Commands, data types, performance tuning |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/heydeepakjangra/cheatsheets.git
   cd cheatsheets
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm preview` | Build and preview production |
| `pnpm format` | Format code with Biome |
| `pnpm lint` | Lint code and check for errors |
| `pnpm lint:unsafe` | Lint and auto-fix issues |
| `pnpm check:unsafe` | Format, lint, and sort imports |

---

## 📁 Project Structure

```
cheatsheets/
├── 📂 content/              # MDX cheatsheet files
│   ├── git.mdx
│   ├── docker.mdx
│   └── ...
├── 📂 src/
│   ├── 📂 app/              # Next.js App Router
│   ├── 📂 components/       # React components
│   ├── 📂 lib/             # Utilities and configuration
│   └── 📂 styles/          # Global styles
├── 📂 public/              # Static assets
└── 📄 package.json
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding New Cheatsheets

1. **Create a new MDX file** in the `content/` directory
2. **Use the following front matter template**:
   ```yaml
   ---
   title: "Technology Name Cheatsheet"
   description: "Comprehensive guide and reference for Technology Name"
   date: "2025-01-20"
   author: "Your Name"
   tags: ["technology", "programming", "tools"]
   image: "/images/cheatsheets/technology-banner.jpg"
   ---
   ```

3. **Follow the existing structure** from other cheatsheets
4. **Include practical examples** and real-world use cases
5. **Add proper headings** and organize content logically

### Improving Existing Content

- Fix typos or grammatical errors
- Add missing commands or examples
- Improve explanations and add context
- Update deprecated information

### Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-cheatsheet`)
3. Make your changes
4. Run tests (`pnpm lint && pnpm build`)
5. Commit your changes (`git commit -m 'Add amazing cheatsheet'`)
6. Push to the branch (`git push origin feature/amazing-cheatsheet`)
7. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Fumadocs](https://fumadocs.vercel.app/)** - Excellent documentation framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Beautiful utility-first CSS
- **[Shiki](https://shiki.style/)** - Amazing syntax highlighting
- **Community Contributors** - Thanks to everyone who helps improve these cheatsheets

---

## 📬 Connect

- **Website**: [deepakjangra.com](https://deepakjangra.com)
- **Twitter**: [@heydeepakjangra](https://twitter.com/heydeepakjangra)
- **GitHub**: [heydeepakjangra](https://github.com/heydeepakjangra)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Deepak Jangra](https://deepakjangra.com)

</div>

---

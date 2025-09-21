# Health Era Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS. This project features a clean design system with custom colors and components.

## 🚀 Features

- **Modern React 19** with TypeScript
- **Tailwind CSS** with custom design system
- **Responsive Design** - Mobile-first approach
- **Custom Components** - Reusable UI components
- **Path Aliases** - Clean imports with `@` syntax
- **Vite** - Fast development and build
- **ESLint** - Code linting and formatting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** (for cloning the repository)

### Installing Node.js

1. **Download Node.js** from [nodejs.org](https://nodejs.org/)
2. **Install** the LTS version for your operating system
3. **Verify installation** by running:
   ```bash
   node --version
   npm --version
   ```

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AdeoyeIbk/GDG-Bowen-Assessment.git
cd GDG-Bowen-Assessment
```

### 2. Install Dependencies

Choose one of the following package managers:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

````

## 🚦 Development

### Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
````

The application will be available at `http://localhost:5173`

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Type checking
npm run type-check
```

## 🏗️ Building for Production

### 1. Create Production Build

```bash
npm run build
```

### 2. Preview Production Build

```bash
npm run preview
```

### 3. Deploy

The `dist` folder contains the production-ready files. You can deploy them to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload the `dist` folder contents

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layouts/        # Layout components
│   │   └── MainLayout.tsx
│   ├── Header.tsx      # Site header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   └── Index.tsx       # Home page
├── lib/                # Utility functions
│   └── utils.ts
├── assets/             # Static assets (images, fonts)
├── App.tsx             # Main App component
├── main.tsx            # React entry point
└── index.css           # Global styles

public/
├── images/             # Public images
│   ├── jared-rice-xce-530-fb-hrk-unsplash-1.png
│   ├── katherine-hanlon-mod-2-s-3-qf-oc-unsplash-1.png
│   └── tyler-lastovich-a-vz-byh-ro-pbs-unsplash-1.png
└── favicon.ico         # Site icon
```

### Common Issues

1. **Node.js/npm not found**

   ```bash
   # Verify installation
   node --version
   npm --version

   # If not installed, download from nodejs.org
   ```

2. **Port already in use**

   ```bash
   # Kill process using port 5173
   npx kill-port 5173

   # Or use different port
   npm run dev -- --port 3000
   ```

3. **TypeScript errors**

   ```bash
   # Clear TypeScript cache
   npx tsc --build --clean

   # Restart TypeScript server in VS Code
   Ctrl+Shift+P > "TypeScript: Restart TS Server"
   ```

4. **Tailwind styles not working**

   ```bash
   # Restart development server
   npm run dev

   # Check tailwind.config.ts paths
   ```

### Dependencies Issues

If you encounter dependency conflicts:

```bash
# Clear node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clean npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

## 📱 Browser Support

- **Chrome** 88+
- **Firefox** 85+
- **Safari** 14+
- **Edge** 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Adeoye Ibrahim**

- GitHub: [@AdeoyeIbk](https://github.com/AdeoyeIbk)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

---

**Happy coding!** 🚀

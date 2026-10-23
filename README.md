# AICTE EoA Verification System

A modern web application for AICTE (All India Council for Technical Education) Extension of Approval (EoA) verification and management.

## 🚀 Features

- **User Authentication** - Secure login system for accessing the verification portal
- **Modern UI** - Built with React, TypeScript, and Tailwind CSS for a responsive and beautiful interface
- **Fast Development** - Powered by Vite for lightning-fast hot module replacement (HMR)
- **Type Safety** - Full TypeScript support for better code quality and developer experience
- **Animation Support** - Smooth animations using Framer Motion
- **Routing** - Client-side routing with React Router DOM
- **Icon Library** - Rich icon set from Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eddardthehouesofstark-stack/zavyro.git
   cd zavyro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🎮 Usage

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will open at `http://localhost:5173` (or the next available port).

### Navigate to Login

After starting the dev server, open your browser and go to:
```
http://localhost:5173/login
```

**Note:** Currently accepts any credentials for testing purposes.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
aicte-eoa/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   ├── data.ts          # Data models and utilities
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── .gitignore          # Git ignore rules
```

## 🔧 Tech Stack

- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript 5.4.5
- **Build Tool:** Vite 5.2.0
- **Styling:** Tailwind CSS 3.4.4
- **Routing:** React Router DOM 6.23.0
- **Animation:** Framer Motion 11.0.0
- **Icons:** Lucide React 0.383.0
- **CSS Processing:** PostCSS 8.4.38 + Autoprefixer 10.4.19

## 🎨 Future Enhancements

- [ ] Add shadcn/ui component library
  ```bash
  npx shadcn@latest init
  ```
- [ ] Implement real authentication system
- [ ] Add form validation
- [ ] Create dashboard interface
- [ ] Integrate backend API
- [ ] Add data visualization
- [ ] Implement user roles and permissions

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - [GitHub Profile](https://github.com/eddardthehouesofstark-stack)

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/eddardthehouesofstark-stack/zavyro/issues).

## 📞 Support

For support, email your-email@example.com or open an issue on GitHub.

---

**Made with ❤️ using React + TypeScript + Vite**

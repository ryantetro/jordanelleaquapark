# AquaPark Mountain

A professional React application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React features
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Professional Structure** - Well-organized codebase
- 🔧 **Custom Hooks** - Reusable logic
- 🎨 **UI Components** - Consistent design system

## 📦 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aquaParkMtnp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Base UI components (Button, Card, etc.)
├── layouts/            # Layout components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── services/           # API services
├── constants/          # Application constants
└── assets/             # Static assets
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Key Components

### UI Components
- **Button** - Versatile button component with multiple variants
- **Card** - Flexible card component with header, content, and footer

### Custom Hooks
- **useLocalStorage** - Persistent state management
- **useTheme** - Theme management (light/dark/system)

### Utilities
- **cn** - Class name utility for conditional styling

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Custom color palette
- Custom animations
- Responsive breakpoints
- Utility-first approach

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### Tailwind Configuration

Custom Tailwind configuration is available in `tailwind.config.js` with:
- Custom animations
- Extended color palette
- Custom breakpoints

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow React best practices
- Use functional components with hooks
- Implement proper error handling

### Component Structure
- Use the `cn` utility for conditional classes
- Implement proper TypeScript interfaces
- Use forwardRef for components that need refs
- Export components with displayName

### File Naming
- Use PascalCase for components
- Use camelCase for utilities and hooks
- Use kebab-case for CSS files

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.

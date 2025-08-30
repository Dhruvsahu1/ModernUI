# Skiper UI - Modern Components

A modern component library built with Next.js, Tailwind CSS, Framer Motion, and React.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light theme support
- 📱 Mobile-first responsive design
- ⚡ Optimized for performance
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 15.5.2
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ModernUI
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

This project is optimized for Vercel deployment. Simply connect your repository to Vercel and deploy!

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── homeCards/      # Main page card components
│   ├── landingPage/    # Hero section components
│   ├── navbar/         # Navigation components
│   └── ui/             # Reusable UI components
└── lib/                # Utility functions
```

## Components

- **Hero**: Landing page hero section with responsive design
- **Navbar**: Responsive navigation with theme toggle
- **CardCarousel**: Interactive image carousel
- **Templatecard**: Template showcase cards
- **SpecialCards**: Animated component showcase
- **AiInputCard**: AI chat input component
- **Maxcard**: 3D interactive card with Three.js
- **ThemeChange**: Theme toggle buttons

## Responsive Design

The project uses a mobile-first approach with responsive breakpoints:
- `sm:` (640px+) - Small tablets and up
- `md:` (768px+) - Tablets and up
- `lg:` (1024px+) - Laptops and up
- `xl:` (1280px+) - Large screens

## License

MIT License

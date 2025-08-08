import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Enhanced Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Multiple animated particles with different colors */}
      <div className="particle top-[20%] left-[10%] w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 animate-particle-float" style={{ animationDelay: '0s' }}></div>
      <div className="particle top-[60%] left-[80%] w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 animate-particle-float" style={{ animationDelay: '2s' }}></div>
      <div className="particle top-[80%] left-[20%] w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 animate-particle-float" style={{ animationDelay: '4s' }}></div>
      <div className="particle top-[30%] left-[70%] w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 animate-particle-float" style={{ animationDelay: '1s' }}></div>
      <div className="particle top-[70%] left-[40%] w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 animate-particle-float" style={{ animationDelay: '3s' }}></div>
      <div className="particle top-[15%] left-[50%] w-1 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 animate-particle-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="particle top-[85%] left-[60%] w-1.5 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 animate-particle-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="particle top-[45%] left-[15%] w-1 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 animate-particle-float" style={{ animationDelay: '3.5s' }}></div>
      
      {/* Additional particles for more density */}
      <div className="particle top-[25%] right-[15%] w-1 h-1 bg-gradient-to-r from-violet-400 to-purple-500 animate-particle-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="particle top-[75%] right-[30%] w-1.5 h-1.5 bg-gradient-to-r from-rose-400 to-pink-500 animate-particle-float" style={{ animationDelay: '1.8s' }}></div>
      <div className="particle top-[40%] right-[5%] w-1 h-1 bg-gradient-to-r from-sky-400 to-blue-500 animate-particle-float" style={{ animationDelay: '2.8s' }}></div>
      <div className="particle top-[90%] right-[10%] w-1.5 h-1.5 bg-gradient-to-r from-lime-400 to-green-500 animate-particle-float" style={{ animationDelay: '3.2s' }}></div>
    </div>
  );
};

// Enhanced Geometric Shapes Component
const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated geometric shapes with vibrant colors */}
      <div className="geometric-shape top-[25%] left-[5%] w-16 h-16 border-2 border-pink-300/30 dark:border-pink-400/30 rounded-full animate-geometric-rotate" style={{ animationDelay: '0s' }}></div>
      <div className="geometric-shape top-[75%] right-[10%] w-10 h-10 border-2 border-blue-300/30 dark:border-blue-400/30 rounded-full animate-geometric-rotate" style={{ animationDelay: '2s' }}></div>
      <div className="geometric-shape top-[50%] left-[85%] w-20 h-20 border-2 border-green-300/30 dark:border-green-400/30 rounded-full animate-geometric-rotate" style={{ animationDelay: '4s' }}></div>
      <div className="geometric-shape top-[10%] left-[60%] w-12 h-12 border-2 border-yellow-300/30 dark:border-yellow-400/30 rounded-full animate-geometric-rotate" style={{ animationDelay: '1s' }}></div>
      <div className="geometric-shape top-[90%] left-[30%] w-18 h-18 border-2 border-purple-300/30 dark:border-purple-400/30 rounded-full animate-geometric-rotate" style={{ animationDelay: '3s' }}></div>
      
      {/* Additional geometric shapes */}
      <div className="geometric-shape top-[35%] right-[25%] w-14 h-14 border-2 border-cyan-300/30 dark:border-cyan-400/30 rounded-full animate-geometric-rotate" style={{ animationDelay: '1.5s' }}></div>
      <div className="geometric-shape top-[65%] right-[40%] w-8 h-8 border-2 border-orange-300/30 dark:border-orange-400/30 rounded-full animate-geometric-rotate" style={{ animationDelay: '2.5s' }}></div>
      <div className="geometric-shape top-[20%] right-[50%] w-12 h-12 border-2 border-indigo-300/30 dark:border-indigo-400/30 rounded-full animate-geometric-rotate" style={{ animationDelay: '3.5s' }}></div>
    </div>
  );
};

// Enhanced Animated Background Component with vibrant colors
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Multi-layered animated gradient background with vibrant colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-blue-900/30 animate-gradient-shift"></div>
      
      {/* Additional gradient layers with vibrant colors */}
      <div className="absolute inset-0 bg-gradient-to-tl from-green-100/40 via-transparent to-yellow-100/40 dark:from-green-900/20 dark:via-transparent dark:to-yellow-900/20 animate-gradient-shift" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/30 via-transparent to-pink-100/30 dark:from-cyan-900/15 dark:via-transparent dark:to-pink-900/15 animate-gradient-shift" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated gradient circles with vibrant colors */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-200/50 to-purple-200/50 dark:from-pink-800/30 dark:to-purple-800/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 dark:from-blue-800/30 dark:to-cyan-800/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-200/50 to-emerald-200/50 dark:from-green-800/30 dark:to-emerald-800/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-200/50 to-orange-200/50 dark:from-yellow-800/30 dark:to-orange-800/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Floating elements with enhanced colors */}
      <div className="floating-element top-[20%] left-[10%] w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="floating-element top-[60%] right-[15%] w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="floating-element top-[80%] left-[20%] w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="floating-element top-[30%] right-[25%] w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="floating-element top-[70%] left-[30%] w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="floating-element top-[15%] right-[20%] w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="floating-element top-[85%] right-[40%] w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-500 animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="floating-element top-[45%] right-[10%] w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 animate-float" style={{ animationDelay: '3.5s' }}></div>
    </div>
  );
};

// Color Wave Animation Component
const ColorWaveAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated color waves */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-blue-500/15 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-yellow-500/10 to-orange-500/10 animate-gradient-shift" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/12 via-indigo-500/12 to-violet-500/12 animate-gradient-shift" style={{ animationDelay: '2s' }}></div>
      
      {/* Moving gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-pink-400/40 to-purple-400/40 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

// Rainbow Background Animation Component
const RainbowBackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Rainbow gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-200/20 via-orange-200/20 via-yellow-200/20 via-green-200/20 via-blue-200/20 via-indigo-200/20 to-purple-200/20 animate-gradient-shift"></div>
      
      {/* Additional rainbow layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/15 via-red-200/15 via-orange-200/15 via-yellow-200/15 via-green-200/15 via-blue-200/15 via-indigo-200/15 to-purple-200/15 animate-gradient-shift" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-200/10 via-indigo-200/10 via-blue-200/10 via-green-200/10 via-yellow-200/10 via-orange-200/10 to-red-200/10 animate-gradient-shift" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
        {/* Enhanced animated background for loading */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20 dark:from-pink-800/20 dark:via-purple-800/20 dark:to-blue-800/20 animate-pulse-slow"></div>
        
        {/* Color wave animation during loading */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 animate-gradient-shift"></div>
        
        {/* Loading spinner */}
        <div className="relative z-10">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-loading-spin mb-8"></div>
          <div className="w-24 h-24 border-2 border-white/20 rounded-full animate-loading-spin absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        
        {/* Loading text */}
        <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Muskan Gupta</h2>
        <p className="text-lg opacity-80 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Loading Portfolio...</p>
        
        {/* Enhanced floating particles during loading */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-x-hidden transition-colors duration-300">
        {/* Enhanced Animated Background */}
        <AnimatedBackground />
        
        {/* Rainbow Background Animation */}
        <RainbowBackgroundAnimation />
        
        {/* Color Wave Animation */}
        <ColorWaveAnimation />
        
        {/* Enhanced Floating Particles */}
        <FloatingParticles />
        
        {/* Enhanced Geometric Shapes */}
        <GeometricShapes />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Achievements />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

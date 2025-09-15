import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // 16 * 4 = 64px (h-16)
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 pt-20 md:pt-0" ref={heroRef}>
      {/* Animated background elements - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-600/40 to-gray-700/40 rounded-full blur-3xl animate-pulse-slow hidden md:block"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-full blur-3xl animate-pulse-slow hidden md:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-gray-600/35 to-gray-700/35 rounded-full blur-3xl animate-pulse-slow hidden md:block" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] md:min-h-screen">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left pt-8 md:pt-0">
            {/* Greeting */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block text-2xl sm:text-3xl text-blue-400 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                  I'm
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Muskan Gupta
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Full-Stack Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              A results-driven software engineer specializing in scalable web applications 
              and cutting-edge technologies. Leveraging expertise in React.js ecosystem, 
              Node.js backend architecture, and cloud-native development to architect 
              robust, high-performance solutions. Passionate about clean code principles, 
              agile methodologies, and delivering exceptional user experiences through 
              innovative problem-solving and continuous learning.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <button 
                className="btn-primary group relative overflow-hidden"
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Let's Collaborate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button 
                className="btn-secondary group relative overflow-hidden"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10">Explore Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button 
                className="btn-resume group relative overflow-hidden"
                onClick={() => window.open('https://drive.google.com/file/d/16qMzqxkJJOaSEM6MthpTkHkoZHKyiTfq/view?usp=drivesdk', '_blank')}
              >
                <span className="relative z-10">View My Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Animated background circles - reduced on mobile */}
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse-slow hidden md:block"></div>
              <div className="absolute inset-4 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-xl animate-pulse-slow hidden md:block" style={{ animationDelay: '1s' }}></div>
              
              {/* Profile placeholder */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-float overflow-hidden">
                <div className="w-72 h-72 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-xl border-8 border-white overflow-hidden">
                  <img 
                    src={`${process.env.PUBLIC_URL}/profile-image2.jpg`} 
                    alt="Muskan Gupta" 
                    className="w-full h-full object-cover object-center rounded-full"
                    style={{ objectPosition: 'center 50%' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white animate-text-glow" style={{ display: 'none' }}>
                    MG
                  </div>
                </div>
                
                {/* Animated rings - reduced on mobile */}
                <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full animate-spin-slow hidden md:block"></div>
                <div className="absolute inset-2 border-2 border-purple-400/20 rounded-full animate-spin-slow hidden md:block" style={{ animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating elements - hidden on mobile for performance */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary-400/60 rounded-full animate-float hidden md:block"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary-400/60 rounded-full animate-float hidden md:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary-300/40 rounded-full animate-float hidden md:block" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero; 
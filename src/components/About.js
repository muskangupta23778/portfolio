import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden" ref={aboutRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-600/40 to-gray-700/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating elements */}
      <div className="floating-element top-[20%] left-[10%] animate-float"></div>
      <div className="floating-element top-[60%] right-[15%] animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="floating-element bottom-[30%] left-[20%] animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title animate-fade-in-up text-white">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate and dedicated software engineer with a strong foundation in full-stack development. 
              My journey in technology began with a curiosity to understand how things work, which has evolved into 
              a deep passion for creating innovative solutions that make a difference.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in modern web technologies like React.js, Node.js, and cloud-native development, 
              I specialize in building scalable, high-performance applications. I believe in writing clean, 
              maintainable code and following best practices to ensure long-term project success.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I'm always eager to learn and adapt to new challenges.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  1+
                </div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              
              <div className="text-center p-4 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Animated background circles */}
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute inset-4 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              
              {/* Main content box */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
                <div className="w-72 h-72 bg-gray-800 rounded-xl flex flex-col items-center justify-center p-8 shadow-xl border border-gray-700">
                  <div className="text-6xl mb-4 animate-bounce">
                    💻
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    Full-Stack Developer
                  </h3>
                  <p className="text-sm text-gray-300 text-center">
                    Passionate about creating amazing digital experiences
                  </p>
                </div>
                
                {/* Animated rings */}
                <div className="absolute inset-0 border-4 border-blue-400/30 rounded-2xl animate-spin-slow"></div>
                <div className="absolute inset-2 border-2 border-purple-400/20 rounded-2xl animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
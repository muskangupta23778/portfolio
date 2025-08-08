import React, { useEffect, useRef } from 'react';

const Achievements = () => {
  const achievementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      title: "85%+ Test Coverage",
      description: "Maintained high test coverage across multiple projects ensuring code quality and reliability.",
      icon: "🧪"
    },
    {
      title: "Agile Methodology Expert",
      description: "Successfully delivered projects using Agile methodologies with efficient team collaboration.",
      icon: "⚡"
    },
    {
      title: "Full-Stack Development",
      description: "Proficient in both frontend and backend development with modern technologies.",
      icon: "💻"
    },
    {
      title: "Problem Solver",
      description: "Demonstrated ability to solve complex technical challenges and optimize performance.",
      icon: "🔧"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden" ref={achievementsRef}>
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
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden animate-fade-in-up text-center bg-gray-800/50 backdrop-blur-md border border-gray-700"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>
                  {achievement.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 
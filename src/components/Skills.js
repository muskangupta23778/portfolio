import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          
          // Animate skill progress bars
          const progressBars = entry.target.querySelectorAll('.skill-progress');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              const level = bar.getAttribute('data-level');
              bar.style.width = `${level}%`;
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 92 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Java", level: 75 },
      { name: "MySQL", level: 80 }
    ],
    other: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "OOPS", level: 88 },
      { name: "Selenium", level: 70 },
      { name: "Agile", level: 85 }
    ]
  };

  const categoryTitles = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    other: "Other Skills"
  };

  const categoryIcons = {
    frontend: "🎨",
    backend: "⚙️",
    other: "🛠️"
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden" ref={skillsRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-600/40 to-gray-700/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-gray-600/35 to-gray-700/35 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating elements */}
      <div className="floating-element top-[20%] left-[10%] animate-float"></div>
      <div className="floating-element top-[60%] right-[15%] animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="floating-element bottom-[30%] left-[20%] animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title animate-fade-in-up text-white">
          Skills
        </h2>
        
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <div 
                key={category} 
                className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden animate-fade-in-up bg-gray-800/50 backdrop-blur-md border border-gray-700"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3 animate-bounce" style={{ animationDelay: `${categoryIndex * 0.3}s` }}>
                      {categoryIcons[category]}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {categoryTitles[category]}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-300 group-hover/skill:text-blue-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-purple-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className="skill-progress h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            data-level={skill.level}
                            style={{ width: '0%' }}
                          >
                            {/* Animated shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
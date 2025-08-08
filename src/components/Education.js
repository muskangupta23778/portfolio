import React, { useEffect, useRef } from 'react';

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Masters in Computer Application",
      institution: "Kanpur Institute of Technology",
      period: "November 2020 - October 2022",
      location: "Kanpur",
      achievements: [
        "Scored 9.37 CGPA",
        "Branch Topper",
        "Silver Medalist in University",
      ]
    },
    {
      degree: "Bachelors in Computer Application",
      institution: "Dr. Virendra Swaroop Institute of Computer Studies",
      period: "August 2016 - July 2019",
      location: "Kanpur",
      achievements: [
        "Scored 78.44 Percentile",
        "Branch Topper",
        "Specialization in Programming"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden" ref={educationRef}>
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
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden animate-fade-in-up bg-gray-800/50 backdrop-blur-md border border-gray-700"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                    {edu.period}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-200 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {edu.institution}
                </h4>
                
                <p className="text-sm text-gray-400 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {edu.location}
                </p>
                
                <div className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <p key={idx} className="text-gray-300 leading-relaxed flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {achievement}
                    </p>
                  ))}
                </div>
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

export default Education; 
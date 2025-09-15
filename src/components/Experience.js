import React, { useEffect, useRef } from 'react';

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Software Developer",
      company: "Extramarks Education",
      period: "May 2025 - Present",
      location: "Noida, India",
      description: [
        "Designed scalable front-end architecture in React.js(Hooks, Context API, reusable components)",
        "Improved API , MongoDB performance and integrated Redux for complex workflows.",
        "Implemented secure authentication/authorization JWT, middleware and real-time notifications WebSockets.",
        "Collaborated on Node.js APIs, MongoDB schemas, and wrote unit/integration tests for stability",
        "Contributed to Agile practices (sprints, code reviews, peer programming) ensuring on-time delivery.",
      ]
    },
    {
      title: "Associate Engineer",
      company: "AKIRHS Software Solutions",
      period: "May 2024 - May 2025",
      location: "Remote",
      description: [
        "Built React.js UI and Node.js,Express APIs for booking and payments",
        "Automated workflows with Selenium ,Java, TestNGensured >85 percentage coverage via Jest,Mocha.",
        "Enhanced stability through unit , UI testing, reducing defects.",
        "Contributed in Agile sprints and authored API/workflow documentation.",
      ]
    },
    {
      title: "Software Intern",
      company: "Wise School",
      period: "Dec 2022 - July 2024",
      location: "Remote",
      description: [
      "Co-founded and built WiseSchool ERP from scratch using React.js, Node.js,Express, and AWS" ,
      "Delivered key ERP modules: Student Info, Fee Management, Timetable, Assignments, Reports Dashboard",
      "Deployed AWS services (EC2, S3, Lambda) for scalability and secure file storage",
      "Established coding standards, CI/CD pipelines, Git workflows, and mentored junior developers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden" ref={experienceRef}>
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
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 animate-pulse-slow"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-start animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline marker */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-800 shadow-lg animate-pulse"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden bg-gray-800/50 backdrop-blur-md border border-gray-700">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {exp.company}
                      </h4>
                      
                      <p className="text-sm text-gray-400 mb-4 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {exp.location}
                      </p>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
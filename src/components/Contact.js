import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "muskangupta23778@gmail.com",
      link: "mailto:muskangupta23778@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 79051 02375",
      link: "tel:+917905102375"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Noida, India",
      link: "https://share.google/6nGG68TaJjYzZ4n9i"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "muskan-gupta-235937183",
      link: "https://www.linkedin.com/in/muskan-gupta-235937183/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden" ref={contactRef}>
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
          Contact Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Get In Touch
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or just want to say hello!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-700"
                >
                  <div className="text-2xl mr-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-400">{info.label}</div>
                    <a 
                      href={info.link}
                      className="text-white font-medium hover:text-blue-400 transition-colors duration-300"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Forms Link */}
          <div className="animate-fade-in-right">
            <div className="card bg-gray-800/50 backdrop-blur-md border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Ready to start a conversation? Click the button below to send me a message through Google Forms. 
                  This helps me track and respond to all inquiries efficiently.
                </p>
                
                <div className="text-center">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeLAqhKSbkV82FkO-30XXrEk-rxk2SUPwoM0TPlWlqHgzhW8w/viewform?usp=dialog" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary group relative overflow-hidden inline-flex items-center"
                  >
                    <span className="relative z-10 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      Send Message via Google Forms
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    📊 Track responses and manage inquiries efficiently
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
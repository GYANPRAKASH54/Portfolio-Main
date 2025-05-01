import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background glitch line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-purple-500/30 animate-glitch-v"></div>
      <div className="absolute right-0 top-0 w-1 h-full bg-cyan-500/30 animate-glitch-v"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-purple-500/30 animate-glitch-h"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500/30 animate-glitch-h"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative z-10 text-gray-300 backdrop-blur-lg bg-gray-900/30 p-6 rounded-lg border border-gray-800 shadow-glow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                About Me
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400"></span>
              </h2>
              
              <p className="mb-4 text-lg leading-relaxed">
                I'm a passionate web developer and software tester with a keen eye for detail and a love for creating 
                elegant, user-friendly digital experiences. With expertise in both front-end and back-end technologies, 
                I bring a comprehensive approach to every project.
              </p>
              
              <p className="mb-6 text-lg leading-relaxed">
                My background in software testing gives me a unique perspective on building robust, bug-free applications. 
                I believe in writing clean, maintainable code that stands the test of time and scales with growing needs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                  <span>Full-stack Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></span>
                  <span>Automated Testing</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></span>
                  <span>Performance Optimization</span>
                </div>
              </div>
            </div>
            
            {/* Background shape */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-cyan-600/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Image frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden">
                <div className="absolute inset-0 border-2 border-purple-500 rounded-lg z-10 animate-glitch-border"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 z-0"></div>
                
                {/* Placeholder for Gyan's image */}
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Gyan Prakash" 
                  className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-luminosity"
                />
                
                {/* Scanlines effect */}
                <div className="absolute inset-0 bg-scanlines opacity-10 z-20"></div>
                
                {/* Glitch effect elements */}
                <div className="absolute inset-0 bg-cyan-500/30 mix-blend-overlay z-10 animate-glitch-1"></div>
                <div className="absolute inset-0 bg-purple-500/30 mix-blend-overlay z-10 animate-glitch-2"></div>
              </div>
              
              {/* Tech lines decoration */}
              <div className="absolute top-1/2 left-0 w-16 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <div className="absolute top-1/4 right-0 w-24 h-1 bg-gradient-to-l from-purple-500 to-transparent"></div>
              <div className="absolute bottom-1/4 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
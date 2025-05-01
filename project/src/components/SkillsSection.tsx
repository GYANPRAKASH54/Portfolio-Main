import React, { useEffect, useRef } from 'react';
import { skills } from '../data/profileData';

const SkillsSection: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = document.querySelectorAll('.skill-progress-bar');
            bars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-progress');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block relative">
            Technical Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400"></span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My technical toolkit is continuously evolving. Here are some of the technologies and skills I've mastered.
          </p>
        </div>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="backdrop-blur-sm bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-medium text-gray-200">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="skill-progress-bar h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                  style={{ 
                    width: '0%', 
                    '--target-width': `${skill.level}%`,
                  } as React.CSSProperties}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-8 inline-block relative">
            Additional Skills
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400"></span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Responsive Design', 'CI/CD', 'Test Automation', 'Performance Testing', 'Agile/Scrum', 'SEO', 'API Design', 'DevOps'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-glow-sm transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
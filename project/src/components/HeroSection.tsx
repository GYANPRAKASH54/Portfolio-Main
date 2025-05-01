import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { text, isTyping } = useTypewriter({
    words: [
      'Web Developer',
      'Software Tester',
      'Problem Solver',
      'UI/UX Enthusiast',
      'Tech Explorer',
    ],
    typeSpeed: 80,
    deleteSpeed: 50,
    delayBetweenWords: 2000,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 gap-2">
          {Array(144).fill(0).map((_, i) => (
            <div 
              key={i} 
              className="border border-cyan-500/20 bg-gradient-to-br from-transparent to-purple-500/5"
              style={{
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeIn">
          <span className="block text-gray-300">Hello, I'm</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-300 to-purple-500 animate-gradient">
            Gyan Prakash
          </span>
        </h1>
        
        <div className="h-12 md:h-16 mb-8 flex justify-center items-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-light">
            <span className="text-gray-400">I am a </span>
            <span className="text-cyan-400">{text}</span>
            <span className={`ml-1 inline-block w-1 h-8 bg-purple-500 ${isTyping ? 'animate-blink' : 'opacity-0'}`}></span>
          </h2>
        </div>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg md:text-xl animate-fadeIn animation-delay-300">
          Building elegant solutions to complex problems with clean, 
          efficient code and meticulous attention to detail.
        </p>
        
        <div className="flex justify-center gap-4 animate-fadeIn animation-delay-500">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-1">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border border-purple-500 text-purple-400 font-medium rounded-full hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1">
            Contact Me
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
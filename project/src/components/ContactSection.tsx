import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { socialLinks } from '../data/profileData';
import * as LucideIcons from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400"></span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to know more about my services? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="backdrop-blur-sm bg-gray-900/50 p-8 rounded-lg border border-gray-800 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Email</h4>
                    <a href="mailto:contact@gyanprakash.com" className="text-white hover:text-cyan-400 transition-colors">
                      gyanp2552@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Phone</h4>
                    <a href="tel:+1234567890" className="text-white hover:text-cyan-400 transition-colors">
                      +91 8210895737
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Location</h4>
                    <p className="text-white">Patna, Bihar</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    const IconComponent = (LucideIcons as any)[link.icon];
                    return (
                      <a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 border border-transparent transition-all duration-300 hover:shadow-glow-sm"
                        aria-label={link.name}
                      >
                        <IconComponent size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-xl"></div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500/10 rounded-full filter blur-xl"></div>
          </div>
          
          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-gray-900/50 p-8 rounded-lg border border-gray-800 relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <CheckCircle size={64} className="text-green-500 mb-4" />
                  <h4 className="text-xl font-medium text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-glow-cyan ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500/10 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
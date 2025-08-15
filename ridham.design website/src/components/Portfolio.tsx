import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Portfolio = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  const projects = [
    {
      id: 1,
      title: 'Cart Cell Therapy',
      description: 'Professional medical website showcasing advanced cell therapy treatments with modern design and patient-focused user experience.',
      image: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      liveUrl: 'http://cartcelltherapy.netlify.app',
    },
    {
      id: 2,
      title: 'Schoology X',
      description: 'Enhanced educational platform interface with improved user experience and modern design patterns for better student engagement.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      liveUrl: 'https://schoology-x.netlify.app/',
    },
    {
      id: 3,
      title: 'Maya Gruina Music Studio',
      description: 'Elegant music studio website featuring beautiful design, audio integration, and seamless booking functionality for music lessons.',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      liveUrl: 'https://mayagruinamusicstudio.netlify.app/',
    }
  ];

  return (
    <section 
      ref={ref}
      id="portfolio" 
      className={`py-20 bg-gray-50 transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated selection of premium web projects that showcase my expertise in creating 
            sophisticated digital experiences for diverse industries and client needs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            let hoverStartTime = 0;
            
            return (
              <a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer transition-all duration-800 ease-out hover:scale-[1.02] ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: inView ? `${400 + index * 200}ms` : '0ms',
                  transitionDuration: '800ms',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                onMouseEnter={() => {
                  hoverStartTime = Date.now();
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  
                  // Calculate time-based sensitivity progression
                  const hoverDuration = Date.now() - hoverStartTime;
                  const maxDuration = 2000; // 2 seconds to reach max sensitivity
                  const progress = Math.min(hoverDuration / maxDuration, 1);
                  
                  // Start at 30% sensitivity, max at 50%
                  const minSensitivity = 0.3;
                  const maxSensitivity = 0.5;
                  const currentSensitivity = minSensitivity + (progress * (maxSensitivity - minSensitivity));
                  
                  // Base divisor of 8, adjusted by sensitivity
                  const divisor = 8 / currentSensitivity;
                  
                  const rotateX = (y - centerY) / divisor;
                  const rotateY = (centerX - x) / divisor;
                  
                  e.currentTarget.style.transition = 'none';
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                }}
                onMouseLeave={(e) => {
                  hoverStartTime = 0;
                  e.currentTarget.style.transition = 'transform 0.3s ease-out';
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-3xl" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out delay-100">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Link Button */}
                    <div className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200">
                      <span className="text-sm font-medium">View Project</span>
                      <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            );
          })}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 ease-out delay-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-600 mb-8">
            Ready to create something exceptional together?
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxHo0eXX1OT4pM8_C-vBHMxokugNPM0_Mkptg1pMEfzmFbGQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold rounded-xl hover:from-slate-900 hover:to-black transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
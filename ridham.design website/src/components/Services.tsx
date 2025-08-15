import React from 'react';
import { Monitor, Palette, Lightbulb } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  const services = [
    {
      icon: Monitor,
      title: 'Custom Web Development',
      description: 'Bespoke websites and web applications built with modern technologies, tailored to your unique business needs and objectives.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Modern Architecture']
    },
    {
      icon: Palette,
      title: 'Brand Identity & Visual Design',
      description: 'Comprehensive brand development and visual identity systems that capture your essence and resonate with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Systems', 'Digital Assets']
    },
    {
      icon: Lightbulb,
      title: 'Concept to Launch',
      description: 'Complete project management from initial concept through final deployment, ensuring your vision becomes a polished reality.',
      features: ['Strategy & Planning', 'Design & Development', 'Testing & Optimization', 'Launch & Support']
    }
  ];

  return (
    <section 
      ref={ref}
      id="services" 
      className={`py-32 bg-white transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ease-out delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-6 tracking-wide">
            SERVICES
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800 font-extralight">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            From concept to deployment, I deliver premium digital experiences 
            tailored to your unique business objectives and user needs.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 relative overflow-hidden ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: inView ? `${400 + index * 200}ms` : '0ms',
                transitionDuration: '800ms',
                transitionProperty: 'opacity, transform'
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.removeProperty('--mouse-x');
                e.currentTarget.style.removeProperty('--mouse-y');
              }}
            >
              {/* Gradient border effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                      rgba(59, 130, 246, 1) 0%, 
                      rgba(59, 130, 246, 0.8) 15%, 
                      rgba(59, 130, 246, 0.6) 30%, 
                      rgba(59, 130, 246, 0.4) 50%, 
                      rgba(59, 130, 246, 0.2) 70%, 
                      transparent 85%),
                    conic-gradient(from 0deg at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                      rgba(59, 130, 246, 0.3) 0deg, 
                      rgba(147, 197, 253, 0.4) 90deg, 
                      rgba(59, 130, 246, 0.3) 180deg, 
                      rgba(147, 197, 253, 0.4) 270deg, 
                      rgba(59, 130, 246, 0.3) 360deg)
                  `,
                  mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                  maskComposite: 'xor',
                  WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                  WebkitMaskComposite: 'xor',
                  padding: '2px',
                  filter: 'blur(0.5px) brightness(1.2)'
                }}
              />
              
              {/* Content wrapper */}
              <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <service.icon className="h-10 w-10 text-slate-700" />
              </div>

              <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed font-light">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600 font-light">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-4"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-20 transition-all duration-1000 ease-out delay-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-slate-600 mb-8 font-light">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxHo0eXX1OT4pM8_C-vBHMxokugNPM0_Mkptg1pMEfzmFbGQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-slate-900 text-white font-light rounded-2xl hover:bg-slate-800 transform hover:scale-[1.02] transition-all duration-500 shadow-xl hover:shadow-2xl tracking-wide"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
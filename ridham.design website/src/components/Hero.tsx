import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Spline 3D Background */}
      <iframe 
        src="https://my.spline.design/noisyglasscube-t5si7zNyk8KTCHt13zEAqUo5/" 
        frameBorder="0" 
        width="100%" 
        height="100%"
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          border: 'none',
          zIndex: 1
        }}
      />
      
      {/* Sophisticated overlay for readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
          zIndex: 2
        }}
      ></div>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(15,23,42,0.4), transparent)',
          zIndex: 3
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-left lg:text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 leading-[1.1] tracking-tight pb-4">
            Crafting
            <span className="block font-extralight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-emerald-300 to-cyan-300 leading-[1.3] pb-2">
              Digital
            </span>
            <span className="block font-light">Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Sophisticated web solutions that elevate your brand and deliver 
            exceptional user experiences through meticulous craftsmanship and modern technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center mb-16">
            <a
              href="#portfolio"
              className="group inline-flex items-center px-10 py-5 bg-white text-slate-900 font-medium rounded-2xl hover:bg-white/95 transform hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-white/10"
            >
              <span className="mr-3">Explore My Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center px-10 py-5 bg-transparent border border-white/30 text-white font-medium rounded-2xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-500"
            >
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs font-light tracking-wider uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
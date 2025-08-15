import React from 'react';
import { Code, Palette, Zap, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  const skills = [
    { icon: Code, name: 'Modern Web Development' },
    { icon: Palette, name: 'UI/UX Implementation' },
    { icon: Zap, name: 'Performance Optimization' },
    { icon: Sparkles, name: 'Branding' },
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-32 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ease-out delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-6 tracking-wide">
            ABOUT
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Precision in Every
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800 font-extralight">
              Detail
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            I specialize in creating sophisticated digital experiences that seamlessly blend 
            aesthetic excellence with technical precision, delivering solutions that elevate your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ease-out delay-400 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <img
                src="https://aicdn.picsart.com/7a659ff8-ec94-4df1-bd45-36a7f931aac3.png"
                alt="Developer workspace"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center shadow-2xl">
                <Code className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-1000 ease-out delay-600 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-4xl font-light text-slate-900 mb-8 leading-tight">
              Transforming Vision Into
              <span className="block font-extralight text-slate-600">Digital Reality</span>
            </h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light">
              With meticulous attention to detail and a deep understanding of modern web technologies, 
              I craft digital experiences that not only captivate users but drive meaningful business outcomes. 
              Every project is approached with strategic thinking and executed with technical excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: inView ? `${800 + index * 100}ms` : '0ms',
                    transitionDuration: '700ms'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors duration-300">
                      <skill.icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2 text-sm tracking-wide">{skill.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
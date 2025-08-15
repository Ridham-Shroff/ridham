import React from 'react';
import { ExternalLink, FileText, Clock, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Form = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const benefits = [
    {
      icon: FileText,
      title: 'Comprehensive Questions',
      description: 'Detailed form covering all aspects of your project needs'
    },
    {
      icon: Clock,
      title: 'Quick & Easy',
      description: 'Takes just 5-10 minutes to complete'
    },
    {
      icon: CheckCircle,
      title: 'Fast Response',
      description: 'Get a detailed proposal soon'
    }
  ];

  return (
    <section 
      ref={ref}
      id="form" 
      className={`py-20 bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen flex items-center justify-center transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your project? Fill out our comprehensive project inquiry form 
            to get a detailed proposal tailored to your specific needs.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 transition-all duration-1000 ease-out delay-400 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Project Inquiry Form
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our detailed form helps us understand your vision, requirements, and goals 
              so we can create the perfect solution for your business.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxHo0eXX1OT4pM8_C-vBHMxokugNPM0_Mkptg1pMEfzmFbGQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span className="mr-3">Start Your Project Inquiry</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center transition-all duration-1000 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: inView ? `${600 + index * 150}ms` : '0ms',
                transitionDuration: '700ms'
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-4 mx-auto">
                <benefit.icon className="h-8 w-8 text-slate-700" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">{benefit.title}</h4>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`text-center transition-all duration-1000 ease-out delay-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
            <h4 className="text-lg font-semibold text-slate-800 mb-2">What happens next?</h4>
            <p className="text-slate-600">
              After you submit the form, I'll review your project details and get back to you soon 
              with a detailed proposal, timeline, and next steps. For urgent projects, feel free to call directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
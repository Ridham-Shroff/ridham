import React from 'react';
import { MapPin, Phone, Mail, Calendar, MessageCircle, Linkedin, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  // Debug function to test button clicks
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('Email button clicked!');
    console.log('Event:', e);
    console.log('Target:', e.target);
    console.log('Current target:', e.currentTarget);
    
    // Check if mailto is working
    const href = e.currentTarget.href;
    console.log('Href:', href);
    
    // Test if we can access the link
    if (href && href.startsWith('mailto:')) {
      console.log('Mailto link detected, should open email client');
    } else {
      console.log('ERROR: Invalid or missing mailto href');
      e.preventDefault();
    }
  };

  const handleFormClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('Form button clicked!');
    console.log('Event:', e);
    console.log('Target:', e.target);
    console.log('Current target:', e.currentTarget);
    
    const href = e.currentTarget.href;
    console.log('Href:', href);
    
    if (href && href.includes('docs.google.com')) {
      console.log('Google Form link detected, should open in new tab');
    } else {
      console.log('ERROR: Invalid or missing form href');
      e.preventDefault();
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ridham.design@gmail.com',
      link: 'mailto:ridham.design@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(408) 641-0357',
      link: 'tel:+14086410357'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available Worldwide',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/ridham-shroff-8564b3374', name: 'LinkedIn' }
  ];

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`py-20 bg-gray-50 transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Use the detailed form above or reach out directly 
            through any of the contact methods below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 ease-out delay-400 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    onClick={info.title === 'Email' ? handleEmailClick : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    style={{ 
                      cursor: 'pointer',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none'
                    }}
                  >
                    <div className="flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 ease-out delay-600 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Follow Me</h3>
              
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg hover:bg-blue-500 text-gray-600 hover:text-white transition-all duration-200 hover:scale-110"
                    title={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Let's Connect</h4>
                <p className="text-blue-100 mb-3 text-sm">
                  I'll get back to you soon after receiving your message. For urgent projects, 
                  feel free to call directly.
                </p>
                <div className="flex items-center space-x-2 text-blue-100 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Looking forward to hearing from you</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center transition-all duration-1000 ease-out delay-800 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 text-blue-100">
                Fill out the detailed project form above to get a comprehensive proposal, 
                or reach out directly for a quick consultation.
              </p>
              <div className="text-center">
                <a
                  href="mailto:ridham.design@gmail.com"
                  onClick={handleEmailClick}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                  style={{ 
                    cursor: 'pointer',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none'
                  }}
                >
                  Send Quick Email
                </a>
              </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
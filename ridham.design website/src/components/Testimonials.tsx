import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Testimonials = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonials = [
    {
      id: 1,
      name: 'William Chou',
      role: 'Co-Founder Schoology X',
      content: 'This web developer completely transformed our product launch! Our Schoology X extension\'s downloads per month grew by more than 5x after they built our site. The clean design and clear messaging sky rocketed our conversion rate. Professional, fast, and the results speak for themselves. Highly recommend!',
      rating: 5
    },
    {
      id: 2,
      name: 'Maya Gruina',
      role: 'Founder - MayaGruinaMusicStudio',
      content: 'As a piano teacher, I needed a website that would attract new students and showcase my teaching style. This developer created a beautiful, welcoming site that perfectly captures the joy of learning music. My student inquiries doubled within the first month, and parents constantly compliment how professional and easy to navigate it is. Worth every penny!',
      rating: 5
    },
    {
      id: 3,
      name: 'Anonymous',
      role: 'CIO, RPS Navesh',
      content: 'Working with this developer was exceptional. They understood the trust and credibility crucial for financial services and delivered a sophisticated, secure website that reflects our expertise. Our client acquisition increased significantly and the streamlined contact process has improved our lead quality tremendously. Professional, reliable, and results-driven.',
      rating: 5
    }
  ];

  // Auto-cycle through testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={ref}
      id="testimonials" 
      className={`relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-20 transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from clients who've transformed their digital presence with our solutions
          </p>
        </div>

        {/* Main testimonial card */}
        <div className="relative flex items-center justify-center">
          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-20 w-14 h-14 bg-slate-800 hover:bg-slate-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-white transition-colors duration-200" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 z-20 w-14 h-14 bg-slate-800 hover:bg-slate-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-white transition-colors duration-200" />
          </button>

          {/* Testimonial Card */}
          <div 
            key={currentTestimonial.id}
            className={`bg-white rounded-3xl shadow-2xl p-12 md:p-16 max-w-4xl mx-auto text-center transition-all duration-700 ease-out transform ${
              inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            {/* Large quote mark */}
            <div className="flex justify-center mb-8">
              <Quote className="h-16 w-16 text-gray-300" />
            </div>

            {/* Quote text */}
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-light text-slate-800 leading-relaxed italic">
                "{currentTestimonial.content}"
              </p>
            </div>

            {/* Rating stars */}
            <div className="flex justify-center mb-8">
              {[...Array(currentTestimonial.rating)].map((_, index) => (
                <Star 
                  key={index} 
                  className="h-6 w-6 text-yellow-400 fill-current mx-1" 
                />
              ))}
            </div>

            {/* Author info */}
            <div className="text-center">
              <div>
                <h4 className="text-xl font-bold text-slate-800">{currentTestimonial.name}</h4>
                <p className="text-gray-600 font-medium">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-slate-800 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 ease-out delay-800 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Ready to Join These Success Stories?</h3>
          <p className="text-lg mb-8 text-gray-600">
            Let's discuss how I can help transform your web presence into a powerful business asset.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxHo0eXX1OT4pM8_C-vBHMxokugNPM0_Mkptg1pMEfzmFbGQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
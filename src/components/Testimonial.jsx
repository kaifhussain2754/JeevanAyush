import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Morgan",
      rating: 5,
      text: "Exceptional service throughout my adventure. The team went above and beyond to ensure everything was perfect. Would highly recommend their expertise to anyone seeking outdoor experiences.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      rating: 5,
      text: "Incredible experience with the diving team. Professional, safety-conscious, and made sure everyone had a great time. The equipment was top-notch and the locations were breathtaking.",
    },
    {
      id: 3,
      name: "James Wilson",
      rating: 5,
      text: "Amazing diving experience! The instructors were knowledgeable and patient. Perfect for both beginners and experienced divers. The whole trip was well organized.",
    },
    {
      id: 4,
      name: "Emily Brown",
      rating: 5,
      text: "What an incredible journey! The guides were exceptional and the whole experience exceeded my expectations. Will definitely be coming back for more adventures.",
    },
    {
      id: 5,
      name: "Michael Lee",
      rating: 5,
      text: "Outstanding service from start to finish. The team's attention to detail and focus on safety made the experience truly memorable.",
    },
    {
      id: 6,
      name: "Laura Martinez",
      rating: 5,
      text: "A perfect blend of adventure and comfort. The instructors were fantastic and made sure everyone felt confident throughout the experience.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Determine number of cards to show based on screen width
  const getCardsToShow = () => {
    if (windowWidth >= 1280) return 4; // xl
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 2;  // md
    return 1;                          // sm
  };

  const cardsToShow = getCardsToShow();
  const totalSlides = Math.max(0, testimonials.length - cardsToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (totalSlides + 1));
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (totalSlides + 1)) % (totalSlides + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Reset current index when screen size changes to prevent empty spaces
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div 
      className="relative bg-cover bg-center" 
      style={{ backgroundImage: 'url(/testbg.jpg)' }} // Set your background image path here
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">TRAVELERS REVIEW</h2>
          <p className="text-gray-200 text-base md:text-lg">100% True Reviews from Our Satisfied Customers.</p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`flex-shrink-0 px-2 ${
                    cardsToShow === 1 ? 'w-full' :
                    cardsToShow === 2 ? 'w-1/2' :
                    cardsToShow === 3 ? 'w-1/3' :
                    'w-1/4'
                  }`}
                >
                  <div className="bg-white/95 backdrop-blur rounded-lg shadow-lg p-4 md:p-6 hover:-translate-y-1 transition-transform duration-300 h-full">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="bg-gray-100 rounded-full p-1.5 md:p-2 mr-2 md:mr-3">
                        <User className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold mb-0.5 md:mb-1">{testimonial.name}</h3>
                        <div className="flex gap-0.5 md:gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg 
                              key={i}
                              className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 md:p-2 shadow-lg transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 md:p-2 shadow-lg transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 md:mt-8 gap-1.5 md:gap-2">
          {[...Array(totalSlides + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? 'bg-red-500' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

import { useState, useEffect } from 'react';
import heroCampus1 from '@/assets/hero-campus-1.jpg';
import heroCampus2 from '@/assets/hero-campus-2.jpg';
import heroCampus3 from '@/assets/hero-campus-3.jpg';

const slides = [
  {
    image: heroCampus1,
    title: 'Welcome to BAC Alumni Network',
    subtitle: 'Connecting Agricultural Leaders Since 1945',
  },
  {
    image: heroCampus2,
    title: 'A Legacy of Excellence',
    subtitle: 'Building the Future of Agriculture Together',
  },
  {
    image: heroCampus3,
    title: 'Celebrate Your Journey',
    subtitle: 'Join Our Growing Community of 5000+ Alumni',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
          <div className="absolute inset-0 flex items-end pb-12 md:pb-16 justify-center text-center">
            <div className="max-w-3xl px-4 animate-slide-up">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-base md:text-xl text-white/90 drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-highlight w-8'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

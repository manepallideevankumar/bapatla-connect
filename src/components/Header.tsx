import { useState, useEffect } from 'react';
import bacLogo from '@/assets/bac-logo.png';
import heroCampus1 from '@/assets/hero-campus-1.jpg';
import heroCampus2 from '@/assets/hero-campus-2.jpg';
import heroCampus3 from '@/assets/hero-campus-3.jpg';

const thumbnailImages = [heroCampus1, heroCampus2, heroCampus3];

const Header = () => {
  const [currentThumbnail, setCurrentThumbnail] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThumbnail((prev) => (prev + 1) % thumbnailImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <img 
              src={bacLogo} 
              alt="Bapatla Agricultural College Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Center - Title */}
          <div className="flex-1 text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-primary tracking-wide">
              BAPATLA AGRICULTURAL COLLEGE ALUMNI
            </h1>
            <p className="text-sm text-muted-foreground mt-1 hidden md:block">
              Connecting Generations of Agricultural Excellence
            </p>
          </div>

          {/* Right - Rotating Thumbnails */}
          <div className="flex-shrink-0 hidden md:block">
            <div className="relative w-24 h-16 lg:w-32 lg:h-20 rounded-lg overflow-hidden shadow-md">
              {thumbnailImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Campus view ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentThumbnail ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

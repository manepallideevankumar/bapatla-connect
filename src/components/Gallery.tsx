import { ArrowRight, Images, Video } from 'lucide-react';
import heroCampus1 from '@/assets/hero-campus-1.jpg';
import heroCampus2 from '@/assets/hero-campus-2.jpg';
import heroCampus3 from '@/assets/hero-campus-3.jpg';

const Gallery = () => {
  const commonPhotos = [heroCampus1, heroCampus2, heroCampus3];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Gallery</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Common Gallery */}
          <div className="card-elevated">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Images className="h-5 w-5 text-primary" />
                <h3 className="font-serif font-semibold text-lg text-primary">
                  Photos / Videos Gallery – Common to All
                </h3>
              </div>
              <a href="#" className="more-link flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {commonPhotos.map((photo, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                >
                  <img
                    src={photo}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Batchwise Gallery */}
          <div className="card-elevated">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <h3 className="font-serif font-semibold text-lg text-primary">
                  Photos / Videos Gallery – Each Batchwise
                </h3>
              </div>
              <a href="#" className="more-link flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {commonPhotos.map((photo, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
                >
                  <img
                    src={photo}
                    alt={`Batch Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-primary-foreground text-xs py-1 px-2 text-center">
                    Batch {1990 + index}
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

export default Gallery;

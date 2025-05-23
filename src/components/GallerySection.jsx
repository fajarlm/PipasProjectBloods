import { useState } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';
import Image from '../assets/foto1.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Fashion model in stylish outfit',
      category: 'Women',
    },
    {
      id: 2,
      src: Image ,
      alt: 'Man in denim jacket',
      category: 'Men',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Woman in casual outfit',
      category: 'Women',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Fashion accessories',
      category: 'Accessories',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1848471/pexels-photo-1848471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Man in formal wear',
      category: 'Men',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Woman in elegant dress',
      category: 'Women',
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="galeri" className="section-padding bg-neutral-50">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-center">Hubungi Kami</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12   text-center">
          Jelajahi inspirasi gaya terbaru dari koleksi kami melalui galeri foto ini. 
          Temukan ide untuk mengekspresikan kepribadian Anda melalui fashion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg cursor-pointer h-80">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div 
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                onClick={() => openLightbox(image)}
              >
                <div className="text-white text-center p-4">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 mx-auto">
                    <FiZoomIn className="text-white text-xl" />
                  </button>
                  <p className="font-serif text-lg">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FiX />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
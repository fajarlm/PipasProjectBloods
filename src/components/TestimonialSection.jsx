import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 5,
      name: 'Putri Anindita',
      role: 'Fashion Blogger',
      image: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Saya sangat senang dengan kualitas pakaian dari Bloods. Bahan yang digunakan sangat nyaman dan desainnya selalu up-to-date. Pelayanan mereka juga sangat baik dan pengiriman cepat.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Budi Santoso',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Beberapa bulan yang lalu saya membeli setelan jas dari Bloods untuk acara pernikahan, dan saya mendapatkan banyak pujian. Potongannya pas dan bahan yang digunakan berkualitas tinggi.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Maya Sari',
      role: 'Content Creator',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Bloods selalu menjadi pilihan pertama saya untuk kebutuhan fashion. Koleksi mereka sangat beragam dan memiliki keunikan tersendiri. Saya selalu merekomendasikan Bloods kepada teman-teman saya.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Afdhal Hadi Solahudin',
      role: 'Astronot',
      image: 'https://lh4.googleusercontent.com/fwge57Nuq29j8gSt8SHSiIKDum8ccZ1W1JyawhsDSQqsQCyfUJGPzUC47RRz9eu825X50O9so2dPCMWwUnh6KAhyNHpyxjRH4pmZHIL_QJDUNCrxXywplMrigWQiso6CZw=w1280',
      text: 'Bahan dari Bloods sangat nyaman dan berkualitas tinggi. Saya sudah membeli beberapa produk dari mereka dan semuanya memuaskan. Pelayanan pelanggan juga sangat responsif.',
      rating: 4.5,
    },
    {
      id: 1,
      name: 'M.Attariq Annajmus Saqib',
      role: 'Gamers',
      image: 'https://lh4.googleusercontent.com/ogmzy67Amanf0Q1eoQ65O-EvUG5WhpQsY8EIPJAZjHlwLMRTIW7eAC_vX_dzyVxwewOA5Kl9p8y18gchiNr3V_gV0_-3TI_j69xOcISLgUv7hej-ByL_LoVWIuL0HmTsxg=w1280',
      text: 'Saya sangat terkesan dengan koleksi pakaian dari Bloods. Desainnya modern dan stylish, cocok untuk berbagai acara. Saya pasti akan membeli lagi di masa depan.',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Riski',
      role: 'Arsitektur',
      image: 'https://lh3.googleusercontent.com/k3SS1zKzdhvP0tg8QL-Np5xaUb4JLoP6N7sAWqHV9v8lJcgE8MP0Aze6D3yUn4__-f8EXLj5bgyO5yKr1C6lSTVfPoX326Il-Q3OIGIbL3UUxGHYgxCMN50JHasx_2wQCw=w1280',
      text: 'Saya sudah menjadi pelanggan Bloods selama beberapa tahun dan saya sangat puas dengan produk mereka. Kualitasnya selalu konsisten dan desainnya selalu menarik. Saya merekomendasikan Bloods kepada semua orang.',
      rating: 4.5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, activeIndex]);

  return (
    <section id="testimoni" className="section-padding bg-primary-900 text-white">
      <div className="container mx-auto container-padding">
        <h2 className=" text-center text-3xl md:text-4xl font-serif font-semibold text-white mb-4;">Apa Kata Mereka</h2>
        <p className="text-lg  max-w-2xl mx-auto mb-12 text-center text-white/80 pt-4">
          Kami berusaha memberikan pengalaman terbaik bagi pelanggan kami. 
          Berikut adalah beberapa testimonial dari pelanggan setia kami.
        </p>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 object-cover rounded-full mx-auto mb-6"
                    />
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, index) => (
                        <FiStar 
                          key={index}
                          className={`${
                            index < testimonial.rating ? 'fill-secondary-400 text-secondary-400' : 'text-neutral-400'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="italic mb-6 text-white/90">{testimonial.text}</p>
                    <h3 className="font-serif font-semibold text-xl">{testimonial.name}</h3>
                    <p className="text-white/80">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            onClick={prevSlide}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button 
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            onClick={nextSlide}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            aria-label="Next testimonial"
          >
            <FiChevronRight className="text-xl" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white w-6' : 'bg-white/40'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
import { FiCheck } from 'react-icons/fi';

const AboutSection = () => {
  const highlights = [
    'Bahan berkualitas tinggi',
    'Desain eksklusif dan terkini',
    'Dibuat oleh penjahit profesional',
    'Ramah lingkungan dan berkelanjutan',
  ];

  return (
    <section id="tentang" className="section-padding bg-neutral-50">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Tim desainer fashion kami"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-neutral-900 font-serif font-bold text-xl">10+ Tahun</p>
                <p className="text-neutral-600">Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="section-title text-left">Tentang Kami</h2>
            <div className="w-20 h-1 bg-primary-800 mb-6"></div>
            <p className="text-neutral-700 mb-6">
              Bloods didirikan pada tahun 2010 dengan visi untuk memberikan pengalaman 
              fashion yang unik dan personal bagi setiap pelanggan. Kami percaya bahwa 
              pakaian bukan hanya sekedar kebutuhan, tetapi juga cara untuk mengekspresikan 
              diri.
            </p>
            <p className="text-neutral-700 mb-8">
              Tim desainer kami terus berinovasi untuk menciptakan koleksi yang tidak 
              hanya mengikuti tren, tetapi juga memiliki keunikan dan kualitas premium. 
              Setiap detail pada produk kami dirancang dengan cermat untuk memastikan 
              kepuasan pelanggan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FiCheck className="text-primary-600 text-xl" />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="button-primary">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
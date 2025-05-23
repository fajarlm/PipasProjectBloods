import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="beranda" className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://asset-2.tstatic.net/bogor/foto/bank/images/distro_20161226_151549.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-neutral-900/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center container-padding">
        <div className="container mx-auto">
          <div className="max-w-xl">
            <h2 className="text-xl md:text-2xl font-medium text-accent-100 mb-4">
              Koleksi Terbaru 2025
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Temukan Gaya Fashion Modern Yang Sesuai Dengan Kepribadianmu
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              Jadilah yang pertama mendapatkan koleksi edisi terbatas kami. 
              Desain eksklusif dengan kualitas premium untuk penampilan terbaikmu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="koleksi"
                smooth={true}
                duration={500}
                offset={-70}
                className="button-primary"
              >
                Lihat Koleksi
              </Link>
              <Link
                to="tentang"
                smooth={true}
                duration={500}
                offset={-70}
                className="button-secondary"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
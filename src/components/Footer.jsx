import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Halaman',
      links: [
        { name: 'Beranda', to: 'beranda' },
        { name: 'Tentang Kami', to: 'tentang' },
        { name: 'Koleksi', to: 'koleksi' },
        { name: 'Galeri', to: 'galeri' },
        { name: 'Kontak', to: 'kontak' },
      ],
    },
    {
      title: 'Layanan',
      links: [
        { name: 'Fashion Konsultasi', to: '#' },
        { name: 'Ukuran Kustom', to: '#' },
        { name: 'Pengiriman', to: '#' },
        { name: 'Pengembalian & Refund', to: '#' },
        { name: 'FAQ', to: '#' },
      ],
    },
    {
      title: 'Lainnya',
      links: [
        { name: 'Karir', to: '#' },
        { name: 'Blog Fashion', to: '#' },
        { name: 'Lokasi Toko', to: '#' },
        { name: 'Kebijakan Privasi', to: '#' },
        { name: 'Syarat & Ketentuan', to: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: 'https://www.facebook.com', name: 'Facebook' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com', name: 'Instagram' },
    { icon: <FiTwitter />, url: 'https://www.twitter.com', name: 'Twitter' },
    { icon: <FiYoutube />, url: 'https://www.youtube.com', name: 'Youtube' },
  ];

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-4">BLOODS</h2>
            <p className="text-neutral-400 mb-6 max-w-md">
              Bloids adalah brand fashion premium yang menawarkan koleksi pakaian dan 
              aksesoris berkualitas tinggi dengan desain yang elegan dan modern.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-800 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.to.startsWith('#') ? (
                      <a 
                        href={link.to} 
                        className="text-neutral-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Bloods. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors duration-300">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors duration-300">
                Syarat Penggunaan
              </a>
              <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors duration-300">
                Peta Situs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
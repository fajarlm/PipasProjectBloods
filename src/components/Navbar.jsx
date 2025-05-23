import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'koleksi', label: 'Koleksi' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'lokasi', label: 'Lokasi' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center container-padding">
        <div className="flex items-center">
          <h1 className={`font-serif text-2xl font-bold ${scrolled ? 'text-primary-800' : 'text-white'}`}>
            BLOODS
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-70}
              className={`${
                scrolled ? 'text-neutral-700' : 'text-white'
              } hover:text-primary-600 cursor-pointer transition-colors duration-300 font-medium`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <FiX className={scrolled ? 'text-neutral-900' : 'text-white'} />
          ) : (
            <FiMenu className={scrolled ? 'text-neutral-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto py-4 flex flex-col space-y-4 container-padding">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-neutral-800 hover:text-primary-600 transition-colors duration-300 font-medium"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
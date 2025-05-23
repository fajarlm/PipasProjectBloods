import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import TestimonialSection from './components/TestimonialSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <TestimonialSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
import { useState } from 'react';
import { FiShoppingBag, FiHeart, FiSearch } from 'react-icons/fi';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('semua');

  const categories = [
    { id: 'semua', name: 'Semua' },
    { id: 'wanita', name: 'Wanita' },
    { id: 'pria', name: 'Pria' },
    { id: 'aksesoris', name: 'Aksesoris' },
  ];

  const products = [
    {
      id: 1,
      name: 'Blus Premium',
      category: 'wanita',
      price: 'Rp 429.000',
      image: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Kemeja Formal',
      category: 'pria',
      price: 'Rp 549.000',
      image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Tas Selempang',
      category: 'aksesoris',
      price: 'Rp 789.000',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Dress Casual',
      category: 'wanita',
      price: 'Rp 659.000',
      image: 'https://images.pexels.com/photos/7691168/pexels-photo-7691168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'Jaket Denim',
      category: 'pria',
      price: 'Rp 899.000',
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      name: 'Jam Tangan Klasik',
      category: 'aksesoris',
      price: 'Rp 1.299.000',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 7,
      name: 'Rok Midi Plisket',
      category: 'wanita',
      price: 'Rp 489.000',
      image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 8,
      name: 'Kemeja Casual',
      category: 'pria',
      price: 'Rp 399.000',
      image: 'https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const filteredProducts = activeCategory === 'semua' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="koleksi" className="section-padding">
      <div className="container mx-auto container-padding">
        <h2 className="section-title text-center">Koleksi Kami</h2>
        <p className="section-subtitle text-center">
          Temukan koleksi terbaik kami yang dirancang khusus untuk memenuhi kebutuhan fashion Anda. 
          Setiap item dibuat dengan perhatian detail yang tinggi dan menggunakan bahan berkualitas.
        </p>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-800 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-white text-primary-800 flex items-center justify-center hover:bg-primary-800 hover:text-white transition-colors duration-300">
                      <FiShoppingBag />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white text-primary-800 flex items-center justify-center hover:bg-primary-800 hover:text-white transition-colors duration-300">
                      <FiHeart />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white text-primary-800 flex items-center justify-center hover:bg-primary-800 hover:text-white transition-colors duration-300">
                      <FiSearch />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
              <p className="text-primary-800 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="button-primary">
            Lihat Semua Koleksi
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
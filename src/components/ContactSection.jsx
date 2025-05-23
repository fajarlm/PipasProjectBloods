import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Nama harus diisi';
    if (!formData.email.trim()) {
      errors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Format email tidak valid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subjek harus diisi';
    if (!formData.message.trim()) errors.message = 'Pesan harus diisi';
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Here you would typically send the form data to a server
    alert('Terima kasih! Pesan Anda telah terkirim.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Alamat Kami',
      details: '58 Jl. Raya Cibadak, Cicurug, Indonesia',
    },
    {
      icon: <FiPhone />,
      title: 'Hubungi Kami',
      details: '62 858-8844-3153',
    },
    {
      icon: <FiMail />,
      title: 'Email Kami',
      details: 'info@Bloods.id',
    },
    {
      icon: <FiClock />,
      title: 'Jam Operasional',
      details: 'Senin - Sabtu: 10:00 - 20:00',
    },
  ];

  return (
    <section id="kontak" className="section-padding">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-center">Hubungi Kami</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12   text-center">
          Apakah Anda memiliki pertanyaan atau ingin berkonsultasi dengan tim kami? 
          Jangan ragu untuk menghubungi kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-primary-800 text-white p-8 rounded-lg h-full">
              <h3 className="text-xl font-serif font-semibold mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-xl mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-white/80">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-neutral-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                      formErrors.name ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-neutral-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                      formErrors.email ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-neutral-700 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                    formErrors.subject ? 'border-red-500' : 'border-neutral-300'
                  }`}
                />
                {formErrors.subject && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-neutral-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                    formErrors.message ? 'border-red-500' : 'border-neutral-300'
                  }`}
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>

              <button type="submit" className="button-primary w-full">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
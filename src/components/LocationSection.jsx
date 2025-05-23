import Image from '../assets/lokasi.jpg';

const LocationSection = () => {
    return (
        <section id="lokasi" className="section-padding bg-neutral-50">
            <div className="container mx-auto container-padding">
                <h2 className="section-title text-center">Lokasi Toko</h2>
                <p className="section-subtitle text-center">
                    Kunjungi toko kami untuk melihat koleksi lengkap dan merasakan langsung kualitas produk Bloods.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-[400px] rounded-lg p- overflow-hidden shadow-lg">
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1687375948915!6m8!1m7!1s3Vd8T1ekdM7xQWip_dj7yw!2m2!1d-6.7777642!2d106.7867539!3f315.2552106887101!4f-6.157217784165326!5f0.7820865974627469"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe> */}

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.865070976594!2d106.7981765147693!3d-6.244636863914658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e00f6184db%3A0x712f01c03b7c860d!2sGedung%20Sate!5e0!3m2!1sid!2sid!4v1687376523456!5m2!1sid!2sid"                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-lg">
                        <img src={Image} alt="Bloods Store" className="w-full h-auto rounded-lg mb-6" />
                    </div>

                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-serif font-semibold mb-6">Bloods Store Cicurug </h3>
                    <div className="flex">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Alamat</h4>
                                <p className="text-neutral-600">
                                    58 Jl. Raya Cibadak<br />
                                    Cicurug, Indonesia<br />
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">Jam Operasional</h4>
                                <div className="text-neutral-600">
                                    <p>Senin - Jumat: 10:00 - 21:00</p>
                                    <p>Sabtu - Minggu: 10:00 - 22:00</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">Kontak</h4>
                                <div className="text-neutral-600">
                                    <p>Telepon: (021) 1234-5678</p>
                                    <p>Email: store@bloods.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
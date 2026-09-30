import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fullGalleryImages, galleryCategories } from '@/mocks/fullGalleryData';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

export default function Galerija() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeFilter, setActiveFilter] = useState('vsi');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeFilter === 'vsi'
    ? fullGalleryImages
    : fullGalleryImages.filter((img) => img.category === activeFilter);

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background-50">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/af1fa38fd71168577a661a6aaaab376a.png"
                alt="Gostilna Rožmarin - terasa s sončnim zahodom"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 mb-6 animate-[fadeInDown_0.8s_ease-out]">
                <i className="ri-camera-line text-accent-200"></i>
                <span className="text-accent-200 text-sm font-medium">Utrinki</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-background-50 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.15s] [animation-fill-mode:backwards]">
                <span className="text-accent-400 italic">Galerija</span>
              </h1>
              <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.3s] [animation-fill-mode:backwards]">
                Sprehodite se skozi utrinke Gostilne Rožmarin in Apartmajev Babi.
              </p>
            </div>
          </section>

          {/* Filter Tabs */}
          <section className="py-10 md:py-14 bg-background-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex justify-center">
                <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-background-100 border border-background-200/70">
                  {galleryCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveFilter(cat.id)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                        activeFilter === cat.id
                          ? 'bg-primary-500 text-background-50'
                          : 'text-foreground-600 hover:bg-background-50'
                      }`}
                    >
                      <i className={`${cat.ikona} text-base`}></i>
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="pb-16 md:pb-24 bg-background-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {filteredImages.map((image, index) => (
                  <ScrollReveal key={image.id} animacija="scale-in" zamik={(index % 6) * 60} prag={0.05}>
                    <div
                      onClick={() => setSelectedImage(index)}
                      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-background-50/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                          <i className="ri-zoom-in-line text-foreground-900 text-xl"></i>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-background-50 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          {image.alt}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {filteredImages.length === 0 && (
                <div className="text-center py-20 text-foreground-400">
                  <i className="ri-image-line text-5xl mb-4 block"></i>
                  <p className="text-lg">Ni fotografij v tej kategoriji.</p>
                </div>
              )}
            </div>
          </section>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center">
              <button onClick={() => setSelectedImage(null)} className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors z-20 cursor-pointer">
                <i className="ri-close-line text-2xl"></i>
              </button>
              <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center">
                <img src={filteredImages[selectedImage].src} alt={filteredImages[selectedImage].alt} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
                <p className="text-background-50/70 text-sm mt-4 text-center max-w-lg px-4">{filteredImages[selectedImage].alt}</p>
              </div>
              <button onClick={goToPrev} className="absolute left-3 md:left-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors cursor-pointer">
                <i className="ri-arrow-left-s-line text-2xl"></i>
              </button>
              <button onClick={goToNext} className="absolute right-3 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors cursor-pointer">
                <i className="ri-arrow-right-s-line text-2xl"></i>
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background-50/10 backdrop-blur-sm text-background-50 text-sm">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </div>
          )}

          {/* CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-primary-900">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4">
                  Vam je všeč, kar vidite?{' '}
                  <span className="text-accent-400 italic">Obiščite nas</span>
                </h2>
                <p className="text-background-50/70 mb-8 max-w-xl mx-auto">
                  Pridite in doživite Gostilno Rožmarin v živo. Rezervirajte mizo ali apartma še danes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:+38641753335" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-500 text-background-50 font-semibold hover:bg-accent-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
                    <i className="ri-phone-line text-lg"></i>
                    Pokliči 041 753 335
                  </a>
                  <Link to="/kontakt" className="w-full sm:w-auto px-8 py-4 rounded-full bg-background-50/15 backdrop-blur-sm border border-background-50/30 text-background-50 font-semibold hover:bg-background-50/25 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
                    <i className="ri-mail-line text-lg"></i>
                    Kontaktiraj nas
                  </Link>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </PageTransition>
  );
}
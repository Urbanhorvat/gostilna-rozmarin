import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuData, menuCategories } from '@/mocks/menuData';
import { galleryImages } from '@/mocks/galleryData';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

export default function Gostilna() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeCategory, setActiveCategory] = useState('vsePice');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentItems = menuData[activeCategory as keyof typeof menuData] || [];

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background-50">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/3da97481e91e7d23148dee790e23750e.png"
                alt="Gostilna Rožmarin - notranjost lokala"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 mb-6 animate-[fadeInDown_0.8s_ease-out]">
                <i className="ri-restaurant-line text-accent-200"></i>
                <span className="text-accent-200 text-sm font-medium">Odprto vsak dan</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-background-50 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.15s] [animation-fill-mode:backwards]">
                Gostilna <span className="text-accent-400 italic">Rožmarin</span>
              </h1>
              <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.3s] [animation-fill-mode:backwards]">
                Družinam prijazna gostilna z dolgoletno tradicijo, domačimi okusi in prijetnim ambientom.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.45s] [animation-fill-mode:backwards]">
                <a
                  href="tel:+38641753335"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-500 text-background-50 font-semibold hover:bg-accent-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="ri-phone-line text-lg"></i>
                  Rezerviraj mizo
                </a>
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-background-50/15 backdrop-blur-sm border border-background-50/30 text-background-50 font-semibold hover:bg-background-50/25 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="ri-restaurant-line text-lg"></i>
                  Jedilni list
                </a>
              </div>
            </div>
          </section>

          {/* About */}
          <ScrollReveal>
            <section id="o-nas" className="py-20 md:py-28 bg-background-50">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <ScrollReveal animacija="fade-right" className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/c769fd3a46269e39abeba72009a013e5.png"
                        alt="Sveža pica iz Gostilne Rožmarin"
                        className="w-full h-80 md:h-96 object-cover object-center rounded-2xl hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animacija="fade-left" zamik={150} className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                      <i className="ri-restaurant-line"></i>
                      Naša zgodba
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-6">
                      Družinam prijazna gostilna z{' '}
                      <span className="text-primary-600 italic">dolgoletno tradicijo</span>
                    </h2>
                    <p className="text-foreground-600 leading-relaxed mb-4">
                      Gostilna Rožmarin je že vrsto let srce kulinaričnega dogajanja v Markovcih. Smo družinska gostilna, kjer se prepletata tradicija slovenske kuhinje in strast do priprave vrhunskih pic.
                    </p>
                    <p className="text-foreground-600 leading-relaxed mb-4">
                      Naše pice pripravljamo ročno, iz svežih, skrbno izbranih sestavin. Testo vzhaja počasi, pečemo pa jih na visoki temperaturi, da dobijo tisto popolno hrustljavo skorjico.
                    </p>
                    <p className="text-foreground-600 leading-relaxed mb-6">
                      Poleg pic vam ponujamo tudi prijeten ambient, kjer se lahko sprostite ob dobri hrani in pijači.
                    </p>
                    <div className="flex flex-wrap gap-6">
                      {[
                        { icon: 'ri-heart-line', color: 'accent', title: 'Prijazna postrežba', sub: 'Vedno z nasmehom' },
                        { icon: 'ri-time-line', color: 'primary', title: 'Dolgoletna tradicija', sub: 'Preverjena kakovost' },
                        { icon: 'ri-group-line', color: 'secondary', title: 'Družinam prijazno', sub: 'Prostor za vse' },
                      ].map((f) => {
                        const colorMap = {
                          accent: 'bg-accent-100 text-accent-600',
                          primary: 'bg-primary-100 text-primary-600',
                          secondary: 'bg-secondary-100 text-secondary-600',
                        };
                        return (
                        <div key={f.title} className="flex items-center gap-3">
                          <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${colorMap[f.color as keyof typeof colorMap]}`}>
                            <i className={`${f.icon} text-lg`}></i>
                          </div>
                          <div>
                            <span className="block text-sm font-semibold text-foreground-900">{f.title}</span>
                            <span className="text-xs text-foreground-500">{f.sub}</span>
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Menu */}
          <ScrollReveal>
            <section id="menu" className="py-20 md:py-28 bg-background-100">
              <div className="max-w-5xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4">
                      <i className="ri-restaurant-line"></i>
                      Jedilni list
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                      Naša <span className="text-accent-600 italic">ponudba</span>
                    </h2>
                    <p className="text-foreground-500 max-w-xl mx-auto">
                      Bogata izbira pic, pijač in toplih napitkov.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="border-b border-background-200 mb-6 overflow-x-auto">
                  <div className="flex gap-2 min-w-max px-1 py-2">
                    {menuCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                          activeCategory === cat.id
                            ? 'bg-primary-500 text-background-50'
                            : 'bg-background-50 text-foreground-600 hover:bg-background-200 border border-background-200'
                        }`}
                      >
                        <i className={`${cat.ikona} text-base`}></i>
                        {cat.ime}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentItems.map((item, i) => (
                    <ScrollReveal key={item.id} animacija="fade-up" zamik={i * 40} prag={0.05}>
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-background-50 hover:bg-background-50/80 transition-colors border border-transparent hover:border-background-200">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900">
                              {item.ime}
                            </h3>
                          </div>
                          {'kolicina' in item && item.kolicina && (
                            <span className="text-xs text-foreground-400 bg-background-50 px-2 py-0.5 rounded-md border border-background-200">
                              {item.kolicina}
                            </span>
                          )}
                          {'opis' in item && item.opis && (
                            <p className="text-sm text-foreground-500 mt-1.5 leading-relaxed">{item.opis}</p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                {currentItems.length === 0 && (
                  <div className="text-center py-16 text-foreground-400">
                    <i className="ri-inbox-line text-4xl mb-3 block"></i>
                    <p>Ta kategorija je trenutno prazna.</p>
                  </div>
                )}
                <p className="text-xs text-foreground-400 text-center mt-6">
                  Cene so informativne in se lahko spremenijo. Za točne cene nas pokličite na{' '}
                  <a href="tel:+38641753335" className="text-accent-600 font-medium hover:underline">041 753 335</a>
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Terrace */}
          <ScrollReveal>
            <section id="terasa" className="py-20 md:py-28 bg-background-50">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
                  <ScrollReveal animacija="fade-left" className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/45a97b4a2d52f45dc1a999e0638c8ad2.png"
                        alt="Picerija Rožmarin - peka pic pri pečici"
                        className="w-full h-80 md:h-96 object-cover object-center rounded-2xl hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animacija="fade-right" zamik={150} className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold mb-4">
                      <i className="ri-sun-line"></i>
                      Zunanji prostor
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-6">
                      Pokrita{' '}
                      <span className="text-secondary-600 italic">zunanja terasa</span>
                    </h2>
                    <p className="text-foreground-600 leading-relaxed mb-4">
                      Naša pokrita terasa je pravi biser gostilne. Ne glede na vreme lahko uživate v prijetnem ambientu na svežem zraku, zaščiteni pred soncem in dežjem.
                    </p>
                    <p className="text-foreground-600 leading-relaxed mb-4">
                      Idealna je za kosilo z družino, romantično večerjo, pijačo s prijatelji ali praznovanje posebnih dogodkov. Zvečer teraso osvetlijo tople lučke, ki ustvarijo čarobno vzdušje.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {['Kosilo', 'Večerja', 'Pijača', 'Druženja', 'Praznovanja'].map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-background-100 text-foreground-600 text-sm font-medium border border-background-200">
                          <i className="ri-check-line text-primary-500 mr-1"></i>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Gallery */}
          <ScrollReveal>
            <section id="galerija" className="py-20 md:py-28 bg-background-100">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4">
                      <i className="ri-image-line"></i>
                      Galerija
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                      Okusite vzdušje skozi{' '}
                      <span className="text-accent-600 italic">fotografije</span>
                    </h2>
                    <p className="text-foreground-500 max-w-xl mx-auto">
                      Poglejte si utrinke iz naše gostilne.
                    </p>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <ScrollReveal key={image.id} animacija="scale-in" zamik={index * 80} prag={0.05}>
                      <div
                        onClick={() => setSelectedImage(index)}
                        className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-background-50/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <i className="ri-zoom-in-line text-foreground-900 text-lg"></i>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Lightbox */}
              {selectedImage !== null && (
                <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors z-20 cursor-pointer"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                  <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center">
                    <img
                      src={galleryImages[selectedImage].src}
                      alt={galleryImages[selectedImage].alt}
                      className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />
                    <p className="text-background-50/70 text-sm mt-4 text-center max-w-lg px-4">
                      {galleryImages[selectedImage].alt}
                    </p>
                  </div>
                  <button onClick={goToPrev} className="absolute left-3 md:left-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors cursor-pointer">
                    <i className="ri-arrow-left-s-line text-2xl"></i>
                  </button>
                  <button onClick={goToNext} className="absolute right-3 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line text-2xl"></i>
                  </button>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background-50/10 backdrop-blur-sm text-background-50 text-sm">
                    {selectedImage + 1} / {galleryImages.length}
                  </div>
                </div>
              )}
            </section>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-primary-900">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4">
                  Rezervirajte <span className="text-accent-400 italic">mizo</span>
                </h2>
                <p className="text-background-50/70 mb-8 max-w-xl mx-auto">
                  Pokličite nas in rezervirajte mizo za kosilo, večerjo ali praznovanje.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:+38641753335" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-500 text-background-50 font-semibold hover:bg-accent-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
                    <i className="ri-phone-line text-lg"></i>
                    Pokliči 041 753 335
                  </a>
                  <Link to="/kontakt" className="w-full sm:w-auto px-8 py-4 rounded-full bg-background-50/15 backdrop-blur-sm border border-background-50/30 text-background-50 font-semibold hover:bg-background-50/25 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
                    <i className="ri-mail-line text-lg"></i>
                    Pošlji povpraševanje
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
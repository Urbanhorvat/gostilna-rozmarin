import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '@/mocks/menuData';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

const pizzaPhotos = [
  {
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/3ca41cb405835bc31494c4d61e16d3ea.png',
    alt: 'Pica s pršutom — Gostilna Rožmarin',
    label: 'Sveže pripravljeno',
  },
  {
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/711b209f818a5dfc93f5d3b46b4c413e.png',
    alt: 'Pica s hrustljavim prelivom — Gostilna Rožmarin',
    label: 'Ročno narejeno testo',
  },
  {
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/4057626f80dd8bab3ccfe78dc48052cd.png',
    alt: 'Zelenjavna pica — Gostilna Rožmarin',
    label: 'Sveže sestavine',
  },
  {
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/f063b42f544b2b6fa8865513d07cb8f1.png',
    alt: 'Pica s čebulo in hrustljavim prelivom — Gostilna Rožmarin',
    label: 'Iz krušne peči',
  },
  {
    src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/278d48b6b66d0b579c1c5f89b1b9a7be.png',
    alt: 'Družinska pica — Gostilna Rožmarin',
    label: 'Družinske velikosti',
  },
];

export default function Pice() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const currentItems = menuData.vsePice || [];

  const goToPrevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? pizzaPhotos.length - 1 : selectedPhoto - 1);
    }
  };

  const goToNextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === pizzaPhotos.length - 1 ? 0 : selectedPhoto + 1);
    }
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background-50">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/3ca41cb405835bc31494c4d61e16d3ea.png"
                alt="Sveže pečena pica — Gostilna Rožmarin"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 mb-6 animate-[fadeInDown_0.8s_ease-out]">
                <i className="ri-fire-line text-accent-200"></i>
                <span className="text-accent-200 text-sm font-medium">Iz krušne peči</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-background-50 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.15s] [animation-fill-mode:backwards]">
                Naše <span className="text-accent-400 italic">pice</span>
              </h1>
              <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.3s] [animation-fill-mode:backwards]">
                Ročno narejeno testo, sveže sestavine, pečeno na visoki temperaturi. Pica, kot jo pripravljamo že vrsto let.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.45s] [animation-fill-mode:backwards]">
                <a
                  href="tel:+38641753335"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-500 text-background-50 font-semibold hover:bg-accent-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="ri-phone-line text-lg"></i>
                  Naroči pico
                </a>
                <a
                  href="#ponudba"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#ponudba')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-background-50/15 backdrop-blur-sm border border-background-50/30 text-background-50 font-semibold hover:bg-background-50/25 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="ri-restaurant-line text-lg"></i>
                  Poglej ponudbo
                </a>
              </div>
            </div>
          </section>

          {/* Pizza Photo Gallery */}
          <section className="py-16 md:py-24 bg-background-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <ScrollReveal animacija="fade-up">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                    <i className="ri-camera-line"></i>
                    Prave fotografije
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                    Pice v <span className="text-primary-600 italic">slikah</span>
                  </h2>
                  <p className="text-foreground-500 max-w-xl mx-auto">
                    Sveže pripravljene pice iz naše krušne peči. Fotografije so posnete pri nas.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {pizzaPhotos.map((photo, index) => (
                  <ScrollReveal
                    key={index}
                    animacija={index === 0 ? 'scale-in' : 'fade-up'}
                    zamik={index * 100}
                    prag={0.05}
                    className={index === 0 ? 'col-span-2 md:col-span-2 row-span-1 md:row-span-2' : ''}
                  >
                    <div
                      onClick={() => setSelectedPhoto(index)}
                      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/90 text-background-50 text-xs font-medium">
                          <i className="ri-zoom-in-line"></i>
                          {photo.label}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Pizza Menu */}
          <section id="ponudba" className="py-16 md:py-24 bg-background-100">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <ScrollReveal animacija="fade-up">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4">
                    <i className="ri-restaurant-line"></i>
                    Jedilni list
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                    Naša <span className="text-accent-600 italic">ponudba pic</span>
                  </h2>
                  <p className="text-foreground-500 max-w-xl mx-auto">
                    Vse pice so 32 cm, pečene v krušni peči na visoki temperaturi. Družinske pice so 50 cm.
                  </p>
                </div>
              </ScrollReveal>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentItems.map((item, i) => (
                  <ScrollReveal key={item.id} animacija="fade-up" zamik={i * 40} prag={0.05}>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-background-50 hover:bg-background-50/80 transition-colors border border-transparent hover:border-background-200">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900">
                            {item.ime}
                          </h3>
                          <div className="flex items-center gap-2 whitespace-nowrap">
                            {'cena' in item && item.cena && (
                              <span className="text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
                                {item.cena}
                              </span>
                            )}
                          </div>
                        </div>
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
                  <p>Trenutno ni pic na voljo.</p>
                </div>
              )}

              <ScrollReveal animacija="fade-up">
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/jedilni-list"
                    className="px-6 py-3 rounded-full bg-primary-100 text-primary-700 font-medium hover:bg-primary-200 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"
                  >
                    <i className="ri-restaurant-2-line"></i>
                    Celoten jedilni list
                  </Link>
                  <Link
                    to="/gostilna"
                    className="px-6 py-3 rounded-full bg-background-50 text-foreground-600 font-medium hover:bg-background-200 border border-background-200 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2"
                  >
                    <i className="ri-store-2-line"></i>
                    O gostilni
                  </Link>
                </div>
              </ScrollReveal>


            </div>
          </section>

          {/* Features / Why our pizzas */}
          <section className="py-16 md:py-24 bg-background-50">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <ScrollReveal animacija="fade-up">
                <div className="text-center mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-900 mb-4">
                    Zakaj naše <span className="text-primary-600 italic">pice</span>?
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: 'ri-hand-heart-line', title: 'Ročno narejeno testo', desc: 'Testo vzhaja počasi in ga razvaljamo ročno vsak dan.' },
                  { icon: 'ri-leaf-line', title: 'Sveže sestavine', desc: 'Vsak dan sveže zelenjave, kakovostnega sira in prvovrstnih mesnin.' },
                  { icon: 'ri-fire-line', title: 'Krušna peč', desc: 'Pečemo na visoki temperaturi za hrustljavo skorjico in sočnot celoto.' },
                  { icon: 'ri-group-line', title: 'Družinske velikosti', desc: 'Poleg standardnih 32 cm pic ponujamo tudi 50 cm družinske pice.' },
                ].map((f, i) => (
                  <ScrollReveal key={f.title} animacija="fade-up" zamik={i * 100} prag={0.05}>
                    <div className="text-center p-6 rounded-2xl bg-background-100 border border-background-200/70 hover:border-primary-300/50 transition-colors">
                      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                        <i className={`${f.icon} text-2xl`}></i>
                      </div>
                      <h3 className="font-heading text-base font-semibold text-foreground-900 mb-2">{f.title}</h3>
                      <p className="text-sm text-foreground-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-primary-900">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4">
                  Lakota? <span className="text-accent-400 italic">Naroči pico</span>
                </h2>
                <p className="text-background-50/70 mb-8 max-w-xl mx-auto">
                  Pokličite nas in naročite pico za s seboj ali rezervirajte mizo v naši gostilni.
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

        {/* Lightbox */}
        {selectedPhoto !== null && (
          <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors z-20 cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center">
              <img
                src={pizzaPhotos[selectedPhoto].src}
                alt={pizzaPhotos[selectedPhoto].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-background-50/70 text-sm mt-4 text-center max-w-lg px-4">
                {pizzaPhotos[selectedPhoto].alt}
              </p>
            </div>
            <button onClick={goToPrevPhoto} className="absolute left-3 md:left-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors cursor-pointer">
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>
            <button onClick={goToNextPhoto} className="absolute right-3 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors cursor-pointer">
              <i className="ri-arrow-right-s-line text-2xl"></i>
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background-50/10 backdrop-blur-sm text-background-50 text-sm">
              {selectedPhoto + 1} / {pizzaPhotos.length}
            </div>
          </div>
        )}

        <Footer />
        <MobileCallButton />
      </div>
    </PageTransition>
  );
}
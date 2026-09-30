import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuData, menuCategories } from '@/mocks/menuData';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

export default function JedilniList() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeCategory, setActiveCategory] = useState('vsePice');
  const currentItems = menuData[activeCategory as keyof typeof menuData] || [];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background-50">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/c769fd3a46269e39abeba72009a013e5.png"
                alt="Gostilna Rožmarin - sveže pečena pica"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 mb-6 animate-[fadeInDown_0.8s_ease-out]">
                <i className="ri-restaurant-line text-accent-200"></i>
                <span className="text-accent-200 text-sm font-medium">Sveže pripravljeno</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-background-50 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.15s] [animation-fill-mode:backwards]">
                Jedilni <span className="text-accent-400 italic">list</span>
              </h1>
              <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.3s] [animation-fill-mode:backwards]">
                Bogata izbira pic iz krušne peči, pijač in toplih napitkov.
              </p>
            </div>
          </section>

          {/* Menu */}
          <section className="py-16 md:py-24 bg-background-50">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              {/* Category Tabs - sticky */}
              <div className="border-b border-background-200 mb-8 overflow-x-auto sticky top-[72px] md:top-[80px] z-30 bg-background-50/95 backdrop-blur-sm py-3">
                <div className="flex gap-2 min-w-max">
                  {menuCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                        activeCategory === cat.id
                          ? 'bg-primary-500 text-background-50'
                          : 'bg-background-100 text-foreground-600 hover:bg-background-200 border border-background-200'
                      }`}
                    >
                      <i className={`${cat.ikona} text-base`}></i>
                      {cat.ime}
                    </button>
                  ))}
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentItems.map((item, i) => (
                  <ScrollReveal key={item.id} animacija="fade-up" zamik={i * 30} prag={0.05}>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-background-100 hover:bg-background-200/70 transition-colors border border-background-200/70">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-900">
                            {item.ime}
                          </h3>
                          <div className="flex items-center gap-2 whitespace-nowrap">
                            {'kolicina' in item && item.kolicina && (
                              <span className="text-xs text-foreground-400 bg-background-50 px-2 py-0.5 rounded-md border border-background-200">
                                {item.kolicina}
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
                <div className="text-center py-20 text-foreground-400">
                  <i className="ri-inbox-line text-5xl mb-4 block"></i>
                  <p className="text-lg">Ta kategorija je trenutno prazna.</p>
                </div>
              )}


            </div>
          </section>

          {/* CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-primary-900">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4">
                  Ste se odločili?{' '}
                  <span className="text-accent-400 italic">Rezervirajte mizo</span>
                </h2>
                <p className="text-background-50/70 mb-8 max-w-xl mx-auto">
                  Pokličite nas in si zagotovite prostor za kosilo, večerjo ali praznovanje.
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
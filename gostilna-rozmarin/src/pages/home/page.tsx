import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroScale, setHeroScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        setHeroScale(1 + scrollY * 0.00025);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background-50">
        <Navbar />
        <main>
          {/* Hero */}
          <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/4bf46d5618625e37335596135857ff2b.png"
                alt="Gostilna Rožmarin & Apartmaji Babi - večerni pogled na objekt"
                className="w-full h-full object-cover object-center"
                style={{ transform: `scale(${heroScale})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 mb-6 animate-[fadeInDown_0.8s_ease-out]">
                  <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
                  <span className="text-accent-200 text-sm font-medium">Odprto vsak dan</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-background-50 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.15s] [animation-fill-mode:backwards]">
                  Gostilna &amp;{' '}
                  <span className="text-accent-400 italic">Apartmaji Babi</span>
                </h1>
                <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.3s] [animation-fill-mode:backwards]">
                  Domači okusi, prijeten oddih in trenutki za sprostitev v srcu slovenskih goric.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.45s] [animation-fill-mode:backwards]">
                  <Link
                    to="/gostilna"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-500 text-background-50 font-semibold text-base hover:bg-accent-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
                    <i className="ri-restaurant-line text-lg"></i>
                    Obiščite gostilno
                  </Link>
                  <Link
                    to="/apartmaji"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-background-50/15 backdrop-blur-sm border border-background-50/30 text-background-50 font-semibold text-base hover:bg-background-50/25 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
                    <i className="ri-hotel-line text-lg"></i>
                    Obiščite apartmaje
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-background-50/50 text-xs font-medium">Odkrij več</span>
              <i className="ri-arrow-down-s-line text-background-50/50 text-xl"></i>
            </div>
          </section>

          {/* Two-column preview */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-50">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                      <i className="ri-home-heart-line"></i>
                      Naša ponudba
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                      Dve ponudbi, <span className="text-primary-600 italic">en dom</span>
                    </h2>
                    <p className="text-foreground-500 max-w-xl mx-auto">
                      V Markovcih pri Ptuju vas čakata domača gostilna in prijetni apartmaji za popoln dan ali vikend.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Gostilna card */}
                  <ScrollReveal animacija="fade-right" zamik={100}>
                    <div className="group relative overflow-hidden rounded-2xl bg-background-100 border border-background-200/70 hover:border-primary-200 transition-all duration-500">
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                          src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/4bf46d5618625e37335596135857ff2b.png"
                          alt="Gostilna Rožmarin &amp; Apartmaji Babi - večerni pogled na objekt"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-accent-500 text-background-50 text-xs font-semibold">
                            Gostilna
                          </span>
                        </div>
                      </div>
                      <div className="p-6 md:p-8">
                        <h3 className="font-heading text-2xl font-bold text-foreground-900 mb-3">Odkrijte gostilno</h3>
                        <p className="text-foreground-600 leading-relaxed mb-6">
                          Bogato obložene pice ter prijeten domač ambient. Pokrita terasa, prijazna postrežba in dolgoletna tradicija.
                        </p>
                        <div className="flex items-center gap-3">
                          <Link
                            to="/gostilna"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-500 text-background-50 font-semibold hover:bg-accent-600 active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap"
                          >
                            <i className="ri-restaurant-line"></i>
                            Obiščite gostilno
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Apartmaji card */}
                  <ScrollReveal animacija="fade-left" zamik={200}>
                    <div className="group relative overflow-hidden rounded-2xl bg-background-100 border border-background-200/70 hover:border-primary-200 transition-all duration-500">
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                          src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/af1fa38fd71168577a661a6aaaab376a.png"
                          alt="Apartmaji Babi - terasa"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary-500 text-background-50 text-xs font-semibold">
                            Nastanitev
                          </span>
                        </div>
                      </div>
                      <div className="p-6 md:p-8">
                        <h3 className="font-heading text-2xl font-bold text-foreground-900 mb-3">Odkrijte apartmaje</h3>
                        <p className="text-foreground-600 leading-relaxed mb-6">
                          Prijetni apartmaji v rustikalnem slogu z wellnessom, teraso in odlično lokacijo za raziskovanje Ptuja in okolice.
                        </p>
                        <div className="flex items-center gap-3">
                          <Link
                            to="/apartmaji"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-background-50 font-semibold hover:bg-primary-600 active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap"
                          >
                            <i className="ri-hotel-line"></i>
                            Obiščite apartmaje
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal>
            <section className="py-16 md:py-20 bg-background-100">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-10">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-3">
                      Zakaj izbrati <span className="text-accent-600 italic">Rožmarin</span>?
                    </h2>
                    <p className="text-foreground-500">Vse, kar potrebujete za popoln dan ali vikend.</p>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { icon: 'ri-restaurant-line', title: 'Domača hrana', desc: 'Pice iz krušne peči' },
                    { icon: 'ri-hotel-line', title: 'Udobni apartmaji', desc: 'Rustikalni ambient z vso udobjem' },
                    { icon: 'ri-water-flash-line', title: 'Wellness', desc: 'Jacuzzi, savna in prostor za počitek' },
                    { icon: 'ri-map-pin-line', title: 'Odlična lokacija', desc: 'V bližini Ptuja in Ptujskega jezera' },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} animacija="scale-in" zamik={i * 100}>
                      <div className="p-5 rounded-2xl bg-background-50 border border-background-200/70 text-center hover:border-primary-200 transition-all duration-300 group cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 mx-auto mb-3 group-hover:bg-primary-200 group-hover:text-primary-700 transition-colors duration-300">
                          <i className={`${item.icon} text-xl`}></i>
                        </div>
                        <h4 className="font-heading text-base font-semibold text-foreground-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-foreground-500">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Contact CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-primary-900">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4">
                  Rezervirajte svoj <span className="text-accent-400 italic">obisk</span>
                </h2>
                <p className="text-background-50/70 mb-8 max-w-xl mx-auto">
                  Pokličite nas ali pošljite sporočilo. Z veseljem vam rezerviramo mizo ali apartma.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+38641753335"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-500 text-background-50 font-semibold hover:bg-accent-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
                    <i className="ri-phone-line text-lg"></i>
                    Pokliči nas
                  </a>
                  <Link
                    to="/kontakt"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-background-50/15 backdrop-blur-sm border border-background-50/30 text-background-50 font-semibold hover:bg-background-50/25 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
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
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

export default function Cenik() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background-50">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/16957c74e03aad7bf765b0edb84a33f8.png"
                alt="Apartmaji Babi - spalnica z lesenimi tramovi"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 mb-6 animate-[fadeInDown_0.8s_ease-out]">
                <i className="ri-price-tag-3-line text-primary-200"></i>
                <span className="text-primary-200 text-sm font-medium">Transparentne cene</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-background-50 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.15s] [animation-fill-mode:backwards]">
                <span className="text-primary-400 italic">Cenik</span>
              </h1>
              <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.3s] [animation-fill-mode:backwards]">
                Kontaktirajte nas za personalizirano ponudbo apartmajev, wellnessa in dodatnih storitev.
              </p>
            </div>
          </section>

          {/* Apartmaji */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-50">
              <div className="max-w-4xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                      <i className="ri-hotel-line"></i>
                      Apartmaji
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                      Ponudba <span className="text-primary-600 italic">apartmajev</span>
                    </h2>
                    <p className="text-foreground-500 max-w-xl mx-auto">
                      Cene se razlikujejo glede na sezono, dolžino bivanja in število oseb. Za točen izračun nas kontaktirajte.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: 'ri-moon-line', color: 'primary', title: 'Nočitev', desc: 'Cena za eno noč v apartmaju za 2 osebi', items: ['Vključuje brisače in posteljnino', 'Dostop do terase', 'Brezplačen WiFi in parkirišče'] },
                    { icon: 'ri-calendar-2-line', color: 'secondary', title: 'Vikend paket', desc: '2 nočitvi za 2 osebi (petek–nedelja)', items: ['Vse iz nočitve', 'Pozna odjava v nedeljo', 'Dobrodošlica ob prihodu'] },
                  ].map((card, i) => {
                    const colorMap = {
                      primary: { border: 'hover:border-primary-300', iconBg: 'bg-primary-100 text-primary-600', btnColor: 'bg-primary-500 hover:bg-primary-600', checkColor: 'text-primary-500' },
                      secondary: { border: 'hover:border-secondary-300', iconBg: 'bg-secondary-100 text-secondary-600', btnColor: 'bg-secondary-500 hover:bg-secondary-600', checkColor: 'text-secondary-500' },
                    };
                    const cm = colorMap[card.color as keyof typeof colorMap];
                    return (
                    <ScrollReveal key={card.title} animacija={i === 0 ? 'fade-right' : 'fade-left'} zamik={100}>
                      <div className={`p-6 md:p-8 rounded-2xl bg-background-100 border border-background-200/70 ${cm.border} transition-all duration-300 h-full flex flex-col`}>
                        <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${cm.iconBg} mb-4`}>
                          <i className={`${card.icon} text-2xl`}></i>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground-900 mb-2">{card.title}</h3>
                        <p className="text-foreground-500 text-sm mb-4">{card.desc}</p>
                        <ul className="space-y-2 text-sm text-foreground-600 flex-1">
                          {card.items.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <i className={`ri-check-line ${cm.checkColor}`}></i>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to="/kontakt"
                          className={`mt-6 px-6 py-3 rounded-full ${cm.btnColor} text-background-50 font-medium text-center whitespace-nowrap cursor-pointer active:scale-95 transition-all duration-300 flex items-center justify-center gap-2`}
                        >
                          <i className="ri-mail-line"></i>
                          Povprašajte
                        </Link>
                      </div>
                    </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Wellness */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-100">
              <div className="max-w-4xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold mb-4">
                      <i className="ri-water-flash-line"></i>
                      Wellness
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                      Wellness <span className="text-secondary-600 italic">doživetje</span>
                    </h2>
                    <p className="text-foreground-500 max-w-xl mx-auto">
                      Wellness je na voljo ob rezervaciji apartmaja. Doplačilo se obračuna glede na izbrano doživetje in trajanje.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Osnovni wellness', desc: 'Dostop do jacuzzija in savne (1 ura)' },
                    { title: 'Romantični paket', desc: 'Jacuzzi, savna, penina in prigrizek (2 uri)' },
                    { title: 'Popolna sprostitev', desc: 'Neomejen wellness ves dan, prigrizki in pijača' },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} animacija="scale-in" zamik={i * 100}>
                      <div className="p-6 rounded-2xl bg-background-50 border border-background-200/70 text-center hover:border-secondary-200 transition-all duration-300 cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary-100 text-secondary-600 mx-auto mb-3">
                          <i className="ri-sparkling-line text-xl"></i>
                        </div>
                        <h4 className="font-heading text-base font-semibold text-foreground-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-foreground-500">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Dodatne storitve */}
          <ScrollReveal>
            <section className="py-16 md:py-20 bg-background-50">
              <div className="max-w-4xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4">
                      <i className="ri-add-circle-line"></i>
                      Dodatno
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-3">
                      Dodatne <span className="text-accent-600 italic">storitve</span>
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: 'ri-user-add-line', title: 'Dodatna oseba', cena: 'Po dogovoru' },
                    { icon: 'ri-sun-line', title: 'Uporaba terase z žarom', cena: 'Po dogovoru' },
                    { icon: 'ri-parking-box-line', title: 'Parkirišče', cena: 'Brezplačno' },
                    { icon: 'ri-wifi-line', title: 'WiFi', cena: 'Brezplačno' },
                    { icon: 'ri-emotion-happy-line', title: 'Otroška posteljica', cena: 'Po dogovoru' },
                    { icon: 'ri-guide-line', title: 'Hišni ljubljenčki', cena: 'Po dogovoru' },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} animacija="fade-up" zamik={i * 60}>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-background-100 border border-background-200/70 hover:border-accent-200 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 text-accent-600">
                            <i className={`${item.icon}`}></i>
                          </div>
                          <span className="text-sm font-medium text-foreground-800">{item.title}</span>
                        </div>
                        <span className="text-sm font-semibold text-accent-600">{item.cena}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Disclaimer */}
          <ScrollReveal animacija="fade-up">
            <section className="pb-16 md:pb-20 bg-background-50">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <div className="p-6 rounded-2xl bg-background-100 border border-background-200/70">
                  <i className="ri-information-line text-2xl text-foreground-400 mb-3 block"></i>
                  <p className="text-sm text-foreground-500 leading-relaxed">
                    Za točen izračun in aktualno ponudbo nas pokličite na{' '}
                    <a href="tel:+38641753335" className="text-accent-600 font-medium hover:underline cursor-pointer">041 753 335</a>{' '}
                    ali pošljite povpraševanje preko kontaktnega obrazca.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-primary-900">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4">
                  Pripravljeni za <span className="text-accent-400 italic">oddih</span>?
                </h2>
                <p className="text-background-50/70 mb-8 max-w-xl mx-auto">
                  Kontaktirajte nas za personalizirano ponudbo in rezervacijo apartmaja.
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
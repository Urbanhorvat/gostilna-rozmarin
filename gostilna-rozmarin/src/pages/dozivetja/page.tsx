import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

export default function Dozivetja() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background-50">
        <Navbar />
        <main>
          {/* Header */}
          <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary-900">
            <div className="absolute inset-0 opacity-30">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/c382a7dc2abc1521b6bf2f03b76a026b.png"
                alt="Kurent - tradicionalna ptujska maska"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/90 to-primary-900"></div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 mb-6 animate-[fadeInDown_0.8s_ease-out]">
                <i className="ri-compass-line text-accent-200"></i>
                <span className="text-accent-200 text-sm font-medium">Raziskujte</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-background-50 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.15s] [animation-fill-mode:backwards]">
                Doživetja &amp; <span className="text-accent-400 italic">Okolica</span>
              </h1>
              <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.3s] [animation-fill-mode:backwards]">
                Apartmaji Babi so odlično izhodišče za raziskovanje Ptuja, Ptujskega jezera, Donačke gore in drugih znamenitosti.
              </p>
            </div>
          </section>

          {/* Ptuj Lake */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-50">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <ScrollReveal animacija="fade-right" className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl bg-background-100 border border-background-200/70 p-8 md:p-10">
                      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-6">
                        <i className="ri-water-flash-line text-2xl"></i>
                      </div>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
                        Ptujsko <span className="text-primary-600 italic">jezero</span>
                      </h2>
                      <p className="text-foreground-600 leading-relaxed mb-4">
                        Nahajamo se v bližini Ptujskega jezera, kjer lahko uživate v sprehodih, kolesarjenju, naravi in čudovitih razgledih. Jezero je priljubljena destinacija za rekreacijo, ribolov in sprostitev v naravi.
                      </p>
                      <p className="text-foreground-600 leading-relaxed">
                        Ob jezeru najdete urejeni sprehajalni in kolesarski poti, ki so primerne za vse generacije. Številna počivališča in razgledne točke vam omogočajo, da se ustavite in uživate v pokrajini.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {['Sprehodi', 'Kolesarjenje', 'Narava', 'Razgledi', 'Rekreacija'].map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium border border-primary-200">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animacija="fade-left" zamik={150} className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/af1fa38fd71168577a661a6aaaab376a.png" alt="Terasa Apartmajev Babi - prijetno okolje" className="w-full h-80 md:h-96 object-cover rounded-2xl" />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Donačka Gora */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-100">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
                  <ScrollReveal animacija="fade-left" className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl bg-background-50 border border-background-200/70 p-8 md:p-10">
                      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent-100 text-accent-600 mb-6">
                        <i className="ri-landscape-line text-2xl"></i>
                      </div>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
                        Donačka <span className="text-accent-600 italic">gora</span>
                      </h2>
                      <p className="text-foreground-600 leading-relaxed mb-4">
                        Za ljubitelje pohodništva in narave je zanimiv tudi izlet na Donačko goro, eno izmed priljubljenih pohodniških destinacij tega dela Slovenije.
                      </p>
                      <p className="text-foreground-600 leading-relaxed">
                        Pot na vrh je primerna za različne stopnje pripravljenosti, na vrhu pa vas čakajo čudoviti razgledi na Haloze, Dravsko polje in okoliške vasi.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {['Pohodništvo', 'Narava', 'Razgledi', 'Izleti', 'Aktivnosti'].map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-medium border border-accent-200">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animacija="fade-right" zamik={150} className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/16957c74e03aad7bf765b0edb84a33f8.png" alt="Spalnica Apartmajev Babi - pogled na okolico" className="w-full h-80 md:h-96 object-cover rounded-2xl" />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Ptuj */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-50">
              <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <ScrollReveal animacija="fade-up">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold mb-4">
                      <i className="ri-building-line"></i>
                      Mesto
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-6">
                      Ptuj – najstarejše mesto v <span className="text-secondary-600 italic">Sloveniji</span>
                    </h2>
                    <p className="text-foreground-600 leading-relaxed text-base md:text-lg mb-8">
                      Ptuj, eno najprepoznavnejših zgodovinskih mest v Sloveniji, je v bližini in ponuja številne kulturne, zgodovinske in gastronomske doživetja.
                    </p>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: 'ri-building-3-line', title: 'Ptujski grad' },
                    { icon: 'ri-walk-line', title: 'Mestna arhitektura' },
                    { icon: 'ri-music-2-line', title: 'Kurentovanje' },
                    { icon: 'ri-goblet-line', title: 'Vinska klet' },
                    { icon: 'ri-restaurant-line', title: 'Lokalna kuhinja' },
                    { icon: 'ri-ship-line', title: 'Mestna plaža' },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} animacija="scale-in" zamik={i * 60}>
                      <div className="p-4 rounded-xl bg-background-100 border border-background-200/70 text-center hover:border-secondary-200 transition-all duration-300 cursor-default">
                        <i className={`${item.icon} text-xl text-secondary-500 mb-2 block`}></i>
                        <span className="text-sm font-medium text-foreground-700">{item.title}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                <ScrollReveal animacija="fade-up" zamik={150}>
                  <div className="relative overflow-hidden rounded-2xl max-w-xl mx-auto">
                    <img src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/c382a7dc2abc1521b6bf2f03b76a026b.png" alt="Kurent - tradicionalna ptujska maska" className="w-full h-64 md:h-80 object-cover rounded-2xl" />
                  </div>
                </ScrollReveal>
                <p className="text-sm text-foreground-400 mt-4">
                  Kurent – maska s Ptujskega pustnega rajanja, vpisana na UNESCO seznam.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Terasa */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-24 bg-background-100">
              <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-4">
                  Terasa Apartmajev <span className="text-primary-600 italic">Babi</span>
                </h2>
                <p className="text-foreground-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Za prijetne trenutke na svežem zraku je na voljo tudi prostorna terasa – idealna za jutranjo kavo, sproščeno druženje ali miren zaključek dneva.
                </p>
                <div className="relative overflow-hidden rounded-2xl max-w-2xl mx-auto">
                  <img src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/af1fa38fd71168577a661a6aaaab376a.png" alt="Terasa Apartmajev Babi - večer na prostem" className="w-full h-64 md:h-80 object-cover rounded-2xl" />
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Activities summary */}
          <ScrollReveal>
            <section className="py-20 md:py-24 bg-primary-900">
              <div className="max-w-5xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-10">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-background-50 mb-4">
                      Aktivnosti v <span className="text-accent-400 italic">bližini</span>
                    </h2>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: 'ri-bike-line', title: 'Kolesarjenje', desc: 'Kolesarske poti okoli Ptujskega jezera' },
                    { icon: 'ri-walk-line', title: 'Pohodništvo', desc: 'Donačka gora in Halozemske poti' },
                    { icon: 'ri-sailboat-line', title: 'Vodni športi', desc: 'Jezero in reka Drava' },
                    { icon: 'ri-camera-line', title: 'Fotografija', desc: 'Čudoviti razgledi in pokrajina' },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} animacija="scale-in" zamik={i * 100}>
                      <div className="p-5 rounded-2xl bg-background-50/10 border border-background-50/10 text-center hover:bg-background-50/[0.15] transition-colors duration-300 cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-500/20 text-accent-400 mx-auto mb-3">
                          <i className={`${item.icon} text-xl`}></i>
                        </div>
                        <h4 className="font-heading text-base font-semibold text-background-50 mb-1">{item.title}</h4>
                        <p className="text-sm text-background-50/60">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-background-50">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
                  Načrtujte svoj <span className="text-accent-600 italic">oddih</span>
                </h2>
                <p className="text-foreground-600 mb-8 max-w-xl mx-auto">
                  Apartmaji Babi so odlična izhodiščna točka za raziskovanje vsega, kar ponuja Ptuj in njegova okolica.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/apartmaji" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-500 text-background-50 font-semibold hover:bg-accent-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
                    <i className="ri-hotel-line text-lg"></i>
                    Odkrij apartmaje
                  </Link>
                  <Link to="/kontakt" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-500 text-background-50 font-semibold hover:bg-primary-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
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
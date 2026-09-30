import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

export default function Wellness() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background-50">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/548dada3efc1eabbddff4b93eef497b5.png"
                alt="Wellness Apartmajev Babi - jacuzzi in savna"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-500/20 backdrop-blur-sm border border-secondary-500/30 mb-6 animate-[fadeInDown_0.8s_ease-out]">
                <i className="ri-water-flash-line text-secondary-200"></i>
                <span className="text-secondary-200 text-sm font-medium">Sprostitev</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-background-50 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.15s] [animation-fill-mode:backwards]">
                Wellness <span className="text-secondary-400 italic">Babi</span>
              </h1>
              <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.3s] [animation-fill-mode:backwards]">
                Čas samo zase. V prijetnem zasebnem wellness ambientu se lahko umirite, sprostite in uživate v trenutkih brez vsakdanjega hitenja.
              </p>
              <div className="animate-[fadeInUp_0.8s_ease-out_0.45s] [animation-fill-mode:backwards]">
                <a
                  href="tel:+38641753335"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-500 text-background-50 font-semibold hover:bg-accent-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-calendar-check-line text-lg"></i>
                  Rezerviraj bivanje
                </a>
              </div>
            </div>
          </section>

          {/* Description */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-50">
              <div className="max-w-4xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold mb-4">
                      <i className="ri-sparkling-line"></i>
                      Sprostitev
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-8">
                      Trenutki <span className="text-secondary-600 italic">miru in topline</span>
                    </h2>
                    <div className="space-y-6 text-foreground-600 leading-relaxed text-base md:text-lg">
                      <p>Čas samo zase. V prijetnem zasebnem wellness ambientu se lahko umirite, sprostite in uživate v trenutkih brez vsakdanjega hitenja.</p>
                      <p>Wellness prostor je zasnovan v rustikalnem slogu z leseno notranjostjo, ki ustvarja topel in domač občutek. Jacuzzi, savna in prostor za počitek vam ponujajo popolno sprostitev po dnevu raziskovanja okolice.</p>
                      <p>Ne glede na to, ali prihajate po napornem dnevu na izletu ali preprosto želite uživati v miru, je wellness prostor namenjen vašemu počitku in regeneraciji.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal>
            <section className="py-16 md:py-20 bg-background-100">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-10">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-3">
                      Kaj ponuja <span className="text-secondary-600 italic">wellness</span>?
                    </h2>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: 'ri-water-flash-line', title: 'Jacuzzi', desc: 'Prijetna masažna kad za sprostitev mišic in umiritev misli.' },
                    { icon: 'ri-fire-line', title: 'Savna', desc: 'Topla savna za razstrupljanje in izboljšanje počutja.' },
                    { icon: 'ri-armchair-line', title: 'Prostor za počitek', desc: 'Udoben prostor za sproščeno poležavanje po wellnessu.' },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} animacija="scale-in" zamik={i * 150}>
                      <div className="p-6 rounded-2xl bg-background-50 border border-background-200/70 text-center hover:border-secondary-200 transition-all duration-300 group cursor-default">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary-100 text-secondary-600 mx-auto mb-4 group-hover:bg-secondary-200 group-hover:text-secondary-700 transition-colors duration-300">
                          <i className={`${item.icon} text-2xl`}></i>
                        </div>
                        <h4 className="font-heading text-lg font-semibold text-foreground-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-foreground-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Photo */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-24 bg-background-50">
              <div className="max-w-4xl mx-auto px-4 md:px-6">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/548dada3efc1eabbddff4b93eef497b5.png"
                    alt="Wellness Apartmajev Babi - lesen prostor z jacuzzijem in savno"
                    className="w-full h-80 md:h-[500px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-center text-sm text-foreground-400 mt-4">
                  Prijeten wellness prostor z leseno notranjostjo, jacuzzijem in savno.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-primary-900">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4">
                  Rezervirajte <span className="text-accent-400 italic">wellness bivanje</span>
                </h2>
                <p className="text-background-50/70 mb-8 max-w-xl mx-auto">
                  Uživajte v popolni sprostitvi – rezervirajte apartma z wellnessom danes.
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
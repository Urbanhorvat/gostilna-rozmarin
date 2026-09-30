import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

const workingHours = [
  { dan: 'Ponedeljek', ure: '10:00 — 22:00' },
  { dan: 'Torek', ure: '10:00 — 22:00' },
  { dan: 'Sreda', ure: '10:00 — 22:00' },
  { dan: 'Četrtek', ure: '10:00 — 22:00' },
  { dan: 'Petek', ure: '10:00 — 23:00' },
  { dan: 'Sobota', ure: '10:00 — 23:00' },
  { dan: 'Nedelja', ure: '12:00 — 21:00' },
];

const formUrl = 'https://readdy.ai/api/form/d9i78q4oq4dpg2lrn8sg';

export default function Kontakt() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background-50">
        <Navbar />
        <main>
          {/* Header */}
          <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary-900">
            <div className="absolute inset-0">
              <img
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/3da97481e91e7d23148dee790e23750e.png"
                alt="Gostilna Rožmarin & Apartmaji Babi"
                className="w-full h-full object-cover object-center opacity-30"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/80 to-primary-900"></div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20 text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-background-50 mb-4 leading-tight">
                Kontakt &amp; <span className="text-accent-400 italic">Rezervacije</span>
              </h1>
              <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto">
                Pokličite, pišite ali rezervirajte – z veseljem vam pomagamo pri načrtovanju obiska.
              </p>
            </div>
          </section>

          {/* Contact cards */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-50">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold mb-4">
                      <i className="ri-mail-line"></i>
                      Kontakt
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
                      Kje smo in kako nas <span className="text-secondary-600 italic">kontaktirate</span>
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: 'ri-map-pin-line', color: 'primary', title: 'Naslov', content: <>Markovci 28<br />2281 Markovci<br />Slovenija</> },
                    { icon: 'ri-phone-line', color: 'accent', title: 'Telefon', content: <a href="tel:+38641753335" className="text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors">041 753 335</a> },
                    { icon: 'ri-mail-line', color: 'secondary', title: 'E-pošta', content: <a href="mailto:rozmariniva@gmail.com" className="text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors break-all">rozmariniva@gmail.com</a> },
                  ].map((card, i) => {
                    const colorMap = {
                      primary: 'bg-primary-100 text-primary-600',
                      accent: 'bg-accent-100 text-accent-600',
                      secondary: 'bg-secondary-100 text-secondary-600',
                    };
                    return (
                    <ScrollReveal key={card.title} animacija="fade-up" zamik={i * 100}>
                      <div className="p-6 rounded-2xl bg-background-100 border border-background-200/70 text-center hover:border-background-300 transition-all duration-300 cursor-default">
                        <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${colorMap[card.color as keyof typeof colorMap]} mx-auto mb-4`}>
                          <i className={`${card.icon} text-2xl`}></i>
                        </div>
                        <h4 className="font-heading text-lg font-semibold text-foreground-900 mb-2">{card.title}</h4>
                        <div className="text-foreground-600 text-sm">{card.content}</div>
                      </div>
                    </ScrollReveal>
                    );
                  })}
                </div>

                {/* Reservation CTAs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { icon: 'ri-hotel-line', color: 'accent', title: 'Rezerviraj apartma', desc: 'Z veseljem vam rezerviramo apartma za vaš oddih v Apartmajih Babi.' },
                    { icon: 'ri-restaurant-line', color: 'primary', title: 'Rezerviraj mizo', desc: 'Pokličite nas in rezervirajte mizo za kosilo, večerjo ali praznovanje.' },
                  ].map((card, i) => {
                    const colorMap = {
                      accent: { iconBg: 'bg-accent-500/20 text-accent-400', btn: 'bg-accent-500 hover:bg-accent-600' },
                      primary: { iconBg: 'bg-primary-500/20 text-primary-400', btn: 'bg-primary-500 hover:bg-primary-600' },
                    };
                    const cm = colorMap[card.color as keyof typeof colorMap];
                    return (
                    <ScrollReveal key={card.title} animacija="scale-in" zamik={i * 150}>
                      <div className="p-8 rounded-2xl bg-primary-900 text-center">
                        <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${cm.iconBg} mx-auto mb-4`}>
                          <i className={`${card.icon} text-2xl`}></i>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-background-50 mb-2">{card.title}</h3>
                        <p className="text-background-50/70 text-sm mb-6">{card.desc}</p>
                        <a href="tel:+38641753335" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${cm.btn} text-background-50 font-semibold active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap`}>
                          <i className="ri-phone-line"></i>
                          Pokliči
                        </a>
                      </div>
                    </ScrollReveal>
                    );
                  })}
                </div>

                {/* Map + Hours */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <ScrollReveal animacija="fade-right" className="lg:col-span-2">
                    <div>
                      <div className="rounded-2xl overflow-hidden border border-background-200 h-64 md:h-80">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.123456789!2d15.9333!3d46.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDIzJzAwLjAiTiAxNcKwNTYnMDAuMCJF!5e0!3m2!1ssl!2ssi!4v1234567890"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Gostilna Rožmarin & Apartmaji Babi - lokacija"
                        ></iframe>
                      </div>
                      <div className="mt-4 text-center">
                        <a href="https://www.google.com/maps/dir//Markovci+28,+2281+Markovci" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-background-50 font-semibold hover:bg-primary-600 active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap">
                          <i className="ri-navigation-line"></i>
                          Navodila za pot
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animacija="fade-left" zamik={150}>
                    <div className="p-6 rounded-2xl bg-background-100 border border-background-200/70">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                          <i className="ri-time-line text-lg"></i>
                        </div>
                        <h4 className="font-heading text-lg font-semibold text-foreground-900">Delovni čas</h4>
                      </div>
                      <div className="space-y-0">
                        {workingHours.map((wh) => (
                          <div key={wh.dan} className="flex items-center justify-between py-2.5 border-b border-background-200 last:border-b-0">
                            <span className="text-sm font-medium text-foreground-700">{wh.dan}</span>
                            <span className="text-sm font-semibold text-foreground-900">{wh.ure}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-foreground-400 mt-4 text-center">
                        Delovni čas se lahko spremeni — za točne informacije pokličite.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-background-100">
              <div className="max-w-2xl mx-auto px-4 md:px-6">
                <div className="p-6 md:p-8 rounded-2xl bg-background-50 border border-background-200/70">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-900 mb-2 text-center">
                    Pošljite nam sporočilo
                  </h3>
                  <p className="text-sm text-foreground-500 text-center mb-6">
                    Imate vprašanje ali želite rezervirati? Pišite nam!
                  </p>

                  {formStatus === 'success' && (
                    <div className="mb-6 p-4 rounded-xl bg-primary-100 text-primary-700 text-center text-sm">
                      <i className="ri-check-line mr-2"></i>
                      Hvala! Vaše sporočilo je bilo poslano. Odgovorili vam bomo v najkrajšem možnem času.
                    </div>
                  )}
                  {formStatus === 'error' && formError && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 text-center text-sm">
                      <i className="ri-error-warning-line mr-2"></i>
                      {formError}
                    </div>
                  )}

                  <form
                    data-readdy-form
                    action={formUrl}
                    method="POST"
                    encType="application/x-www-form-urlencoded"
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget as HTMLFormElement;
                      const honeypot = (form.querySelector('[name="phone_alt"]') as HTMLInputElement);
                      if (honeypot && honeypot.value.trim() !== '') {
                        setFormStatus('success');
                        form.reset();
                        return;
                      }
                      const formData = new FormData(form);
                      formData.delete('phone_alt');
                      const params = new URLSearchParams();
                      formData.forEach((value, key) => { params.append(key, value as string); });

                      try {
                        const response = await fetch(formUrl, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params.toString() });
                        const responseText = await response.text();
                        let parsed; try { parsed = JSON.parse(responseText); } catch { parsed = null; }
                        const serverMsg = parsed?.meta?.message || parsed?.meta?.detail || parsed?.message || responseText || '';
                        const code = parsed?.code || '';

                        if (response.ok && code === 'OK') {
                          setFormStatus('success'); setFormError(''); form.reset();
                        } else {
                          const errorMsg = serverMsg.includes('spam') || serverMsg.includes('form data is spam')
                            ? 'Prišlo je do napake pri pošiljanju. Prosimo, poskusite znova.'
                            : serverMsg || 'Prišlo je do napake pri pošiljanju. Prosimo, poskusite znova.';
                          setFormStatus('error'); setFormError(errorMsg);
                        }
                      } catch {
                        setFormStatus('error'); setFormError('Prišlo je do napake pri pošiljanju. Prosimo, poskusite znova.');
                      }
                    }}
                  >
                    <input type="text" name="phone_alt" className="honeypot-field" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-foreground-700 mb-1.5">Ime</label>
                        <input type="text" id="contact-name" name="name" required className="w-full px-4 py-2.5 rounded-xl bg-background-50 border border-background-200 text-foreground-900 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all" placeholder="Vaše ime" />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-foreground-700 mb-1.5">E-pošta</label>
                        <input type="email" id="contact-email" name="email" required className="w-full px-4 py-2.5 rounded-xl bg-background-50 border border-background-200 text-foreground-900 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all" placeholder="vasa@posta.si" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground-700 mb-1.5">Zadeva</label>
                      <input type="text" id="contact-subject" name="subject" required className="w-full px-4 py-2.5 rounded-xl bg-background-50 border border-background-200 text-foreground-900 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all" placeholder="Npr. Rezervacija apartmaja" />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-foreground-700 mb-1.5">Sporočilo</label>
                      <textarea id="contact-message" name="message" required maxLength={500} rows={4} className="w-full px-4 py-2.5 rounded-xl bg-background-50 border border-background-200 text-foreground-900 text-sm focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none" placeholder="Vaše sporočilo (največ 500 znakov)"></textarea>
                    </div>
                    <button type="submit" className="w-full px-8 py-3.5 rounded-full bg-primary-500 text-background-50 font-semibold hover:bg-primary-600 active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap">
                      <i className="ri-send-plane-line mr-2"></i>
                      Pošlji sporočilo
                    </button>
                  </form>
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
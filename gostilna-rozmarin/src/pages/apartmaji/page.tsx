import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCallButton from '@/components/feature/MobileCallButton';
import ScrollReveal from '@/components/base/ScrollReveal';
import PageTransition from '@/components/base/PageTransition';

const apartmentImages = [
  { id: 1, src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/16957c74e03aad7bf765b0edb84a33f8.png', alt: 'Apartmaji Babi - spalnica z lesenimi tramovi in opeko' },
  { id: 2, src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/9b104178d69b6c5d5100c567863c691f.png', alt: 'Apartmaji Babi - kopalnica v rustikalnem slogu' },
  { id: 3, src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/af1fa38fd71168577a661a6aaaab376a.png', alt: 'Apartmaji Babi - terasa s pogledom na sončni zahod' },
  { id: 4, src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/548dada3efc1eabbddff4b93eef497b5.png', alt: 'Apartmaji Babi - wellness prostor z jacuzzijem' },
  { id: 5, src: 'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/41099368112940689b36b34852e3aabd.png', alt: 'Apartmaji Babi - lesene stopnice na terasi' },
];

export default function Apartmaji() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? apartmentImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === apartmentImages.length - 1 ? 0 : selectedImage + 1);
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
                src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/af1fa38fd71168577a661a6aaaab376a.png"
                alt="Apartmaji Babi - terasa s sončnim zahodom"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-6 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 mb-6 animate-[fadeInDown_0.8s_ease-out]">
                <i className="ri-hotel-line text-primary-200"></i>
                <span className="text-primary-200 text-sm font-medium">Nastanitev</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-background-50 mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.15s] [animation-fill-mode:backwards]">
                Apartmaji <span className="text-primary-400 italic">Babi</span>
              </h1>
              <p className="text-lg md:text-xl text-background-50/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.3s] [animation-fill-mode:backwards]">
                Prijeten kotiček za oddih, kjer se prepletajo toplina lesa, rustikalni ambient in domačnost.
              </p>
              <div className="animate-[fadeInUp_0.8s_ease-out_0.45s] [animation-fill-mode:backwards]">
                <a
                  href="tel:+38641753335"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-500 text-background-50 font-semibold hover:bg-accent-600 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-calendar-check-line text-lg"></i>
                  Rezerviraj apartma
                </a>
              </div>
            </div>
          </section>

          {/* Description - with images */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-50">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  {/* Leva stran - tekst */}
                  <ScrollReveal animacija="fade-right" className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                      <i className="ri-home-heart-line"></i>
                      Predstavitev
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-8">
                      Dobrodošli v <span className="text-primary-600 italic">Apartmajih Babi</span>
                    </h2>
                    <div className="space-y-5 text-foreground-600 leading-relaxed text-base md:text-lg">
                      <p>
                        Dobrodošli v Apartmajih Babi – prijetnem kotičku za oddih, kjer se prepletajo toplina lesa, rustikalni ambient in domačnost. Prostori so zasnovani za sprostitev in prijetno bivanje, ne glede na to, ali prihajate na romantičen oddih, krajši pobeg od vsakdanjega tempa ali raziskovanje okolice Ptuja.
                      </p>
                      <p>
                        Vsak apartma obsega približno <strong className="text-foreground-900 font-semibold">70–85 kvadratnih metrov</strong> in vključuje popolnoma opremljeno <strong className="text-foreground-900 font-semibold">kuhinjo</strong>, kjer si lahko sami pripravite najljubše jedi.
                      </p>
                      <p>
                        Poseben čar nastanitvi dajejo skrbno urejeni prostori, prijetna terasa in wellness, kjer se lahko po dnevu raziskovanja popolnoma sprostite.
                      </p>
                      <p>
                        Apartmaji segajo v <strong className="text-foreground-900 font-semibold">ostrešje gostilne, stare približno 250 let</strong>, in so opremljeni s kosi pohištva naših prednikov, ki prostorom dajejo edinstveno zgodovinsko noto in pristno domačnost.
                      </p>
                      <p>
                        Apartmaji Babi so odlična izbira za sproščujoč oddih v prijetnem domačem okolju. Nahajamo se v bližini Ptujskega jezera, ki ponuja številne možnosti za sprehode, kolesarjenje in preživljanje časa v naravi.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Desna stran - slika */}
                  <ScrollReveal animacija="fade-left" zamik={150} className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/16957c74e03aad7bf765b0edb84a33f8.png"
                        alt="Apartmaji Babi - spalnica z lesenimi tramovi"
                        className="w-full h-80 md:h-96 object-cover object-center rounded-2xl hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </ScrollReveal>
                </div>

                {/* Ikone kartic */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
                  {[
                    { icon: 'ri-hotel-line', title: 'Spalnica', desc: 'Udobna postelja, leseni tramovi, opeka' },
                    { icon: 'ri-drop-line', title: 'Kopalnica', desc: 'Rustikalna kopalnica z leseno notranjostjo' },
                    { icon: 'ri-restaurant-line', title: 'Kuhinja', desc: 'Popolnoma opremljena kuhinja' },
                    { icon: 'ri-sun-line', title: 'Terasa', desc: 'Prostorna terasa za jutranjo kavo in večere' },
                    { icon: 'ri-water-flash-line', title: 'Wellness', desc: 'Jacuzzi, savna in prostor za počitek' },
                    { icon: 'ri-ruler-line', title: 'Prostornost', desc: 'Približno 70–85 m² bivalne površine' },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} animacija="scale-in" zamik={i * 100}>
                      <div className="p-5 rounded-2xl bg-background-100 border border-background-200/70 text-center hover:border-primary-200 transition-all duration-300 group cursor-default">
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

          {/* Gallery */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-100">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold mb-4">
                      <i className="ri-image-line"></i>
                      Galerija
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                      Preglejte <span className="text-accent-600 italic">prostore</span>
                    </h2>
                    <p className="text-foreground-500 max-w-xl mx-auto">
                      Spalnica, kopalnica, terasa, wellness – vse, kar Apartmaji Babi ponujajo.
                    </p>
                  </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {apartmentImages.map((image, index) => (
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
                  <button onClick={() => setSelectedImage(null)} className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors z-20 cursor-pointer">
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                  <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center">
                    <img src={apartmentImages[selectedImage].src} alt={apartmentImages[selectedImage].alt} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
                    <p className="text-background-50/70 text-sm mt-4 text-center max-w-lg px-4">{apartmentImages[selectedImage].alt}</p>
                  </div>
                  <button onClick={goToPrev} className="absolute left-3 md:left-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors cursor-pointer">
                    <i className="ri-arrow-left-s-line text-2xl"></i>
                  </button>
                  <button onClick={goToNext} className="absolute right-3 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line text-2xl"></i>
                  </button>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background-50/10 backdrop-blur-sm text-background-50 text-sm">
                    {selectedImage + 1} / {apartmentImages.length}
                  </div>
                </div>
              )}
            </section>
          </ScrollReveal>

          {/* Location - with images */}
          <ScrollReveal>
            <section className="py-20 md:py-28 bg-background-50">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ScrollReveal animacija="fade-up">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold mb-4">
                      <i className="ri-map-pin-line"></i>
                      Lokacija &amp; Okolica
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 mb-4">
                      Odlična izhodiščna <span className="text-secondary-600 italic">točka</span>
                    </h2>
                    <p className="text-foreground-500 max-w-2xl mx-auto">
                      Apartmaji Babi so odlična izhodiščna točka za raziskovanje Ptuja in njegove okolice.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Ptujsko jezero */}
                  <ScrollReveal animacija="fade-right" zamik={150}>
                    <div className="rounded-2xl bg-background-100 border border-background-200/70 overflow-hidden h-full group">
                      <div className="relative overflow-hidden h-48 md:h-56">
                        <img
                          src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/bb3c8ae6e5e4a22a89a79c8277a3d4a5.png"
                          alt="Ptujsko jezero - panoramski razgled"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      <div className="p-6 md:p-8">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4">
                          <i className="ri-water-flash-line text-2xl"></i>
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-900 mb-3">Ptujsko jezero</h3>
                        <p className="text-foreground-600 leading-relaxed mb-4">
                          Nahajamo se v bližini Ptujskega jezera, kjer lahko uživate v sprehodih, kolesarjenju, naravi in čudovitih razgledih. Jezero je priljubljena destinacija za rekreacijo in sprostitev skozi vse leto.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Sprehodi', 'Kolesarjenje', 'Narava', 'Razgledi'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200 text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Donačka gora */}
                  <ScrollReveal animacija="fade-left" zamik={150}>
                    <div className="rounded-2xl bg-background-100 border border-background-200/70 overflow-hidden h-full group">
                      <div className="relative overflow-hidden h-48 md:h-56">
                        <img
                          src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/124eb74907e5febb6da6f9c1df92970b.png"
                          alt="Donačka gora - pohodniška destinacija"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      <div className="p-6 md:p-8">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-100 text-accent-600 mb-4">
                          <i className="ri-landscape-line text-2xl"></i>
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-900 mb-3">Donačka gora</h3>
                        <p className="text-foreground-600 leading-relaxed mb-4">
                          Za ljubitelje pohodništva in narave je zanimiv tudi izlet na Donačko goro, eno izmed priljubljenih pohodniških destinacij tega dela Slovenije. Okolica tako ponuja odlično kombinacijo sprostitve, aktivnosti v naravi in raziskovanja.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Pohodništvo', 'Narava', 'Razgledi', 'Izleti'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-200 text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Ptuj mesto */}
                <ScrollReveal animacija="fade-up" zamik={200}>
                  <div className="mt-8 rounded-2xl bg-background-100 border border-background-200/70 overflow-hidden group">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative overflow-hidden h-48 md:h-auto">
                        <img
                          src="https://readdy.ai/api/search-image?query=Beautiful%20historic%20old%20town%20of%20Ptuj%20Slovenia%20with%20medieval%20castle%20on%20a%20hill%20overlooking%20red%20rooftops%20cobblestone%20streets%20charming%20central%20European%20architecture%20Drava%20river%20flowing%20nearby%20warm%20golden%20hour%20light%20peaceful%20atmosphere%20oldest%20town%20in%20Slovenia%20cultural%20heritage%20scenic%20panoramic%20view&width=800&height=600&seq=apartmaji-ptuj-mesto&orientation=landscape"
                          alt="Ptuj - najstarejše mesto v Sloveniji"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary-100 text-secondary-600 mb-4">
                          <i className="ri-building-line text-2xl"></i>
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-900 mb-3">Ptuj – najstarejše mesto v Sloveniji</h3>
                        <p className="text-foreground-600 leading-relaxed">
                          Ptuj, eno najprepoznavnejših zgodovinskih mest v Sloveniji, je v bližini in ponuja številne kulturne, zgodovinske in gastronomske doživetja. Sprehodite se po starem mestnem jedru, obiščite Ptujski grad in uživajte v bogati kulinarični ponudbi.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </ScrollReveal>

          {/* Terrace & Wellness CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-24 bg-background-100">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4">
                    Prijetna terasa za <span className="text-primary-600 italic">trenutke na prostem</span>
                  </h2>
                  <p className="text-foreground-600 leading-relaxed max-w-2xl mx-auto">
                    Za prijetne trenutke na svežem zraku je na voljo tudi prostorna terasa – idealna za jutranjo kavo, sproščeno druženje ali miren zaključek dneva.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img
                      src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/af1fa38fd71168577a661a6aaaab376a.png"
                      alt="Apartmaji Babi - terasa s pogledom"
                      className="w-full h-72 md:h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
                      <span className="text-background-50 font-semibold text-sm flex items-center gap-2">
                        <i className="ri-sun-line"></i>
                        Prostorna terasa
                      </span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img
                      src="https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/548dada3efc1eabbddff4b93eef497b5.png"
                      alt="Apartmaji Babi - wellness z jacuzzijem"
                      className="w-full h-72 md:h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
                      <span className="text-background-50 font-semibold text-sm flex items-center gap-2">
                        <i className="ri-water-flash-line"></i>
                        Wellness z jacuzzijem
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal animacija="fade-up">
            <section className="py-20 md:py-28 bg-primary-900">
              <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4">
                  Rezervirajte svoj <span className="text-accent-400 italic">apartma</span>
                </h2>
                <p className="text-background-50/70 mb-8 max-w-xl mx-auto">
                  Pokličite nas, pošljite povpraševanje ali rezervirajte preko Booking.com. Z veseljem vam zagotovimo prijetno bivanje.
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
                <div className="mt-8 pt-8 border-t border-background-50/20">
                  <p className="text-background-50/50 text-sm mb-4">
                    Ali rezervirajte preko platforme Booking.com
                  </p>
                  <a
                    href="https://www.booking.com/searchresults.html?ss=Apartmaji%20Babi%20Ptuj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold hover:brightness-110 active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer"
                    style={{ backgroundColor: '#003580', color: '#fff' }}
                  >
                    <i className="ri-external-link-line text-lg"></i>
                    Apartmaji Babi – Booking.com
                  </a>
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
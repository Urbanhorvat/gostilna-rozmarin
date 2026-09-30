import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-background-50/80 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-accent-500 text-background-50">
                <i className="ri-home-heart-line"></i>
              </div>
              <span className="font-heading text-lg font-bold text-background-50">
                Gostilna Rožmarin &amp; Apartmaji Babi
              </span>
            </div>
            <p className="text-sm text-background-50/60 leading-relaxed mb-4">
              Domači okusi, prijeten oddih in trenutki za sprostitev v Markovcih pri Ptuju.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/bar.rozmarin"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-background-50/10 text-background-50 hover:bg-accent-500 transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-line"></i>
              </a>
            </div>
          </div>

          {/* Hiter meni */}
          <div>
            <h4 className="font-heading text-base font-semibold text-background-50 mb-4">Hiter meni</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Domov' },
                { to: '/gostilna', label: 'Gostilna' },
                { to: '/pice', label: 'Pice' },
                { to: '/jedilni-list', label: 'Jedilni list' },
                { to: '/apartmaji', label: 'Apartmaji' },
                { to: '/wellness', label: 'Wellness' },
                { to: '/galerija', label: 'Galerija' },
                { to: '/dozivetja', label: 'Doživetja' },
                { to: '/cenik', label: 'Cenik' },
                { to: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background-50/60 hover:text-accent-400 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <i className="ri-arrow-right-s-line text-xs"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-heading text-base font-semibold text-background-50 mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-accent-400 mt-0.5"></i>
                <span className="text-sm text-background-50/60">
                  Markovci 28<br />
                  2281 Markovci<br />
                  Slovenija
                </span>
              </li>
              <li>
                <a href="tel:+38641753335" className="flex items-center gap-3 text-sm text-background-50/60 hover:text-accent-400 transition-colors cursor-pointer">
                  <i className="ri-phone-line text-accent-400"></i>
                  041 753 335
                </a>
              </li>
              <li>
                <a href="mailto:rozmariniva@gmail.com" className="flex items-center gap-3 text-sm text-background-50/60 hover:text-accent-400 transition-colors break-all cursor-pointer">
                  <i className="ri-mail-line text-accent-400"></i>
                  rozmariniva@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Delovni čas */}
          <div>
            <h4 className="font-heading text-base font-semibold text-background-50 mb-4">Delovni čas</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between text-sm">
                <span className="text-background-50/60">Pon–Čet</span>
                <span className="text-background-50/80">10:00 – 22:00</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-background-50/60">Pet–Sob</span>
                <span className="text-background-50/80">10:00 – 23:00</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-background-50/60">Nedelja</span>
                <span className="text-background-50/80">12:00 – 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-background-50/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background-50/40">
            &copy; {new Date().getFullYear()} Gostilna Rožmarin &amp; Apartmaji Babi. Vse pravice pridržane.
          </p>
          <p className="text-xs text-background-50/40">
            Markovci pri Ptuju &bull; Družinam prijazna gostilna in nastanitev
          </p>
        </div>
      </div>
    </footer>
  );
}
const products = [
  { name: 'Movilidad', href: 'https://www.gmd.com.co/category/movilidad-y-rehabilitaci%C3%B3n/0ZGU100000002cvOAA' },
  { name: 'Monitoreo', href: 'https://www.gmd.com.co/category/monitoreo-y-control-de-signos-vitales/0ZGU100000002ufOAA' },
  { name: 'Instrumental', href: 'https://www.gmd.com.co/category/instrumental-m%C3%A9dico-y-dotaci%C3%B3n-profesional/0ZGU100000002JZOAY' },
  { name: 'Vida Diaria', href: 'https://www.gmd.com.co/category/cuidado-del-paciente-y-vida-diaria/0ZGU1000000028HOAQ' },
  { name: 'Terapia Respiratoria', href: 'https://www.gmd.com.co/category/terapia-respiratoria/0ZGVT00000000BK4AY' }
];

const company = [
  { name: 'GMDVita', href: 'https://www.gmdvita.com/' },
  // { name: 'Política de privacidad', href: 'https://cloud.impormedical.co/IM/Politica' },
  // { name: 'Política de devoluciones', href: 'https://cloud.impormedical.co/IM/Politica_Devoluciones' },
  // { name: 'Canal de denuncias', href: 'https://cloud.impormedical.co/IM/Denuncia_soborno_fraude' },
  // { name: 'Registra tu garantía GMD', href: 'https://www.gmd.com.co/registra-tu-garantia-gmd' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#030914] text-white/70 py-16 lg:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Columna 1: Brand e Info */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <img className='w-[150px]' src="https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/5b0a3580-0953-4ff4-ad27-d09721281e00/public" alt="Logo GMD blanco" />
            <p className="text-sm lg:text-base text-white/60 leading-relaxed max-w-sm">
              Habilitando vidas a través del bienestar. Equipos médicos 100% para colombianos.
            </p>

            {/* Redes Sociales */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/gmddiagnostic" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-brand-500 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@GMDDIAGNOSTICO" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-brand-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/gmddiagnostic/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-brand-500 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@gmddiagnostic?_r=1&_t=ZS-95XXwRk2lFw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-brand-500 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Productos */}
          <div className="lg:col-span-3 flex flex-col space-y-4 md:pl-8">
            <h4 className="text-white font-bold tracking-[0.2em] text-xs mb-2">PRODUCTOS</h4>
            <ul className="flex flex-col space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm font-medium hover:text-brand-500 transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-white font-bold tracking-[0.2em] text-xs mb-2">EMPRESA</h4>
            <ul className="flex flex-col space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm font-medium hover:text-teal-400 transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="w-[350px] lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-white font-bold tracking-[0.2em] text-xs mb-2">CONTACTO</h4>
            <ul className="flex flex-col space-y-5">
              <li className="flex items-start text-sm font-medium">
                <svg className="w-5 h-5 text-teal-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:servicioalcliente@impormedical.com.co" className="ml-1 hover:text-white transition-colors">servicioalcliente@impormedical.com.co</a>
              </li>
              <li className="flex items-start text-sm font-medium">
                <svg className="w-5 h-5 text-teal-400/80 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ml-1">Cali, Colombia 🇨🇴</span>
              </li>
              <li className="flex items-start text-sm font-medium">
                <svg className="w-5 h-5 mr-3 text-teal-400/80 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lun – Vie, 8:00 – 17:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50">
          <p>© {new Date().getFullYear()} GMD — Impormedical S.A.S.</p>
          {/* <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Productos', href: '#' },
    { name: 'Categorías', href: '#' },
    { name: 'Nosotros', href: '#' },
    { name: 'Contacto', href: '#' }
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gmd-light shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo a la Izquierda */}
          <div className="flex-shrink-0 flex items-center">
            {/* Aquí puedes cambiar el logo por el real. Ahora hay un logo estilo placeholder */}
            <a href="#" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1">
              <div className="w-[3.5rem] h-[3.5rem] bg-brand-500 rounded-xl flex items-center justify-center transform group-hover:-rotate-6 transition-transform duration-300 shadow-md">
                <span className="text-white font-bold text-xl">GMD</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-navy-800 group-hover:text-brand-500 transition-colors">
                Impor<span className="text-brand-500 lg:text-navy-800 lg:group-hover:text-brand-500">medical</span>
              </span>
            </a>
          </div>

          {/* Menú Desktop - Centrado */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-2 lg:space-x-6 bg-gmd-light/50 px-4 py-1.5 rounded-full border border-gmd-light/50">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-navy-600 hover:text-brand-500 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:shadow-sm relative group text-sm lg:text-base outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {item.name}
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-brand-500 rounded-full opacity-0 transform group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Botón Distribuidores */}
          <div className="hidden md:flex w-[150px] justify-end items-center">
            <button className="h-[3rem] bg-brand-500 font-semibold hover:bg-brand-600 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500">
              Soy distribuidor
            </button>
          </div>

          {/* Botón Hamburger - Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-navy-500 hover:text-brand-500 hover:bg-brand-100/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Cerrar menú' : 'Abrir menú principal'}</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1'}`} />
                <span className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'translate-y-1.5'}`} />
                <span className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile Desplegable */}
      <div
        className={`md:hidden absolute top-[81px] left-0 w-full bg-white border-b border-gmd-light shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 space-y-1 bg-gmd-light/50">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3.5 rounded-xl text-base font-semibold text-navy-700 hover:text-brand-500 hover:bg-white hover:shadow-sm transition-all duration-200"
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${isOpen ? index * 50 : 0}ms` }}
            >
              {item.name}
            </a>
          ))}

          {/* Botón Distribuidores - Mobile */}
          <div className="pt-4 pb-2">
            <button
              className="w-full bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 rounded-xl font-medium transition-colors shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Distribuidores
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

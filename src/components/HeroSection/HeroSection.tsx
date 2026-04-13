import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const cards = [
  {
    id: 1,
    title: "Facilitamos el uso en la vida diaria",
    description: "Diseñamos soluciones que se integran de forma natural al cuerpo y a la rutina.",
    img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/20a1da17-9b15-491f-3c1f-2341827f6b00/public",
  },
  {
    id: 2,
    title: "Desarrollamos soluciones",
    description: "Definimos estándares y producimos bajo nuestras especificaciones.",
    img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/40f57e07-70f9-46e1-c1ec-530afa205900/public",
  },
  {
    id: 3,
    title: "Garantizamos continuidad",
    description: "Red de +1.000 distribuidores y soporte postventa en todo el país.",
    img: "https://imagedelivery.net/3xEh-XSYeJWAvnbRPV3bRg/ee7c24fa-0520-471b-d439-623c83f5eb00/public",
  }
];

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-navy-900 h-auto md:h-[calc(100vh-139px)] min-h-[700px] md:min-h-[600px]">
      <Swiper
        effect={'fade'}
        grabCursor={true}
        modules={[EffectFade, Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full h-full"
        loop={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="relative w-full h-full">

            {/* Background Image & Overlays */}
            <div className="absolute inset-0">
              {card.img ? (
                <img src={card.img} alt={card.title} className="w-full h-full object-cover object-center" />
              ) : (
                <div className="w-full h-full bg-navy-800" />
              )}
              {/* Gradients to ensure text readability */}
              <div className="absolute inset-0 bg-navy-900/50 md:bg-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/60 to-navy-900/20 md:bg-gradient-to-r md:from-navy-900/95 md:via-navy-900/40 md:to-transparent"></div>
            </div>

            {/* Front Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center pt-8 pb-16 md:py-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                  {/* Left Column: Big Fixed Hero Text (Spans 7 cols on large screens) */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8 mt-12 md:mt-0">
                    <div className="space-y-4">
                      <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.15] tracking-tight text-shadow-sm">
                        Soluciones de salud que posibilitan la vida, con <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-100">el respaldo que necesitas</span>
                      </h1>
                    </div>

                    <p className="text-lg text-white md:text-xl text-navy-50 leading-relaxed max-w-2xl font-medium drop-shadow-md">
                      Diseñamos cada producto para responder con precisión, asegurar continuidad y respaldar la práctica clínica y la vida diaria.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-2">
                      <a
                        className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 backdrop-blur-md px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                        href="https://www.gmd.com.co/category/todos-los-productos/0ZGVT000000004r4AA"
                      >
                        Explorar catálogo
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      <a
                        className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 backdrop-blur-md px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                        href="https://www.gmd.com.co/contacto"
                      >
                        Quiero ser distribuidor
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Slider Content (Spans 5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-center mt-6 lg:mt-0">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                      {/* Decorative gradient blur behind the glass */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-500/30 rounded-full blur-3xl group-hover:bg-brand-500/40 transition-all duration-500"></div>

                      <div className="relative z-10 block">
                        <div className="w-12 h-1.5 bg-brand-400 mb-6 rounded-full shadow-sm"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight drop-shadow-sm">
                          {card.title}
                        </h3>
                        <p className="text-navy-50 text-gray-200 md:text-lg font-medium leading-relaxed drop-shadow-sm">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination-bullet {
          background-color: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: #00A2C3 !important; /* brand-500 */
          opacity: 1;
        }
      `}</style>
    </section>
  );
};


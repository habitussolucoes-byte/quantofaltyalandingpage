
import React from 'react';

const testimonials = [
  {
    name: "Dyego Azevedo",
    role: "Motorista",
    text: "“Agora sei exatamente quanto ganho por dia. O app é muito prático e rápido de usar entre uma corrida e outra.”",
    img: "https://picsum.photos/seed/p1/60/60"
  },

];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Quem já usa, aprova!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 flex-grow">{t.text}</p>
              <div className="flex items-center gap-4">
                <img src={t.img} className="w-12 h-12 rounded-full object-cover" alt={t.name} />
                <div>
                  <p className="font-bold text-slate-900 leading-tight">{t.name}</p>
                  <p className="text-xs text-slate-500 uppercase font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-emerald-600 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight">Não deixe seu dinheiro escapar pelas mãos!</h3>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
              Comece hoje a organizar sua vida financeira por um preço menor que o de um salgado.
            </p>
            <a 
              href="#pricing" 
              className="inline-block bg-white text-emerald-600 text-xl font-black px-12 py-5 rounded-2xl shadow-xl hover:bg-slate-100 transition-all active:scale-95 uppercase"
            >
              Começar agora por R$ 9,90
            </a>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

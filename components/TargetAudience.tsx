
import React from 'react';

const audiences = [
  { label: "Motoristas de Aplicativo", img: "https://picsum.photos/seed/driver/300/400" },
  { label: "Motoboys e Entregadores", img: "https://picsum.photos/seed/delivery/300/400" },
  { label: "Freelancers e MEI", img: "https://picsum.photos/seed/freelance/300/400" },
  { label: "Recebe por dia ou corrida", img: "https://picsum.photos/seed/money/300/400" }
];

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Para quem é este app?</h2>
          <p className="text-slate-400">Desenhado especificamente para quem não tem salário fixo e vive do corre diário.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {audiences.map((aud, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
              <img 
                src={aud.img} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60" 
                alt={aud.label} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="text-sm md:text-lg font-bold text-center group-hover:text-emerald-400 transition-colors">{aud.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-emerald-400 italic">"Se você corre atrás do seu dinheiro, o GranaFácil corre com você."</p>
        </div>
      </div>
    </section>
  );
};

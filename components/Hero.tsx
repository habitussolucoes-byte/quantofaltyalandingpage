
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-grid relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-block px-4 py-1.5 mb-6 bg-orange-100 text-orange-700 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse">
              🔥 Promoção por tempo limitado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Controle seu dinheiro diário <span className="text-emerald-500">sem complicação</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Perfeito para quem recebe todo dia e precisa saber exatamente para onde o dinheiro está indo. Pare de perder dinheiro agora!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a 
                href="#pricing" 
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-200 transition-all hover:-translate-y-1 active:scale-95 text-center"
              >
                Quero pagar só R$ 9,90
              </a>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i} 
                      src={`https://picsum.photos/seed/${i + 20}/40/40`} 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      alt="User avatar" 
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-500">+12k autônomos usando</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-[320px] md:max-w-[380px] perspective-1000 animate-in fade-in zoom-in duration-1000 delay-200">
               {/* Phone Mockup Placeholder */}
               <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-800">
                 <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                   <div className="bg-emerald-500 p-6 text-white">
                     <div className="flex justify-between items-start mb-6">
                        <div className="w-8 h-8 rounded-full bg-white/20"></div>
                        <div className="text-right">
                          <p className="text-xs opacity-80 uppercase">Saldo Hoje</p>
                          <p className="text-2xl font-bold">R$ 247,50</p>
                        </div>
                     </div>
                     <div className="h-24 flex items-end gap-1">
                        {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                          <div key={i} className="flex-1 bg-white/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                     </div>
                   </div>
                   <div className="p-6">
                      <p className="font-bold mb-4">Ganhos da Semana</p>
                      {[
                        { label: 'Corrida iFood', val: '+R$ 12,50', time: '12:45' },
                        { label: 'Combustível Posto', val: '-R$ 50,00', time: '11:20', neg: true },
                        { label: 'Corrida Uber', val: '+R$ 34,20', time: '10:05' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                          <div>
                            <p className="text-sm font-semibold">{item.label}</p>
                            <p className="text-[10px] text-slate-400">{item.time}</p>
                          </div>
                          <p className={`text-sm font-bold ${item.neg ? 'text-red-500' : 'text-emerald-500'}`}>{item.val}</p>
                        </div>
                      ))}
                   </div>
                 </div>
               </div>
               {/* Floating elements */}
               <div className="absolute -right-6 top-1/4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 animate-bounce transition-all duration-3000">
                  <p className="text-xs text-slate-500">Lucro Mensal</p>
                  <p className="text-lg font-bold text-emerald-600">+ R$ 4.250</p>
               </div>
               <div className="absolute -left-6 bottom-1/4 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                  <p className="text-xs text-slate-500">Economizado</p>
                  <p className="text-lg font-bold text-blue-600">R$ 890,00</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

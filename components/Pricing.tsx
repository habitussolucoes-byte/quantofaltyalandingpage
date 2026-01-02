
import React, { useState, useEffect } from 'react';

export const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59); // 14 mins initial

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="pricing" className="py-24 bg-emerald-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-200 overflow-hidden border-2 border-emerald-100">
          <div className="bg-emerald-500 text-white py-6 px-8 text-center relative">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">OFERTA EXCLUSIVA</h3>
            <p className="opacity-90 font-medium">Invista agora e para de perder dinheiro</p>
          </div>
          
          <div className="p-10 md:p-16 flex flex-col items-center text-center">
            <div className="mb-8 flex flex-col items-center">
              <span className="text-slate-400 text-xl md:text-2xl line-through mb-2 block">De R$ 29,90</span>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-slate-900 mt-2">Por apenas</span>
                <span className="text-6xl md:text-8xl font-black text-emerald-600 tracking-tighter">R$ 9,90</span>
                <span className="text-xl font-semibold text-slate-500 mt-6">/mês</span>
              </div>
            </div>
            
            <div className="bg-orange-50 text-orange-700 px-6 py-3 rounded-full border border-orange-100 mb-10 animate-pulse">
              <span className="font-bold">⏰ Oferta expira em: {formatTime(timeLeft)}</span>
            </div>
            
            <ul className="text-left w-full max-w-sm space-y-4 mb-12">
              {[
                "Acesso ilimitado a todas funções",
                "Relatórios detalhados de lucro",
                "Suporte prioritário via WhatsApp",
                "Backup em nuvem automático",
                "Sem propagandas irritantes"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-2xl font-black py-6 rounded-2xl shadow-xl shadow-emerald-200 transition-all active:scale-95 mb-4 uppercase tracking-wide">
              Quero aproveitar o desconto
            </button>
            <p className="text-slate-400 text-xs flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Pagamento 100% seguro via Hotmart/Stripe
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center text-slate-500 max-w-lg mx-auto">
          <p className="text-sm">Ao comprar por R$ 9,90 você garante o APP vitalício. Se cancelar hoje, o próximo preço será de R$ 29,90.</p>
        </div>
      </div>
    </section>
  );
};

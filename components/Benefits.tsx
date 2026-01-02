
import React from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Controle diário de gastos",
    desc: "Saiba exatamente quanto você precisa ganhar em cada dia de trabalho."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Simples, rápido e fácil de usar",
    desc: "Feito para quem não tem tempo a perder. Cadastre uma despesa em 2 segundos."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Ideal para quem trabalha na rua",
    desc: "Interface com botões grandes e leitura fácil, mesmo sob o sol."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Funciona offline",
    desc: "Ficou sem sinal de internet? Não tem problema, seus dados ficam salvos."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              O Quanto falta faz o trabalho duro por você
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Chega de planilhas complicadas ou caderninhos que se perdem. Tudo o que você precisa em um só lugar.
            </p>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/finance/600/600" 
                alt="App Interface" 
                className="rounded-3xl shadow-2xl border-8 border-slate-50 w-full max-w-[450px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-sm font-medium">Focado na sua realidade de trabalho</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

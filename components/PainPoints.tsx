
import React from 'react';

const pains = [
  {
    icon: '😭',
    title: "Não sabe quanto realmente ganha no mês",
    desc: "O dinheiro entra e sai todo dia, mas no final do mês você não sabe se teve lucro ou prejuízo."
  },
  {
    icon: '💸',
    title: "Mistura gastos pessoais com trabalho",
    desc: "Paga a gasolina e o mercado com o mesmo cartão? Essa é a receita para o desastre financeiro."
  },
  {
    icon: '🔍',
    title: "Perde dinheiro sem perceber",
    desc: "Taxas, lanches, pequenas manutenções... Se você não anota, o dinheiro simplesmente some."
  },
  {
    icon: '🔒',
    title: "Não consegue guardar nada",
    desc: "Você trabalha muito, mas parece que está sempre correndo atrás do rabo sem sair do lugar."
  }
];

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Isso acontece com você?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Muitos profissionais autônomos sofrem com a falta de organização. Se identificou com algum desses problemas?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{pain.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 leading-snug">{pain.title}</h3>
              <p className="text-slate-600 text-sm">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

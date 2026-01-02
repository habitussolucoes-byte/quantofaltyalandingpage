
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Quanto falta</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-emerald-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Suporte</a>
          </div>
        </div>
        
        <div className="text-center text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} Quanto falta? Todos os direitos reservados.</p>
          <p className="mt-2">O Quanto falta não é afiliado à Uber, 99, iFood ou qualquer outra plataforma mencionada. Somos um app de gestão financeira independente.</p>
        </div>
      </div>
    </footer>
  );
};

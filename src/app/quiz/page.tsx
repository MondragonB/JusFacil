import type { Metadata } from "next";
import { Trophy, Star, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Quiz Jurídico - JusFácil",
  description: "Teste seus conhecimentos jurídicos com o Quiz JusFácil.",
};

export default function QuizPage() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Quiz Jurídico</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        Hora de testar seus conhecimentos de forma divertida e desafiadora! Responda perguntas sobre diversos temas do Direito, acompanhe seu progresso e veja como você se sai no ranking.
      </p>

      {/* Gamification Elements Placeholder */}
      <div className="mb-8 flex items-center justify-center space-x-6 bg-blue-50 p-4 rounded-lg max-w-md mx-auto">
        <Trophy className="w-6 h-6 text-yellow-600" />
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '45%' }}></div> {/* Example progress */}
        </div>
        <span className="text-sm font-medium text-gray-700">Nível 5</span>
        <Star className="w-6 h-6 text-yellow-600" />
      </div>

      {/* Quiz Start/Options */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Pronto para começar?</h3>
        <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg mb-6 shadow-sm hover:shadow-md">
          Iniciar Quiz Aleatório
        </button>

        <h4 className="text-lg font-medium text-gray-800 mb-4">Ou escolha um tema específico:</h4>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-5 rounded-lg transition-colors">
            Direito Civil <ChevronRight className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-5 rounded-lg transition-colors">
            Direito Penal <ChevronRight className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-5 rounded-lg transition-colors">
            Direito Constitucional <ChevronRight className="w-4 h-4 ml-1" />
          </button>
           <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-5 rounded-lg transition-colors">
            Direito do Trabalho <ChevronRight className="w-4 h-4 ml-1" />
          </button>
          {/* Add more topics */}
        </div>
      </div>

       <p className="mt-12 mb-6 text-center text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


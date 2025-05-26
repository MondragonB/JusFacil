import type { Metadata } from "next";
import { Diamond, Lock, BookText, Video, Edit } from 'lucide-react'; // Icons for premium features

export const metadata: Metadata = {
  title: "Área Premium - JusFácil",
  description: "Desbloqueie conteúdo exclusivo e ferramentas avançadas na Área Premium.",
};

export default function PremiumPage() {
  return (
    <div className="px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Área Premium JusFácil</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl text-center">
        Leve seus estudos para o próximo nível! Assine a Área Premium e tenha acesso a resumos aprofundados, guias exclusivos, simulados personalizados, aulas rápidas e muito mais. Invista no seu futuro jurídico.
      </p>

      {/* Premium Features Overview */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto border border-blue-200">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">O que você ganha sendo Premium:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <BookText className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Resumos Aprofundados</h4>
              <p className="text-sm text-gray-600">Análises detalhadas dos temas mais complexos.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Edit className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Simulados Personalizados</h4>
              <p className="text-sm text-gray-600">Crie provas focadas nas matérias que você mais precisa.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Video className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Aulas Rápidas em Vídeo/Áudio</h4>
              <p className="text-sm text-gray-600">Explicações dinâmicas para reforçar o aprendizado.</p>
            </div>
          </div>
           <div className="flex items-start space-x-3">
            <Diamond className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">Guias de Estudo Exclusivos</h4>
              <p className="text-sm text-gray-600">Materiais focados em OAB, concursos e matérias chave.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="flex items-center justify-center w-full sm:w-auto mx-auto bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg">
            <Lock className="w-5 h-5 mr-2" />
            Desbloquear Acesso Premium
          </button>
          <p className="text-xs text-gray-500 mt-3">Planos flexíveis a partir de R$ X,XX/mês.</p>
        </div>
      </div>

       <p className="mt-12 mb-6 text-center text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


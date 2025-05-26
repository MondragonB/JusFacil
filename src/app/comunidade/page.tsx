import type { Metadata } from "next";
import { MessageSquarePlus, ThumbsUp, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Comunidade - JusFácil",
  description: "Conecte-se com outros estudantes na Comunidade JusFácil.",
};

export default function ComunidadePage() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Comunidade JusFácil</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        Este é o nosso espaço para troca de ideias, dúvidas e materiais! Participe dos debates, ajude os colegas e aprenda em conjunto. A colaboração é a chave para descomplicar o Direito.
      </p>

      {/* Forum/Feed Placeholder */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-blue-800">Últimas Discussões</h3>
          <button className="flex items-center bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md">
            <MessageSquarePlus className="w-5 h-5 mr-2" />
            Criar Novo Tópico
          </button>
        </div>

        {/* Example Post List */}
        <div className="space-y-6">
          {/* Post 1 */}
          <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
            <p className="font-semibold text-lg text-gray-800 hover:text-blue-700 cursor-pointer mb-1">Dúvida sobre Litisconsórcio Passivo Necessário</p>
            <p className="text-sm text-gray-500 mb-2">Postado por <span className="font-medium">Mariana Almeida</span> - 3 horas atrás em <span className="font-medium">Direito Processual Civil</span></p>
            <p className="text-gray-700 text-sm mb-3">Alguém poderia me explicar melhor as hipóteses de litisconsórcio passivo necessário? Fiquei com dúvida na aula...</p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <button className="flex items-center hover:text-blue-600"><ThumbsUp className="w-3 h-3 mr-1" /> 12 Curtidas</button>
              <button className="flex items-center hover:text-blue-600"><MessageCircle className="w-3 h-3 mr-1" /> 5 Respostas</button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
            <p className="font-semibold text-lg text-gray-800 hover:text-blue-700 cursor-pointer mb-1">Material de Apoio - Controle de Constitucionalidade</p>
            <p className="text-sm text-gray-500 mb-2">Postado por <span className="font-medium">Lucas Pereira</span> - 8 horas atrás em <span className="font-medium">Direito Constitucional</span></p>
            <p className="text-gray-700 text-sm mb-3">Pessoal, compilei um resumo e um mapa mental sobre Controle de Constitucionalidade, espero que ajude! Link nos comentários.</p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <button className="flex items-center hover:text-blue-600"><ThumbsUp className="w-3 h-3 mr-1" /> 25 Curtidas</button>
              <button className="flex items-center hover:text-blue-600"><MessageCircle className="w-3 h-3 mr-1" /> 8 Respostas</button>
            </div>
          </div>

           {/* Post 3 */}
          <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
            <p className="font-semibold text-lg text-gray-800 hover:text-blue-700 cursor-pointer mb-1">Questão de Direito Penal - Tipicidade</p>
            <p className="text-sm text-gray-500 mb-2">Postado por <span className="font-medium">Beatriz Oliveira</span> - 1 dia atrás em <span className="font-medium">Direito Penal</span></p>
            <p className="text-gray-700 text-sm mb-3">Estava resolvendo umas questões e travei nesta sobre tipicidade formal e material. Alguém pode dar uma luz?</p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <button className="flex items-center hover:text-blue-600"><ThumbsUp className="w-3 h-3 mr-1" /> 7 Curtidas</button>
              <button className="flex items-center hover:text-blue-600"><MessageCircle className="w-3 h-3 mr-1" /> 3 Respostas</button>
            </div>
          </div>
          {/* Add more posts or pagination */}
        </div>
      </div>

       <p className="mt-12 mb-6 text-center text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


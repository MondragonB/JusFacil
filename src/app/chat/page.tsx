import type { Metadata } from "next";
import { MessageCircle, Send } from 'lucide-react'; // Icons for chat

export const metadata: Metadata = {
  title: "Chat de Orientação - JusFácil",
  description: "Tire suas dúvidas rápidas com nossa orientação acadêmica.",
};

export default function ChatPage() {
  return (
    <div className="px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Chat de Orientação Acadêmica</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl text-center">
        Precisa de uma dica rápida sobre métodos de estudo, organização ou como usar o JusFácil? Use nosso chat para obter respostas a perguntas frequentes. Lembre-se: este chat oferece orientações gerais e não substitui o aconselhamento de seus professores ou da coordenação do curso.
      </p>

      {/* Chat Interface Placeholder */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto h-[60vh] flex flex-col">
        {/* Chat Messages Area */}
        <div className="flex-grow overflow-y-auto mb-4 space-y-4 pr-2">
          {/* Example Bot Message */}
          <div className="flex justify-start">
            <div className="bg-blue-100 text-blue-900 p-3 rounded-lg max-w-xs sm:max-w-sm">
              <p className="text-sm">Olá! Sou o assistente JusFácil. Como posso ajudar com suas dúvidas sobre estudos ou o aplicativo hoje?</p>
            </div>
          </div>
          {/* Example User Message */}
          <div className="flex justify-end">
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs sm:max-w-sm">
              <p className="text-sm">Gostaria de dicas para organizar meu tempo de estudo para as provas finais.</p>
            </div>
          </div>
           {/* Example Bot Message */}
          <div className="flex justify-start">
            <div className="bg-blue-100 text-blue-900 p-3 rounded-lg max-w-xs sm:max-w-sm">
              <p className="text-sm">Claro! Uma técnica eficaz é criar um cronograma realista, dividindo as matérias por blocos de tempo e incluindo pausas. Você já experimentou a técnica Pomodoro?</p>
            </div>
          </div>
          {/* Add more messages placeholder */}
        </div>

        {/* Chat Input Area */}
        <div className="flex items-center border-t border-gray-200 pt-4">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-r-lg transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

       <p className="mt-12 mb-6 text-center text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


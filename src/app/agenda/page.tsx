import type { Metadata } from "next";
import { Calendar, PlusCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Agenda Acadêmica - JusFácil",
  description: "Organize seus prazos, provas e trabalhos com a Agenda JusFácil.",
};

export default function AgendaPage() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Agenda Acadêmica</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        Mantenha sua vida acadêmica organizada! Registre datas de provas, entrega de trabalhos, prazos de estágio e receba lembretes para não perder nada importante. Simplifique sua rotina e foque no que realmente importa: seus estudos.
      </p>

      {/* Placeholder for Calendar/Event List */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-blue-800">Próximos Eventos</h3>
          <button className="flex items-center bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md">
            <PlusCircle className="w-5 h-5 mr-2" />
            Adicionar Evento
          </button>
        </div>

        {/* Example Event List - Replace with actual calendar or dynamic list */}
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-3 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">Prova de Direito Processual Civil</p>
              <p className="text-sm text-gray-500">Professor Eraldo</p>
            </div>
            <p className="text-sm font-medium text-blue-700">Quinta-feira, 29 de Maio</p>
          </div>
          <div className="border-b border-gray-200 pb-3 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">Entrega Trabalho de Constitucional</p>
              <p className="text-sm text-gray-500">Tema: Controle de Constitucionalidade</p>
            </div>
            <p className="text-sm font-medium text-blue-700">Sexta-feira, 06 de Junho</p>
          </div>
           <div className="border-b border-gray-200 pb-3 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">Simulado OAB - 1ª Fase</p>
              <p className="text-sm text-gray-500">Plataforma JusFácil</p>
            </div>
            <p className="text-sm font-medium text-blue-700">Sábado, 14 de Junho</p>
          </div>
          {/* Add more events or calendar component here */}
        </div>

        {/* Placeholder for full calendar view link */}
        <div className="text-center mt-6">
          <a href="#" className="text-blue-600 hover:underline text-sm">Ver calendário completo</a>
        </div>
      </div>

       <p className="mt-12 mb-6 text-center text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


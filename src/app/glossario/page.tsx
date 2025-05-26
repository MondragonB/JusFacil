import type { Metadata } from "next";
import { List, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: "Glossário Jurídico - JusFácil",
  description: "Descomplique o juridiquês com o Glossário JusFácil.",
};

export default function GlossarioPage() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Glossário Jurídico Descomplicado</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        Se perdeu no "juridiquês"? Aqui você encontra definições claras e exemplos práticos para os termos mais comuns (e os mais complicados) do Direito. Consulte rapidamente e tire suas dúvidas.
      </p>

      {/* Search and Term List */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Buscar termo... (Ex: Habeas Corpus, Litispendência, Usucapião)"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Termos Recentes</h3>
        {/* Example Term List */}
        <div className="space-y-5">
          <div className="border-b border-gray-200 pb-4">
            <p className="font-semibold text-xl text-gray-800 mb-1">Litispendência</p>
            <p className="text-gray-700">Situação em que duas ou mais ações idênticas (mesmas partes, mesmo pedido e mesma causa de pedir) estão tramitando ao mesmo tempo na justiça. A segunda ação deve ser extinta.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <p className="font-semibold text-xl text-gray-800 mb-1">Usucapião</p>
            <p className="text-gray-700">Forma de adquirir a propriedade de um bem (móvel ou imóvel) pelo uso contínuo e prolongado, de forma mansa e pacífica, como se fosse o verdadeiro dono, cumprindo os requisitos da lei.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <p className="font-semibold text-xl text-gray-800 mb-1">Habeas Corpus</p>
            <p className="text-gray-700">Ação constitucional utilizada para proteger o direito de ir e vir (liberdade de locomoção) de uma pessoa, quando ameaçado ou violado por ilegalidade ou abuso de poder.</p>
          </div>
          {/* Add more terms or pagination */}
        </div>
      </div>

       <p className="mt-12 mb-6 text-center text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


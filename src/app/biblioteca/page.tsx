import type { Metadata } from "next";
import { BookOpen, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: "Biblioteca - JusFácil",
  description: "Explore resumos e mapas mentais na Biblioteca JusFácil.",
};

export default function BibliotecaPage() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Biblioteca Inteligente</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        Bem-vindo à sua biblioteca jurídica pessoal! Aqui você encontrará resumos, mapas mentais e outros materiais de estudo, organizados por matéria e semestre, tudo em linguagem clara e acessível para facilitar sua compreensão.
      </p>

      {/* Search Bar Placeholder */}
      <div className="mb-8 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por matéria, tema ou palavra-chave..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Content Listing Placeholder */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Matérias Disponíveis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Card - Repeat for actual content */}
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
          <BookOpen className="w-8 h-8 text-yellow-600 mb-2" />
          <h3 className="text-xl font-semibold text-blue-800 mb-1">Direito Civil I</h3>
          <p className="text-gray-600 text-sm">Pessoa Natural, Bens, Fatos Jurídicos, Negócio Jurídico...</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
          <BookOpen className="w-8 h-8 text-yellow-600 mb-2" />
          <h3 className="text-xl font-semibold text-blue-800 mb-1">Direito Constitucional I</h3>
          <p className="text-gray-600 text-sm">Teoria da Constituição, Poder Constituinte, Controle...</p>
        </div>
         <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
          <BookOpen className="w-8 h-8 text-yellow-600 mb-2" />
          <h3 className="text-xl font-semibold text-blue-800 mb-1">Direito Penal I</h3>
          <p className="text-gray-600 text-sm">Princípios, Teoria do Crime, Tipicidade, Culpabilidade...</p>
        </div>
         <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
          <BookOpen className="w-8 h-8 text-yellow-600 mb-2" />
          <h3 className="text-xl font-semibold text-blue-800 mb-1">Direito Administrativo I</h3>
          <p className="text-gray-600 text-sm">Princípios, Atos Administrativos, Organização da Adm. Pública...</p>
        </div>
        {/* Add more cards as needed */}
      </div>

      <p className="mt-12 mb-6 text-center text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


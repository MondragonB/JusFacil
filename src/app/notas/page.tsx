import type { Metadata } from "next";
import { PlusCircle, Palette, Tag, AlertTriangle } from 'lucide-react'; // Icons for notes

export const metadata: Metadata = {
  title: "Bloco de Notas - JusFácil",
  description: "Suas anotações jurídicas organizadas em um só lugar.",
};

export default function NotasPage() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Bloco de Notas Jurídico</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        Capture ideias, resumos rápidos, dúvidas de aula ou insights de estágio. Organize suas anotações por cor, matéria ou urgência para encontrar tudo facilmente depois.
      </p>

      {/* Notes Area Placeholder */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-blue-800">Minhas Anotações</h3>
          <button className="flex items-center bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md">
            <PlusCircle className="w-5 h-5 mr-2" />
            Nova Nota
          </button>
        </div>

        {/* Example Note List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Note 1 - Example */}
          <div className="border border-yellow-300 bg-yellow-50 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200 flex flex-col justify-between h-48">
            <div>
              <p className="font-semibold text-gray-800 mb-2">Revisar Prazos Processuais</p>
              <p className="text-sm text-gray-700 line-clamp-4">Lembrar de checar a contagem de prazos em dias úteis no Novo CPC. Atenção especial aos prazos recursais...</p>
            </div>
            <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
              <span>#ProcessoCivil</span>
              <AlertTriangle className="w-4 h-4 text-red-500" /> {/* Removed title="Urgente" */}
            </div>
          </div>

          {/* Note 2 - Example */}
          <div className="border border-blue-300 bg-blue-50 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200 flex flex-col justify-between h-48">
             <div>
              <p className="font-semibold text-gray-800 mb-2">Ideia para TCC</p>
              <p className="text-sm text-gray-700 line-clamp-4">Explorar a aplicação da LGPD em pequenas empresas. Verificar jurisprudência recente e desafios práticos...</p>
            </div>
             <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
              <span>#LGPD #TCC</span>
              <Palette className="w-4 h-4 text-blue-500" /> {/* Removed title="Ideia" */}
            </div>
          </div>

           {/* Note 3 - Example */}
          <div className="border border-gray-300 bg-white rounded-lg p-4 hover:shadow-sm transition-shadow duration-200 flex flex-col justify-between h-48">
             <div>
              <p className="font-semibold text-gray-800 mb-2">Dúvida Aula Constitucional</p>
              <p className="text-sm text-gray-700 line-clamp-4">Qual a diferença exata entre controle difuso e concentrado na prática? Perguntar ao professor Eraldo ou pesquisar mais...</p>
            </div>
             <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
              <span>#Constitucional</span>
              <Tag className="w-4 h-4 text-gray-500" /> {/* Removed title="Dúvida" */}
            </div>
          </div>
          {/* Add more notes or pagination */}
        </div>
      </div>

       <p className="mt-12 mb-6 text-center text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


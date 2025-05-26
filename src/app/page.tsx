import Link from 'next/link';
import { BookOpen, Lightbulb, Calendar, Users, List, Diamond } from 'lucide-react'; // Using lucide-react for icons

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-4 mt-8">
        Bem-vindo ao JusFácil!
      </h1>
      <p className="text-lg text-gray-700 mb-10 max-w-3xl">
        Explore nossos recursos e ferramentas para facilitar seus estudos e aprimorar seus conhecimentos jurídicos. O Direito pode ser complexo, mas estamos aqui para descomplicar sua jornada.
      </p>

      {/* Feature Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
        {/* Biblioteca Card */}
        <Link href="/biblioteca" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="flex flex-col items-center">
            <BookOpen className="w-12 h-12 text-yellow-600 mb-3" />
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Biblioteca Inteligente</h2>
            <p className="text-gray-600 text-sm">Resumos, mapas mentais e mais, tudo em linguagem simples.</p>
          </div>
        </Link>

        {/* Quiz Card */}
        <Link href="/quiz" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="flex flex-col items-center">
            <Lightbulb className="w-12 h-12 text-yellow-600 mb-3" />
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Quiz Jurídico</h2>
            <p className="text-gray-600 text-sm">Teste seus conhecimentos e aprenda de forma divertida.</p>
          </div>
        </Link>

        {/* Agenda Card */}
        <Link href="/agenda" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="flex flex-col items-center">
            <Calendar className="w-12 h-12 text-yellow-600 mb-3" />
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Agenda Acadêmica</h2>
            <p className="text-gray-600 text-sm">Organize seus prazos, provas e trabalhos.</p>
          </div>
        </Link>

        {/* Comunidade Card */}
        <Link href="/comunidade" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-yellow-600 mb-3" />
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Comunidade</h2>
            <p className="text-gray-600 text-sm">Troque ideias e tire dúvidas com outros estudantes.</p>
          </div>
        </Link>

        {/* Glossário Card */}
        <Link href="/glossario" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="flex flex-col items-center">
            <List className="w-12 h-12 text-yellow-600 mb-3" /> {/* Changed icon for Glossário */}
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Glossário Descomplicado</h2>
            <p className="text-gray-600 text-sm">Entenda o &quot;juridiquês&quot; com exemplos práticos.</p>
          </div>
        </Link>

        {/* Área Premium Card */}
        <Link href="/premium" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
          <div className="flex flex-col items-center">
            <Diamond className="w-12 h-12 text-yellow-600 mb-3" />
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Área Premium</h2>
            <p className="text-gray-600 text-sm">Conteúdo exclusivo para turbinar seus estudos.</p>
          </div>
        </Link>
      </div>

      <p className="mt-10 mb-6 text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


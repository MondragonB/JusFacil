import Link from 'next/link';
import { Home, BookOpen, Lightbulb, Calendar, Users, List, Diamond, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors mr-6 mb-2 sm:mb-0">
          JusFácil
        </Link>
        <div className="flex flex-wrap items-center space-x-4 text-sm sm:text-base">
          <Link href="/biblioteca" className="flex items-center hover:text-blue-200 transition-colors">
            <BookOpen className="w-4 h-4 mr-1 sm:hidden md:inline-block" /> Biblioteca
          </Link>
          <Link href="/quiz" className="flex items-center hover:text-blue-200 transition-colors">
            <Lightbulb className="w-4 h-4 mr-1 sm:hidden md:inline-block" /> Quiz
          </Link>
          <Link href="/agenda" className="flex items-center hover:text-blue-200 transition-colors">
            <Calendar className="w-4 h-4 mr-1 sm:hidden md:inline-block" /> Agenda
          </Link>
          <Link href="/comunidade" className="flex items-center hover:text-blue-200 transition-colors">
            <Users className="w-4 h-4 mr-1 sm:hidden md:inline-block" /> Comunidade
          </Link>
          <Link href="/glossario" className="flex items-center hover:text-blue-200 transition-colors">
            <List className="w-4 h-4 mr-1 sm:hidden md:inline-block" /> Glossário
          </Link>
          <Link href="/premium" className="flex items-center hover:text-blue-200 transition-colors">
             <Diamond className="w-4 h-4 mr-1 sm:hidden md:inline-block" /> Premium
          </Link>
          <Link href="/login" className="flex items-center bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded transition-colors">
            <LogIn className="w-4 h-4 mr-1" /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


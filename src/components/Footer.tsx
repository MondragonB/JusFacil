import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} JusFácil. Todos os direitos reservados.
        </p>
        <p className="text-xs mb-3">
          Desenvolvido com dedicação por Diogo Santana Cardoso.
        </p>
        {/* Optional: Add links to terms, privacy, about */}
        <div className="flex justify-center space-x-4 text-xs">
          <Link href="/sobre" className="hover:text-blue-700 hover:underline">Sobre o JusFácil</Link>
          {/* <Link href="/termos" className="hover:text-blue-700 hover:underline">Termos de Uso</Link> */}
          {/* <Link href="/privacidade" className="hover:text-blue-700 hover:underline">Política de Privacidade</Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import type { Metadata } from "next";
import Link from 'next/link';
import { LogIn, Mail, KeyRound } from 'lucide-react'; // Added CircleUserRound for registration

export const metadata: Metadata = {
  title: "Login - JusFácil",
  description: "Acesse sua conta JusFácil ou crie uma nova.",
};

// Simple Google Icon component (replace with actual SVG or library if needed)
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
    <path fill="none" d="M0 0h48v48H0z"></path>
  </svg>
);

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-xl w-full max-w-md mt-8 mb-12 border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Acessar JusFácil</h1>
        <p className="text-gray-600 mb-8 text-center">
          Faça login para acessar seus materiais, progresso e participar da comunidade.
        </p>

        {/* Login Form */}
        <form className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>
          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Sua senha"
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Entrar
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">OU</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <button className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 ease-in-out shadow-sm hover:shadow mb-4">
          <GoogleIcon />
          Entrar com Google
        </button>
        {/* Add other social logins if needed (e.g., Apple, Facebook) */}

        {/* Registration Link */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Não tem uma conta?
          <Link href="/cadastro" className="font-medium text-blue-700 hover:text-blue-800 hover:underline ml-1">
            Cadastre-se aqui
          </Link>
        </p>
      </div>

       <p className="mt-4 mb-6 text-center text-gray-500 text-sm">
        Desenvolvido com dedicação por Diogo Santana Cardoso.
      </p>
    </div>
  );
}


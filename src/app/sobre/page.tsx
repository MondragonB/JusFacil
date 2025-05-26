import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o JusFácil - Criado por Diogo Santana Cardoso",
  description: "Conheça a história e o propósito por trás do JusFácil.",
};

export default function SobrePage() {
  return (
    <div className="px-4 flex flex-col items-center">
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-lg w-full max-w-3xl mt-8 mb-12 border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Sobre o JusFácil</h1>

        {/* Optional: Add an image here */}
        {/* <div className="flex justify-center mb-6">
          <Image
            src="/path/to/diogo_image.jpg" // Replace with actual path if image is available
            alt="Diogo Santana Cardoso"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div> */}

        <div className="text-center text-gray-700 space-y-4">
          <p className="text-lg">
            Desenvolvido com dedicação por <span className="font-semibold">Diogo Santana Cardoso</span>.
          </p>
          <p className="italic">
            Um estudante apaixonado por Direito, tecnologia e por ajudar outras pessoas a aprenderem com mais leveza, clareza e propósito.
          </p>
          <p className="mt-6">
            O JusFácil nasceu da percepção de que o universo jurídico, embora fascinante, muitas vezes se apresenta de forma complexa e intimidadora. Meu objetivo ao criar este espaço foi oferecer uma ferramenta prática, intuitiva e inspiradora, que sirva como um verdadeiro companheiro digital para estudantes e profissionais do Direito.
          </p>
          <p>
            Acredito que a tecnologia pode e deve ser usada para descomplicar o conhecimento e tornar jornadas desafiadoras, como a do Direito, mais acessíveis e prazerosas. Espero que o JusFácil seja útil em sua caminhada!
          </p>
        </div>
      </div>

       <p className="mt-4 mb-6 text-center text-gray-500 text-sm">
        JusFácil - Simplificando o Direito para você.
      </p>
    </div>
  );
}


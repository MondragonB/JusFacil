import React from 'react';
import Link from 'next/link';

export default function BibliotecaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Biblioteca JusFácil - Resumos Jurídicos</h1>
      
      <p className="mb-6">
        Bem-vindo à Biblioteca Inteligente do JusFácil! Aqui você encontrará resumos claros, 
        bem fundamentados e humanizados de todas as disciplinas do curso de Direito, organizados por período.
      </p>
      
      <p className="mb-8">
        Estes resumos foram criados para facilitar sua revisão e memorização, oferecendo uma 
        visão completa e didática dos principais conceitos de cada matéria.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">Navegação por Períodos</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">1º Período</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/biblioteca/periodo1/introducao-estudo-direito" className="text-blue-600 hover:underline">Introdução ao Estudo do Direito</Link></li>
          <li><Link href="/biblioteca/periodo1/historia-direito" className="text-blue-600 hover:underline">História do Direito</Link></li>
          <li><Link href="/biblioteca/periodo1/direito-linguagem-interpretacoes" className="text-blue-600 hover:underline">Direito, Linguagem e Interpretações</Link></li>
          <li><Link href="/biblioteca/periodo1/ciencia-politica-tge" className="text-blue-600 hover:underline">Ciência Política e Teoria Geral do Estado</Link></li>
          <li><Link href="/biblioteca/periodo1/sociologia-antropologia-juridica" className="text-blue-600 hover:underline">Sociologia e Antropologia Jurídica</Link></li>
          <li><Link href="/biblioteca/periodo1/pratica-extensionista" className="text-blue-600 hover:underline">Prática Extensionista Integradora</Link></li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">2º Período</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/biblioteca/periodo2/direito-civil-I" className="text-blue-600 hover:underline">Direito Civil I</Link></li>
          <li><Link href="/biblioteca/periodo2/direito-penal-I" className="text-blue-600 hover:underline">Direito Penal I</Link></li>
          <li><Link href="/biblioteca/periodo2/direito-constitucional-I" className="text-blue-600 hover:underline">Direito Constitucional I</Link></li>
          <li><Link href="/biblioteca/periodo2/teoria-geral-processo" className="text-blue-600 hover:underline">Teoria Geral do Processo</Link></li>
          <li><Link href="/biblioteca/periodo2/empreendedorismo-inovacao" className="text-blue-600 hover:underline">Empreendedorismo e Inovação</Link></li>
          <li><Link href="/biblioteca/periodo2/cidadania-sociodiversidade" className="text-blue-600 hover:underline">Cidadania, Sociodiversidade e Compromisso Social</Link></li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Próximos Períodos</h3>
        <p className="italic">Em breve, adicionaremos resumos para os demais períodos do curso!</p>
      </div>
      
      <hr className="my-8" />
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Sobre os Resumos</h2>
        <p className="mb-2">Cada resumo foi cuidadosamente elaborado para oferecer:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Visão geral clara</strong> dos principais conceitos da disciplina</li>
          <li><strong>Linguagem acessível</strong> e didática</li>
          <li><strong>Exemplos práticos</strong> para facilitar a compreensão</li>
          <li><strong>Referências bibliográficas</strong> para aprofundamento</li>
          <li><strong>Tom humanizado</strong> para tornar o estudo mais agradável</li>
        </ul>
        
        <p className="mt-6 font-semibold">Bons estudos!</p>
      </div>
    </div>
  );
}

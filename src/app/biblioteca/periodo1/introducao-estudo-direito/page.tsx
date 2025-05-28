import React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

// Esta é uma função de componente para exibir o conteúdo de um resumo específico
// Normalmente, buscaríamos o conteúdo de um banco de dados ou API
// Mas para este protótipo, vamos usar conteúdo estático

export default function IntroducaoEstudoDireito() {
  // Conteúdo do resumo em formato Markdown
  const content = `
# Resumo JusFácil: Introdução ao Estudo do Direito

E aí, pessoal! Diogo aqui! Vou compartilhar com vocês um resumo sobre **Introdução ao Estudo do Direito**, uma das matérias mais importantes do primeiro período de Direito. Ela é a base de tudo que vamos estudar ao longo do curso!

## O que é o Direito?

Antes de mais nada, precisamos entender o que é esse tal de "Direito". Existem várias definições, mas podemos dizer que o **Direito é um conjunto de normas de conduta social, imposto pelo Estado, que regula as relações humanas com o objetivo de garantir a ordem, a paz e a justiça na sociedade**.

O Direito surge da necessidade de organizar a vida em sociedade. Imaginem se cada um fizesse o que bem entendesse, sem regras? Seria o caos! Por isso, criamos normas para estabelecer limites e garantir direitos.

## Principais Características do Direito:

1. **Bilateralidade**: Envolve sempre pelo menos duas pessoas (um que tem o direito e outro que tem o dever).
2. **Imperatividade**: Suas normas são obrigatórias, não facultativas.
3. **Coercibilidade**: Pode ser imposto pela força, se necessário.
4. **Generalidade**: Aplica-se a todos que estão em situação semelhante.

## Fontes do Direito

As fontes do Direito são os "lugares" de onde ele surge. Elas podem ser:

- **Fontes Materiais**: São os fatores sociais, históricos, políticos, econômicos e culturais que influenciam a criação do Direito.
- **Fontes Formais**: São as formas como o Direito se manifesta. As principais são:
  - **Lei**: A fonte mais importante no sistema brasileiro (Civil Law).
  - **Jurisprudência**: Conjunto de decisões dos tribunais sobre determinado assunto.
  - **Doutrina**: Estudos e opiniões dos juristas.
  - **Costumes**: Práticas reiteradas aceitas como obrigatórias.
  - **Princípios Gerais do Direito**: Ideias fundamentais que orientam o sistema jurídico.

## Divisões do Direito

O Direito é dividido em várias áreas para facilitar seu estudo e aplicação:

1. **Direito Público vs. Direito Privado**:
   - **Direito Público**: Regula as relações em que o Estado é parte (Constitucional, Administrativo, Penal, etc.).
   - **Direito Privado**: Regula as relações entre particulares (Civil, Empresarial, etc.).

2. **Direito Material vs. Direito Processual**:
   - **Direito Material**: Define direitos e deveres (o que pode ou não ser feito).
   - **Direito Processual**: Estabelece como os direitos devem ser garantidos (o caminho para fazer valer o direito).

3. **Direito Objetivo vs. Direito Subjetivo**:
   - **Direito Objetivo**: É o conjunto de normas jurídicas (a lei em si).
   - **Direito Subjetivo**: É a faculdade que a pessoa tem de agir conforme a norma (o seu direito).

## Norma Jurídica

A norma jurídica é a unidade básica do Direito. Ela tem algumas características essenciais:

- **Estrutura**: Geralmente composta por preceito (conduta esperada) e sanção (consequência do descumprimento).
- **Validade**: Para ser válida, precisa ser criada pela autoridade competente, seguindo o procedimento correto e não pode contrariar normas superiores.
- **Vigência**: É o período em que a norma está em vigor (do início ao fim de sua existência).
- **Eficácia**: É a capacidade da norma de produzir efeitos concretos na sociedade.

## Ordenamento Jurídico

O ordenamento jurídico é o conjunto de todas as normas jurídicas válidas em um determinado tempo e espaço. No Brasil, ele é organizado hierarquicamente, com a Constituição Federal no topo.

## Aplicação do Direito

Quando surgem conflitos, o Direito precisa ser aplicado para resolvê-los. Isso envolve:

1. **Interpretação**: Entender o sentido e alcance da norma.
2. **Integração**: Preencher lacunas quando não há norma específica (usando analogia, costumes e princípios gerais).
3. **Decisão**: Aplicar a norma ao caso concreto.

## Hermenêutica Jurídica

É a ciência que estuda os métodos de interpretação do Direito. Os principais métodos são:

- **Gramatical**: Analisa o texto da lei.
- **Histórico**: Considera o contexto histórico da criação da lei.
- **Sistemático**: Interpreta a lei dentro do sistema jurídico como um todo.
- **Teleológico**: Busca a finalidade da lei.

## Conclusão

A Introdução ao Estudo do Direito nos dá as ferramentas básicas para entender todo o universo jurídico. É como aprender o alfabeto antes de ler um livro! Dominar esses conceitos fundamentais vai facilitar muito o estudo das disciplinas específicas que virão pela frente.

Espero que este resumo ajude vocês a entender melhor essa matéria tão importante! Qualquer dúvida, estamos juntos!

**Referências Principais:**
- REALE, Miguel. Lições Preliminares de Direito.
- NADER, Paulo. Introdução ao Estudo do Direito.
- DINIZ, Maria Helena. Compêndio de Introdução à Ciência do Direito.
`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/biblioteca" className="text-blue-600 hover:underline">
          ← Voltar para a Biblioteca
        </Link>
      </div>
      
      <article className="prose prose-lg max-w-none">
        <MDXRemote source={content} />
      </article>
      
      <div className="mt-8 pt-6 border-t">
        <Link href="/biblioteca" className="text-blue-600 hover:underline">
          ← Voltar para a Biblioteca
        </Link>
      </div>
    </div>
  );
}

export const SearchSection = () => {
  return (
    <div className="container">
      <div className="flex flex-col">
        <span className="text-primary text-4xl">1- Pesquisa e Descoberta</span>
        <span className="text-whiteS text-2xl">
          Foram feitas algumas pesquisas no intuito de descobrir qual o melhor
          modelo para este mercado.
        </span>
        <div className="grid grid-cols-2 items-center mt-8">
          <span className="text-whiteP text-3xl">Objetivos</span>
          <span className=" text-whiteS text-2xl">
            O meu objetivo com o projeto foi como transformar uma tarefa que
            muitas vezes parece entediante, em algo simples e completo para o
            usuário que está procurando um serviço quanto para o prestador.
          </span>
        </div>
        <div className="grid grid-cols-2 items-center mt-8">
          <span className="text-whiteP text-3xl">Análise de competição</span>
          <span className=" text-whiteS text-2xl">
            Foram analisados quais seriam nossos concorrentes diretos e
            indiretos, e como poderíamos melhorar e aperfeiçoar seus produtos.
          </span>
        </div>
        <div className="grid grid-cols-2 items-center mt-8">
          <span className="text-whiteP text-3xl">Entrevista com usuários:</span>
          <span className=" text-whiteS text-2xl">
            Nesta etapa foram feitas várias perguntas a prestadores de serviços,
            como exemplo: <br />
            Como você organiza seus horários? <br />
            Onde você divulga seus serviços?
            <br />
            Atende sozinho ou com mais colaboradores?
            <br /> Qual o seu maior problema com agendas?
            <br /> Como você gostaria que fosse uma agenda perfeita?
          </span>
        </div>
      </div>
    </div>
  );
};

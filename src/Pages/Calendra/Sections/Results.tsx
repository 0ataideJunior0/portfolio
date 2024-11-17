import Image from "next/image";

import UserTesting from "@/assets/images/UserTesting.png";

export const ResultsSection = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col">
        <span className="text-primary text-4xl">4- Entrega e Resultado</span>
        <span className="text-whiteS text-2xl">
          Após a prototipagem do projeto, vários testes foram realizados e a
          entrega foi feita!
        </span>
      </div>
      <div className="mt-4 flex flex-col">
        <span className="text-whiteP text-3xl">Teste de usabilidade</span>
        <span className="text-whiteP text-xl">
          Foi conduzido um teste de usabilidade qualitativo com quatro
          participantes por meio de live no Discord. As tarefas estavam
          relacionadas se o usuário seria capaz de realizar um agendamento por
          conta própria. O objetivo foi identificar as dificuldades dos usuários
          em telas mais complexas.
        </span>
        <span className="text-whiteP text-2xl mt-6">
          Todos os usuários conseguiram completar as tarefas designadas com
          máximo aproveitamento.
        </span>
        <div className="grid grid-cols-2">
          <span className="text-green-500 text-6xl flex justify-center">
            100% de acerto.
          </span>
          <span className="text-rose-600 text-6xl flex justify-center">
            0 Erros.
          </span>
        </div>
        <Image
          src={UserTesting}
          alt="UserTesting"
          className="rounded-lg mt-5"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-whiteP text-3xl">Entrega</span>
        <span className="text-whiteS text-2xl">
          Com o sucesso dos testes, finalmente o projeto deu andamento na fase
          de programação, e em breve estará disponível na AppStore e PlayStore.
        </span>
      </div>
    </div>
  );
};

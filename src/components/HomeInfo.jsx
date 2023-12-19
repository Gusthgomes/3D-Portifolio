import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Olá, eu sou
        <span className='font-semibold mx-2 text-white'>Gustavo Gomes</span>
        👋
        <br />
        Futuro engenheiro de software no Brasil
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Trabalho com desenvolvimento web e mobile <br /> e estou sempre em busca de novas soluções e ideias
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Saiba mais
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Já desenvolvi projetos para uma pizzaria, sistemas de gestão, tickets, entre outros, ficou curioso ?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visitie o meu portifólio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Visite o meu GitHub e veja os meus projetos
      </p>

      <Link to='https://github.com/Gusthgomes' className='neo-brutalism-white neo-btn'>
        Ir para o GitHub
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;

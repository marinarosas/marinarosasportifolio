import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const formations = [
  {
    title: "Web Fullstack",
    time: "Finished",
    place: "Labenu",
    location: "Online",
    date: "Ago de 2022 - Mar de 2023",
  },
  {
    title: "Graduação em Gastronomia",
    time: "Finished",
    place: "Universidade Potiguar",
    location: "RN",
    date: "Ago de 2016 - Ago de 2018",
  },
  {
    title: "Pós Graduação em Cinema, Rádio e TV.",
    time: "Finished",
    place: "Centro Universitário Belas Artes",
    location: "SP",
    date: "Ago de 2012 - Jan de 2015",
  },
  {
    title: "Curso Técnico de Fotografia",
    time: "Finished",
    place: "Senac",
    location: "SP",
    date: "Jul 2012 - Ago 2014",
  },
  {
    title: "Graduação em Cinema",
    time: "Finished",
    place: "Universidade Anhembi Morumbi",
    location: "SP",
    date: "Fev de 2008 - Jul de 2012",
  },
];

const jobs = [
  {
    title: "Desenvolvedora FullStack",
    time: "Full time",
    place: "Interas Gestão em Tecnologia",
    location: "RN",
    date: "Abr de 2023 - Atual",
  },
  {
    title: "Coordenadora do projeto",
    time: "Freelancer",
    place: "Event Plus",
    location: "RN",
    date: "Jan de 2022 - Atual",
  },
  {
    title: "Editor de Vídeo",
    time: "Full time",
    place: "Vicente Piserni Filmes",
    location: "SP",
    date: "Mar de 2014 - Out de 2016",
  },
  {
    title: "Assistente de Fotografia",
    time: "Full time",
    place: "Estúdio Gastronômico",
    location: "SP",
    date: "Jan de 2014 - Out de 2016",
  },
];

const languages = [
  {
    type: "Português",
    level: "Nativo",
  },
  {
    type: "Inglês",
    level: "Intermediário",
  },
  {
    type: "Espanhol",
    level: "Avançado",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-8 pt-12 px-12">
      <div className="flex flex-col pb-4 text-base font-medium leading-6 text-gray-600">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Quem sou eu</h1>
        <p className="mb-4 leading-8">
          Sou desenvolvedora fullstack, com mais de um ano de experiência na
          área, sou formada no curso de Web Full Stack, tendo experiência em
          projetos práticos individuais e em grupo, utilizando tecnologias como
          HTML, CSS, JavaScript, React, Node Js, TypeScript, POO, SQL, Jest e
          outras. Hoje trabalho em um empresa de TI, chamada Interas Tecnologia,
          onde sou responsável por desenvolver plataformas do zero utilizando o
          Figma, criando softwares e sites com Next, React, Typescript e outras
          ferramentas, estou também aprendendo a desenvolver aplicações mobiles
          com React Native.
          <br /> <br /> Sou cineasta, pós-graduada em Rádio e Tv, fotografa e
          editora de vídeos há 7 anos, com experiência profissional. Sempre
          gostei de design e estudando UI/UX, acabei me aprofundando no tema,
          atuei em projetos como consultora, desenvolvi pesquisas do usuário,
          participei de alguns Hackathons e foi no meu segundo evento pela
          Prefeitura de Guarulhos, no qual fiquei entre os 4 primeiros
          colocados, que um membro da equipe me apresentou o desenvolvimento
          frontend e tive a oportunidade de acompanhar a aplicação que desenhei
          virar realidade.
          <br /> <br /> Foi nesse momento da minha transição de carreira que
          entendi o porque a tecnologia entrou na minha vida, por gostar da
          parte criativa do UI encontrei uma profissão que faz o design, mas
          através de códigos, e foi nesse Hackathon eu tive certeza que queria
          me tornar uma Dev. Com isso iniciei meus estudos no bootcamp de
          desenvolvimento web fullstack, participei de mais hackathons, chegando
          a ganhar o do Rio Empreender Criativo, com o projeto Donko, um app de
          localização de cultura no RJ.
          <br /> <br /> Em abril de 2023 firmei minha transição de carreira
          através da minha primeira contratação na área, onde aprendi muito e
          ainda venho aprendendo, não só sobre tecnologias novas, mas sobre
          resiliência, trabalho em equipe, união, autogerenciamento, empatia e
          muito outros aspectos que me fazem ser a profissional de hoje.
        </p>
      </div>

      {/* Experiências Profissionais */}
      <div className="flex flex-col w-full pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Experiências Profissionais
        </h1>
        <div>
          {/* Itens */}
          {jobs.map((job) => {
            return (
              <>
                <div
                  className="flex justify-between items-center pb-4 text-base font-medium w-full lg:w-2/3 mt-4"
                  key={job.title}
                >
                  <h2 className="text-xl font-bold text-gray-500 w-1/2">
                    {job.title}
                  </h2>
                  {/* <span className="py-2 px-4 bg-green-200 flex items-center justify-center text-green-600 rounded-full shadow-md">
                    {job.time}
                  </span> */}
                </div>
                <div className="flex flex-col lg:flex-row w-full lg:w-2/3 justify-between text-gray-500">
                  <div className="flex gap-2">
                    <span className="flex justify-center items-center gap-2">
                      <BsBuilding />
                      <a href="#">{job.place}</a>
                    </span>
                    <span className="flex justify-center items-center gap-1">
                      {"/"}
                      <IoLocationOutline />
                      <a href="#">{job.location}</a>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex justify-center items-center gap-2">
                      <FaRegCalendarAlt />
                      <p>{job.date}</p>
                    </span>
                  </div>
                </div>
                <div className="border-b border-gray-300 w-full lg:w-2/3 pt-4"></div>
              </>
            );
          })}
        </div>
      </div>

      {/* Formações */}
      <div className="flex flex-col w-full pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Formações</h1>
        <div>
          {/* Itens */}
          {formations.map((formation) => {
            return (
              <>
                <div
                  className="flex justify-between items-center pb-4 text-base font-medium w-full lg:w-2/3 mt-4"
                  key={formation.title}
                >
                  <h2 className="text-xl font-bold text-gray-500 w-1/2">
                    {formation.title}
                  </h2>
                  {/* <span className="py-2 px-4 bg-green-200 flex items-center justify-center text-green-600 rounded-full shadow-md">
                    {formation.time}
                  </span> */}
                </div>
                <div className="flex flex-col lg:flex-row w-full lg:w-2/3 justify-between text-gray-500">
                  <div className="flex gap-2">
                    <span className="flex justify-center items-center gap-2">
                      <BsBuilding />
                      <a href="#">{formation.place}</a>
                    </span>
                    <span className="flex justify-center items-center gap-1">
                      {"/"}
                      <IoLocationOutline />
                      <a href="#">{formation.location}</a>
                    </span>
                  </div>
                  <div className="flex gap-2">

                  <span className="flex justify-center items-center gap-2">
                    <FaRegCalendarAlt />
                    <p>{formation.date}</p>
                  </span>
                  </div>
                </div>
                <div className="border-b border-gray-300 w-full lg:w-2/3 pt-4"></div>
              </>
            );
          })}
        </div>

        {/* <!-- Repita a estrutura acima para as demais formações --> */}
      </div>

      {/* Idiomas */}
      <div className="flex flex-col w-full pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Idiomas</h1>
        <div>
          {/* Itens */}
          {languages.map((language) => {
            return (
              <>
                <div
                  className="flex justify-between items-center pb-4 text-base font-medium w-full lg:w-2/3 mt-4"
                  key={language.type}
                >
                  <h2 className="text-xl font-bold text-gray-500">
                    {language.type}
                  </h2>
                  <span className="py-2 px-4 bg-green-200 flex items-center justify-center text-green-600 rounded-full shadow-md">
                    {language.level}
                  </span>
                </div>
                <div className="border-b border-gray-300 w-full lg:w-2/3 pt-4"></div>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}

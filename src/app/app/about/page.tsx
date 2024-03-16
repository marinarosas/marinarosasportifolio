import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const formations = [
  {
    title: "Desenvolvedora Fullstack",
    time: "Full time",
    place: "Labenu",
    location: "Online",
    date: "Ago de 2022 - Mar de 2023",
  },
  {
    title: "Graduação em Gastronomia",
    time: "Full time",
    place: "Universidade Potiguar",
    location: "RN",
    date: "Ago de 2016 - Ago de 2018",
  },
  {
    title: "Pós Graduação em Cinema, Rádio e TV.",
    time: "Part time",
    place: "Centro Universitário Belas Artes",
    location: "SP",
    date: "Ago de 2012 - Jan de 2015",
  },
  {
    title: "Curso Técnico de Fotografia",
    time: "Part time",
    place: "Senac",
    location: "SP",
    date: "Jul 2012 - Ago 2014",
  },
  {
    title: "Graduação em Cinema",
    time: "Part time",
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
      {/* Quem eu sou */}
      <div className="flex flex-col pb-4 text-base font-medium leading-6 text-gray-600">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Quem sou eu</h1>
        <p className="mb-4 leading-8">
          Sou desenvolvedora Fullstack, trabalho na área a mais de 1 ano e sou formada no curso de Web Full Stack,
          na Labenu. Na minha carreira tenho experiência em projetos práticos individuais e em
          grupo, utilizando tecnologias como HTML, CSS, JavaScript, React, SQL,
          Node Js, Next, Jest, TypeScript e outras. <br/> Sou pós-graduada em Cinema, Rádio
          e Tv, fotógrafa e editora de vídeos há 7 anos. Sempre gostei de
          design, usando o Photoshop, Figma ou Canva, e estudando UI/UX me
          deparei com Frontend e tive certeza que dali pra frente queria me
          tornar uma Dev.
        </p>
      </div>

{/* Experiências Profissionais */}
<div className="flex flex-col w-full pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Experiências Profissionais</h1>
        <div>
          {/* Itens */}
          {jobs.map((job) => {
            return (
              <>
                <div
                  className="flex justify-between items-center pb-4 text-base font-medium w-2/3 mt-4"
                  key={job.title}
                >
                  <h2 className="text-xl font-bold text-gray-500">
                    {job.title}
                  </h2>
                  <span className="py-2 px-4 bg-green-200 flex items-center justify-center text-green-600 rounded-full shadow-md">
                    {job.time}
                  </span>
                </div>
                <div className="flex w-2/3 justify-between text-gray-500">
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
                  <span className="flex justify-center items-center gap-2">
                    <FaRegCalendarAlt />
                    <p>{job.date}</p>
                  </span>
                </div>
                <div className="border-b border-gray-300 w-2/3 pt-4"></div>
              </>
            );
          })}
        </div>

        {/* <!-- Repita a estrutura acima para as demais formações --> */}
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
                  className="flex justify-between items-center pb-4 text-base font-medium w-2/3 mt-4"
                  key={formation.title}
                >
                  <h2 className="text-xl font-bold text-gray-500">
                    {formation.title}
                  </h2>
                  <span className="py-2 px-4 bg-green-200 flex items-center justify-center text-green-600 rounded-full shadow-md">
                    {formation.time}
                  </span>
                </div>
                <div className="flex w-2/3 justify-between text-gray-500">
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
                  <span className="flex justify-center items-center gap-2">
                    <FaRegCalendarAlt />
                    <p>{formation.date}</p>
                  </span>
                </div>
                <div className="border-b border-gray-300 w-2/3 pt-4"></div>
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
                  className="flex justify-between items-center pb-4 text-base font-medium w-2/3 mt-4"
                  key={language.type}
                >
                  <h2 className="text-xl font-bold text-gray-500">
                    {language.type}
                  </h2>
                  <span className="py-2 px-4 bg-green-200 flex items-center justify-center text-green-600 rounded-full shadow-md">
                    {language.level}
                  </span>
                </div>
                <div className="border-b border-gray-300 w-2/3 pt-4"></div>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}

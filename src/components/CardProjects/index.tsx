"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  srcImage: string;
  altImage: string;
}

export function CardProjects() {
  function handleOpenNewPage(urlLink: string) {
    const url = urlLink;
    window.open(url, "_blank");
  }

  const projects = [
    {
      image: "/Interas.png",
      title: "Interas Tecnologia Website",
      about:
        "O site foi feita em conjunto com o Frabricio Dantas, eu fui responsável pela página Easy Dev do site e o footer.",
      stacks: "React, Typescript, Tailwind, Shadcn, SplideJs and CSS.",
      link: "https://interas.com.br/interas/rpa",
      linkGit: "",
      placeWork: "Interas",
      siteWork: "https://www.interas.com.br/",
      year: "2024",
    },
    {
      image: "/CapaSitePotyguaraVerse.png",
      title: "Potyguara Verse (Projeto da Event Plus)",
      about:
        "O site está em desenvolvimento, sou responsável pela construção do site, do backend ao frontend.",
      stacks: "React, Typescript, Tailwind, Shadcn, SplideJs and CSS.",
      link: "https://potyguara-verse-site.vercel.app/",
      linkGit: "",
      placeWork: "Event Plus",
      siteWork: "https://potyguara-verse-site.vercel.app/",
      year: "2024",
    },
    {
      image: "/iconeTela.png",
      title: "Site Ícone Energia",
      about: "O site da empresa Ícone foi feita em conjunto com o Frabricio Dantas, eu fui responsável pela página referente ao sobre do site e o footer.",
      stacks: "React, Typescript, Chakra UI, Swipper e CSS.",
      link: "https://iconeenergia.com.br/sobre",
      linkGit: "",
      placeWork: "Interas",
      siteWork: "https://www.interas.com.br/",
      year: "2023",
    },
    {
      image: "/1679941023599.gif",
      title: "Aplicativo Donko",
      about: "Donko foi o aplicativo vencedor do Hackathon Rio Empreender Criativo, uma plataforma para auxiliar as pessoas a encontrar eventos culturais na palma da mão, utilizando o mapa para mostrar o evento mais perto do usuário.",
      stacks: "React, Typescript e CSS.",
      link: "https://linktr.ee/sambia?utm_source=linktree_admin_share",
      linkGit: "https://github.com/SahBianchi/hackrio-front",
      placeWork: "Hackathon Rio Empreender Criativo",
      siteWork: "",
      year: "2023",
    },
    {
      image: "/labook.png",
      title: "Projeto Labook Backend",
      about:
        "O Labook é uma rede social com o objetivo de promover a conexão e interação entre pessoas. Quem se cadastrar no aplicativo poderá criar e curtir publicações.",
      stacks:
        "SQL, SQLite, TypeScript, POO, <br /> Express, Knex, Arquitetura em Camadas, UUID, Hashes, Roteamento e Postman",
      link: "",
      linkGit: "https://github.com/marinajaudy/projeto-labook-backend",
      placeWork: "Labenu",
      siteWork: "https://www.instagram.com/labenu_/",
      year: "2023",
    },
    {
      image: "/labecommerce.png",
      title: "Projeto Labecommerce Backend",
      about:
        "Primeiro projeto do back-end, onde pratico toda a base de criação de uma API vinculada a um banco de dados real.",
      stacks: "SQL, SQLite, TypeScript, POO, Express, Knex e Postman",
      link: "",
      linkGit: "https://github.com/marinajaudy/labecommerce-backend",
      placeWork: "Labenu",
      siteWork: "https://www.instagram.com/labenu_/",
      year: "2023",
    },
    {
      image: "/1675254420010.gif",
      title: "Projeto React APIs",
      about:
        "O objetivo deste projeto é criar um site com três páginas usando a PokeApi - API com as seguintes ferramentas: React, React Router, Styled-components, React Context e Axios.",
      stacks:
        "HTML, JavaScript, React, React Router, Styled-components, React Context e Axios",
      link: "https://projeto-react-apis-chi.vercel.app/",
      linkGit: "https://github.com/marinajaudy/projeto-react-apis",
      placeWork: "Labenu",
      siteWork: "https://www.instagram.com/labenu_/",
      year: "2022",
    },
    {
      image: "/projetoReact.png",
      title: "Projeto FrontEnd React",
      about:
        "Esse projeto tem como objetivo a introdução aos fundamentos do React, através da construção de um E-Commerce.",
      stacks: "React, JavaScript, HTML, Style-Components",
      link: "https://astro-tshirts.surge.sh/",
      linkGit: "https://github.com/marinajaudy/projeto-frontendreact",
      placeWork: "Lebenu",
      siteWork: "https://www.instagram.com/labenu_/",
      year: "2022",
    },
    {
      image: "/projectintroweb.png",
      title: "Projeto Intro Web",
      about:
        "O objetivo foi construir uma página estilizada, e com lista e busca utilizando manipulação de DOM. Usei HTML, CSS, JavaScript and DOM para construir as funções da minha página.",
      stacks: "HTML, JavaScript, CSS, DOM",
      link: "https://marinajaudy.github.io/projeto-intro-web/",
      linkGit: "https://github.com/marinajaudy/projeto-intro-web",
      placeWork: "Labenu",
      siteWork: "https://www.instagram.com/labenu_/",
      year: "2022",
    },
    {
      image: "/meuportifolio.png",
      title: "Meu Portifolio (Versão Anterior)",
      about:
        "O objetivo é reproduzir um site portfólio através de um template pronto do Figma, onde usei HTML and CSS para construir as funcionalidades da minha página.",
      stacks: "HTML, CSS",
      link: "https://projetoportifolio-topaz.vercel.app/",
      linkGit: "https://github.com/marinajaudy/projetoportifolio",
      placeWork: "Labenu",
      siteWork: "https://www.instagram.com/labenu_/",
      year: "2022",
    },
    {
      image: "/adoteumhorta.png",
      title: "Adote uma Horta",
      about:
        "Projeto realizado como UI/UX designer no Hackathon Cidades Sustentáveis em junho de 2022, onde utilizei o Figma para criar o design e prototipar",
      stacks: "Figma",
      link: "https://www.figma.com/file/3mDm9mW4K6qPSUzuYx5czk/Adote-uma-Horta?type=design&node-id=0-1&mode=design&t=32yXP5gTuFENcWrC-0",
      linkGit: "",
      placeWork: "Hackthon Cidades Sustentáveis",
      siteWork: "",
      year: "2022",
    },
    {
      image: "/telasServicoFunerarios.png",
      title: "Serviços Funerários",
      about:
        "Projeto realizado como UI/UX designer no Hackathon Experimenta Serviços Públicos de Guarulhos em maio de 2022, onde utilizei o Adobe Ux para criar o design e prototipar.",
      stacks: "Adobe XD",
      link: "https://youtu.be/iwkqwzvobQY",
      linkGit: "",
      placeWork: "Hackathon Experimenta",
      siteWork: "",
      year: "2022",
    },
    {
      image: "/minasabordo.png",
      title: "Minas Abordo",
      about:
        "Projeto realizado como UI/UX designer no Hackathon Ade Sampa em janeiro de 2022, onde utilizei o Figma para criar o design e prototipar.",
      stacks: "Figma",
      link: "https://www.figma.com/file/nPINxd2hMGjlHqflSzTjHZ/App-Hacka?t=Kxh8WEYiTOTkGgqz-0",
      linkGit: "",
      placeWork: "Hackathon Ade Samp",
      siteWork: "",
      year: "2022",
    },
  ];
  return (
    <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((project) => {
        return (
          <div
            key={project.title}
            className="flex flex-col justify-between bg-gray-100 w-full lg:w-96 rounded-2xl shadow-lg overflow-hidden border-2"
          >
            <div className="bg-white flex justify-center items-center rounded-t-2xl cover">
              <Image
                src={project.image}
                width={384}
                height={587}
                alt="Imagem da Tela"
                className="w-fit rounded-t-xl h-64 object-cover"
              />
            </div>

            <div className="grid grid-rows-5 h-full pt-4 justify-center items-center gap-1">
              <h1 className="row-span-1 font-bold w-full px-4 text-lg">
                {project.title}
              </h1>

              <p className="row-span-2 text-sm px-4 h-full">{project.about}</p>

              <div className="row-span-1 flex pr-4 text-sm">
                <Link
                  href=""
                  onClick={() => handleOpenNewPage(project.siteWork)}
                  passHref
                  className="flex gap-2 w-full px-4  text-sm hover:cursor-pointer items-center"
                >
                  <FaRegBuilding />
                  {project.placeWork}
                </Link>
                <span>{project.year}</span>
              </div>

              <div className="row-span-2 flex w-full h-full items-center text-blue-800">
                <h4 className="min-w-fit px-4 text-sm font-semibold">
                  Tech stack:
                </h4>
                <span className="pr-4 text-xs">{project.stacks}</span>
              </div>

              <div className="row-span-1 flex w-full justify-between pt-4">
                {project.link !== "" && (
                  <Link
                    href=""
                    onClick={() => handleOpenNewPage(project.link)}
                    passHref
                    className="flex min-w-fit px-4 pb-4 gap-2 text-sm hover:cursor-pointer"
                  >
                    <CiLink />
                    Project Link
                  </Link>
                )}

                {project.linkGit !== "" && (
                  <Link
                    href=""
                    onClick={() => handleOpenNewPage(project.linkGit)}
                    passHref
                    className="flex min-w-fit px-4 pb-4 gap-2 text-sm hover:cursor-pointer"
                  >
                    <FaGithub />
                    Code Link
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

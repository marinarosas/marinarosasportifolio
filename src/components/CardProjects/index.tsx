"use client";

import * as React from "react";

interface Props {
    title: string
    description: string
    srcImage: string
    altImage: string
}

export function CardProjects() {
  return (
    <div className="bg-gray-100 w-96 h-[40rem] rounded-2xl flex flex-col justify-between shadow-lg overflow-hidden border-2 border-green-500">
      <div className="bg-white flex justify-center items-center border-2 border-blue-700">
        <img
          src="/labook.png"
          alt="Imagem da Tela"
          className="w-fit-content rounded-t-xl"
        />
      </div>

      <div className="border-2 border-red-600 flex flex-col justify-center items-center">
        <h2 className="border-2 border-purple-600">
          Projeto Labook Backend
        </h2>

        <p className="border-2 border-yellow-500 px-4">
          O Labook é uma rede social com o objetivo de promover a conexão e
          interação entre pessoas. Quem se cadastrar no aplicativo poderá criar
          e curtir publicações.
        </p>

        <div className="flex text-blue-800 border-2 border-orange-500">
          <h4 className="border-2 border-pink-500">
            Tech stack:
          </h4>
          <span>
            SQL, SQLite, TypeScript, POO, <br /> Express, Knex, Arquitetura em
            Camadas, UUID, Hashes, Roteamento e Postman
          </span>
        </div>

        <div className="flex justify-between border-2 border-fuchsia-500">
          {/* <!-- Add Tailwind classes for your link project elements --> */}
        </div>
      </div>
    </div>
  );
}

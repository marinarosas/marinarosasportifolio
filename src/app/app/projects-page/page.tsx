import { CardProjects } from "@/components/CardProjects";
import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


export default function ProjectsPage() {
  return (
    <main className="flex h-full flex-col">
      <div className="pt-12 pl-10 lg:pl-14">
        <h1 className="text-4xl text-blue-900 pb-2 font-bold">
          Meus Projetos
        </h1>
        <h3 className="text-base text-gray-500">
          Trabalho e projeto feitos
        </h3>
      </div>
      <div className="px-10 lg:px-14 py-8 flex justify-center w-full">
      <CardProjects/>
      </div>
    </main>
  );
}

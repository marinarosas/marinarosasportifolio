import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const iconStack = [
  {
    srcImage: "/html5icon.svg",
    altImage: "Icone Html5",
    title: "HTML5",
    className: "size-24",
  },
  {
    srcImage: "/cssicon.svg",
    altImage: "Icone CSS3",
    title: "CSS3",
    className: "size-24",
  },
  {
    srcImage: "/javascripticon.svg",
    altImage: "Icone JavaScript",
    title: "JavaScript",
    className: "size-24",
  },
  {
    srcImage: "/typescript.svg",
    altImage: "Icone TypeScript",
    title: "TypeScript",
    className: "size-24",
  },
  {
    srcImage: "/vscodeicon.svg",
    altImage: "Icone VsCode",
    title: "VS Code",
    className: "size-24",
  },
  {
    srcImage: "/reacticon.svg",
    altImage: "Icone React",
    title: "React",
    className: "size-24",
  },
  {
    srcImage: "/reacticon.svg",
    altImage: "Icone React Native",
    title: "React Native",
    className: "size-24",
  },
  {
    srcImage: "/nextJs.svg",
    altImage: "Icone Next Js",
    title: "Next Js",
    className: "size-24",
  },
  {
    srcImage: "/giticon.svg",
    altImage: "Icone Git",
    title: "Git",
    className: "size-24",
  },

  {
    srcImage: "/githubicon.svg",
    altImage: "Icone Github",
    title: "Github",
    className: "size-24",
  },
  {
    srcImage: "/tailwind.svg",
    altImage: "Icone Tailwind",
    title: "Tailwind",
    className: "size-24",
  },
  {
    srcImage: "/chakraui.svg",
    altImage: "Icone Chakra",
    title: "Chaka UI",
    className: "size-24",
  },
  {
    srcImage: "/styledcomponents.png",
    altImage: "Icone Styled Componentst",
    title: "Styled Componentst",
    className: "size-24",
  },
  {
    srcImage: "/photoshop.png",
    altImage: "Icone Adobe Photoshop",
    title: "Adobe Photoshop",
    className: "size-24",
  },
  {
    srcImage: "/figmalogo.png",
    altImage: "Icone Figma",
    title: "Figma",
    className: "size-24",
  },
  {
    srcImage: "/mySql.svg",
    altImage: "Icone My Sql",
    title: "My SQL",
    className: "size-24",
  },
  {
    srcImage: "/postman.svg",
    altImage: "Icone Postman",
    title: "Postman",
    className: "size-24",
  },
  {
    srcImage: "/insominia.svg",
    altImage: "Icone Insomnia",
    title: "Insomnia",
    className: "size-24",
  },
];

export default function AboutPage() {
  return (
    <main className="flex h-[88vh] flex-col">
      <div className="pt-12 pl-14">
        <h1 className="text-4xl text-blue-900 pb-2 font-bold">
          Minha Tech Stack
        </h1>
        <h3 className="text-base text-gray-500">
          Tecnologias que eu venho trabalhando recentemente
        </h3>
      </div>
      <div className="px-4 py-12 grid grid-cols-6 grid-rows-3 place-content-center gap-16">
        {iconStack.map((icon) => {
          return (
            <div
              key={icon.srcImage}
              className="flex flex-col justify-center items-center gap-2"
            >
              <img
                src={icon.srcImage}
                alt={icon.altImage}
                className={icon.className}
              />
              <p>{icon.title}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

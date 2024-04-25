import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-1 flex-col justify-center items-center px-6 lg:px-0">
        <h1 className="hidden lg:block text-3xl lg:text-5xl text-blue-900 pb-2 font-bold text-center">
          Para entrar em contato comigo, envie um e-mail para:
        </h1>
        <h1 className="block lg:hidden text-3xl lg:text-5xl text-blue-900 pb-2 font-bold text-center">
          Para entrar em <br/> contato comigo, <br/> envie um e-mail para:
        </h1>
        <h3 className="text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          marinarrjaudy@hotmail.com
        </h3>
      </div>
      <footer className="flex flex-col lg:flex-row h-fit w-full justify-between items-center px-12 py-4 space-y-4 lg:space-y-0 sticky bottom-0">
        <a href="#" className="text-3xl font-semibold">
          {"{MJ}"}
        </a>
        <div className="text-sm space-x-2 flex flex-col lg:flex-row w-full lg:w-fit items-center space-y-4 lg:space-y-0">
          <a
            href="https://api.whatsapp.com/send/?phone=5584981249920&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <span className="w-fit">+55 84 98124 9920</span>
          </a>
          <span className="w-fit">marinarrjaudy@hotmail.com</span>
        </div>

        <div className="text-sm space-x-1 flex items-center flex-col lg:flex-row w-full lg:w-fit space-y-4 lg:space-y-0">
          <span>Designed e desenvolvido por </span>
          <div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              Marina Jaudy{" "}
            </span>
            <span>com </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              Amor & Café
            </span>
          </div>

          <div className="flex pl-4 gap-1">
            <a href="https://github.com/marinajaudy" target="_blank">
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/marina-jaudy-599b11a9/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

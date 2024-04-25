import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex flex-col-reverse lg:flex-row justify-between font-poppins items-center text-[#42446e] px-8 py-16 lg:py-0">
          <h1 className="hidden lg:block text-5xl font-bold leading-tight">
            Olá 👋, <br />
            Meu nome é <br />
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Marina Rosas
            </span>
            <br />E eu sou desenvolvedora fullstack.
          </h1>
          <h1 className="block lg:hidden text-4xl font-bold leading-tight px-10 text-center">
            Olá 👋, <br/> meu nome é <br />
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Marina Rosas
            </span>
            <br />e eu sou desenvolvedora fullstack.
          </h1>
          <div className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-transparent h-[22rem] w-[22rem]">
            <img
              src="/Marinasquare.png"
              alt="Imagem de Perfil"
              className="rounded-full p-4 filter h-[22rem] w-[22rem] grayscale-[100%]"
            />
          </div>
    </main>
  );
}

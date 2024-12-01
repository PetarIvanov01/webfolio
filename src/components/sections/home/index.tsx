import Image from "next/image";

export default function Home() {
  return (
    <section className="py-8 flex flex-col-reverse items-center gap-6 md:flex-row md:pb-0 md:pt-10 md:items-start md:gap-12">
      <div className="flex-1 h-64 text-center md:text-left flex flex-col justify-center">
        <p className="flex flex-col gap-2 bg-gradient-to-r from-[#87b7f8] via-[#d2d9e1] to-[#87b7f8] bg-clip-text text-transparent font-semibold transform">
          <span className="text-4xl md:text-4xl font-bold">I`m</span>
          <span className="md:transform-none text-3xl md:text-3xl font-extrabold transform rotate-[2deg]">
            Petar Ivanov
          </span>
          <span className="md:mt-2 md:transform-none italic bg-gradient-to-r from-[#34d399] via-[#6ee7b7] to-[#a7f3d0] bg-clip-text text-transparent text-2xl md:text-3xl font-medium transform rotate-[-2deg]">
            JavaScript Developer going for
          </span>
          <span className="md:mb-2 md:transform-none italic text-2xl md:text-3xl text-[#34d399] font-medium transform rotate-[2deg]">
            Fullstack.
          </span>
        </p>

        <div className="md:mt-auto mt-6">
          <a
            href="#projects"
            className="inline-block px-4 py-2 md:px-6 md:py-3 bg-[#599cee9f] text-white font-semibold rounded-md shadow-md hover:bg-[#4c85d0] transition"
          >
            See My Projects
          </a>
        </div>
      </div>
      <div className="w-44 md:w-64 flex-shrink-0">
        <Image
          src="/me.png"
          alt="profile image"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
    </section>
  );
}

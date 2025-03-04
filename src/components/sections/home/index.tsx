import { FileDown } from 'lucide-react';
import Socials from '@/components/shared/social';

import Image from 'next/image';
import Link from 'next/link';

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

        <div className="md:mt-auto mt-6 flex-col md:flex-row flex items-center md:gap-4 gap-2">
          <Link href="/files/resume.pdf" className="flex-shrink" target="blank">
            <button className="hover:bg-[#535a5e] hover:bg-opacity-35 transition duration-700 flex items-center w-fit border-[#535a5e] bg-opacity-45 border-2 px-3 py-1 md:px-5 pd:py-2 text-white font-semibold md:text-base text-sm rounded-md">
              <span className="font-semibold">Resume</span>
              <FileDown className="ml-2 size-[18px] md:size-5" />
            </button>
          </Link>
          <Socials />
        </div>
      </div>
      <div className="w-44 md:w-64 flex-shrink-0">
        <Image
          src="/me.png"
          alt="profile image"
          width={300}
          height={300}
          className="rounded-full border border-[#535a5e]"
        />
      </div>
    </section>
  );
}

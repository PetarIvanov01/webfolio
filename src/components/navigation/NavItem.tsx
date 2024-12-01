import Image from "next/image";
import Link from "next/link";

interface NavItemProps {
  iconSrc: string;
  label: string;
  href: string;
}

export default function NavItem({ iconSrc, label, href }: NavItemProps) {
  return (
    <li className="text-white group relative cursor-pointer">
      <div className="flex flex-col items-center">
        <Link href={href}>
          <Image
            src={iconSrc}
            width={20}
            height={20}
            alt={label}
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </Link>

        <span className="absolute top-11 opacity-0 translate-y-[-10px] text-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {label}
        </span>
      </div>
    </li>
  );
}

import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface Social {
  name: string;
  href: string;
  icon: keyof typeof dynamicIconImports;
}

export const socials: ReadonlyArray<Social> = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/petar-ivanov-7a986b248/',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/PetarIvanov01',
    icon: 'github'
  },
  {
    name: 'Email',
    href: 'mailto:petarivanov0122@gmail.com',
    icon: 'mail'
  }
];

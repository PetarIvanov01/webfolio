import { socials } from '@/constants/socials';
import Icon from '../Icon';

export default function Socials() {
  return (
    <section className="flex gap-6">
      {socials.map((item) => (
        <a
          href={item.href}
          key={item.name}
          target="_blank"
          className="text-[#535a5e] hover:text-white"
          rel="noopener noreferrer"
          title={item.name}
        >
          <span className="sr-only">{item.name}</span>
          <Icon
            name={item.icon}
            aria-hidden="true"
            className="md:size-5 size-[18px]"
          />
        </a>
      ))}
    </section>
  );
}

import NavItem from "./NavItem";

export default function ServerImages() {
  return (
    <ul className="flex gap-8 items-center justify-center flex-col md:flex-row">
      <NavItem href="#home" iconSrc="/nav/home.svg" label="Home" />
      <NavItem href="#projects" iconSrc="/nav/projects.svg" label="Projects" />
      <NavItem href="#tools" iconSrc="/nav/tools.svg" label="Tools" />
      <NavItem
        href="#experience"
        iconSrc="/nav/experience.svg"
        label="Experience"
      />
      <NavItem href="#contact" iconSrc="/nav/contact.svg" label="Contact" />
    </ul>
  );
}

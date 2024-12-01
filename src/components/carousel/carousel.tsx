import Image from "next/image";

const images = [
  { src: "/tech/html.png", alt: "html" },
  { src: "/tech/tailwind-css.png", alt: "taiwlind-css" },
  { src: "/tech/css.png", alt: "css" },
  { src: "/tech/next-js.png", alt: "next-js" },
  { src: "/tech/js.png", alt: "js" },
  { src: "/tech/node.png", alt: "node" },
  { src: "/tech/react.png", alt: "react" },
  { src: "/tech/postgresql.png", alt: "postgresql" },
];

export default function Carousel() {
  const numImages = images.length;

  const style = {
    "--num-images": numImages,
    "--carousel-width": `${numImages * 100}px`,
    "--animation-duration": `${Math.min(numImages * 2, 14)}s`,
  } as React.CSSProperties;

  return (
    <div className="m-auto overflow-hidden relative w-3/5 max-w-[1024px]">
      <ul
        className="flex animate-scroll hover:animate-pause"
        style={{
          ...style,
          width: `calc(var(--carousel-width) * 2)`,
        }}
      >
        {[...images, ...images].map((image, index) => (
          <li key={index} className="flex justify-center items-center w-28">
            <Image src={image.src} alt={image.alt} width={45} height={45} />
          </li>
        ))}
      </ul>
    </div>
  );
}

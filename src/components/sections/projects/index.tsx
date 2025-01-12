import Image from 'next/image';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'My personal portfolio showcasing my skills and projects.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/portfolio.png',
    link: 'https://your-portfolio-link.com'
  },
  {
    name: 'E-commerce App',
    description: 'A mock e-commerce platform with a modern UI and backend.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/projects/ecommerce.png',
    link: 'https://your-ecommerce-link.com'
  },
  {
    name: 'Blog Platform',
    description: 'A markdown-based blog with dynamic routing.',
    tags: ['Next.js', 'Markdown', 'Firebase'],
    image: '/projects/blog.png',
    link: 'https://your-blog-link.com'
  }
];

export default function Projects() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        <p className="text-[#656971] py-0.5 text-lg">
          A selection of my work, from personal projects to collaborative
          builds.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={160}
              height={80}
              className="rounded-lg object-cover w-full"
            />
            <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

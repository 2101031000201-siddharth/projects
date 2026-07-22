import { projects } from "../data.js";

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-purple-400 text-center font-medium mb-2 tracking-wide">PROJECTS</p>
      <h2 className="text-3xl font-bold text-white text-center mb-12">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-purple-400 hover:-translate-y-1 transition"
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-36 overflow-hidden block"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top hover:scale-105 transition duration-300"
              />
            </a>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/2101031000201-siddharth"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-bg text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;

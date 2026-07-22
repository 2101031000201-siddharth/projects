import { personalInfo } from "../data.js";

function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 pt-36 pb-20 grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <p className="text-purple-400 font-medium mb-3 tracking-wide">HELLO, I'M</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {personalInfo.name}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mt-1 mb-5">
          {personalInfo.role}
        </h2>
        <p className="text-gray-400 mb-8 max-w-md">{personalInfo.tagline}</p>

        <div className="flex items-center gap-4 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition"
          >
            GH
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition"
          >
            in
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition"
          >
            ✉
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition"
          >
            ☎
          </a>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="gradient-bg text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            View Projects
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="border border-purple-400 text-purple-300 font-medium px-6 py-3 rounded-full hover:bg-purple-500/10 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-900/40">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="mt-5 flex items-center gap-2 bg-white/5 border border-white/10 text-sm text-gray-300 px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          Available for Full-time Opportunities
        </span>
      </div>
    </section>
  );
}

export default Hero;

import { experience } from "../data.js";

function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-purple-400 text-center font-medium mb-2 tracking-wide">EXPERIENCE</p>
      <h2 className="text-3xl font-bold text-white text-center mb-12">Work Experience</h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {experience.map((job) => (
          <div
            key={job.company}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                <p className="text-purple-300 text-sm">{job.company}</p>
              </div>
              <span className="text-xs text-gray-400">{job.duration}</span>
            </div>
            <ul className="flex flex-col gap-2">
              {job.points.map((point, i) => (
                <li key={i} className="text-sm text-gray-400 flex gap-2">
                  <span className="text-purple-400">›</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

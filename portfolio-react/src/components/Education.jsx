import { education } from "../data.js";

function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-purple-400 text-center font-medium mb-2 tracking-wide">EDUCATION</p>
      <h2 className="text-3xl font-bold text-white text-center mb-12">My Education</h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {education.map((item) => (
          <div
            key={item.degree}
            className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-wrap justify-between items-center gap-3"
          >
            <div>
              <h3 className="text-white font-medium">{item.degree}</h3>
              <p className="text-sm text-gray-400">{item.school}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">{item.duration}</p>
              {item.score && <p className="text-sm text-purple-300">{item.score}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

import { personalInfo, about } from "../data.js";

const infoItems = [
  { label: "Name", value: personalInfo.name },
  { label: "Location", value: personalInfo.location },
  { label: "Email", value: personalInfo.email },
  { label: "Phone", value: personalInfo.phone },
  { label: "Experience", value: personalInfo.experience },
  { label: "Availability", value: personalInfo.availability },
];

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-purple-400 text-center font-medium mb-2 tracking-wide">ABOUT ME</p>
      <h2 className="text-3xl font-bold text-white text-center mb-12">About Me</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-gray-400 leading-relaxed mb-6">{about.paragraph}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 gradient-bg text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition"
          >
            Know More About Me →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <p className="text-xs text-purple-400 mb-1">{item.label}</p>
              <p className="text-sm text-gray-200 break-words">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

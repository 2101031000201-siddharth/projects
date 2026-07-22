import { skills } from "../data.js";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiPython,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

const iconMap = {
  HTML5: { icon: SiHtml5, bg: "bg-[#e34f26]", color: "text-white" },
  CSS3: { icon: SiCss, bg: "bg-[#1572b6]", color: "text-white" },
  JavaScript: { icon: SiJavascript, bg: "bg-[#f7df1e]", color: "text-black" },
  "React.js": { icon: SiReact, bg: "bg-[#0b1120]", color: "text-[#61dafb]" },
  Vite: { icon: SiVite, bg: "bg-[#0b1120]", color: "text-[#a78bfa]" },
  "Tailwind CSS": { icon: SiTailwindcss, bg: "bg-[#0b1120]", color: "text-[#38bdf8]" },
  SQL: { icon: SiMysql, bg: "bg-[#00546b]", color: "text-white" },
  Git: { icon: SiGit, bg: "bg-[#f05033]", color: "text-white" },
  GitHub: { icon: SiGithub, bg: "bg-black", color: "text-white" },
  Python: { icon: SiPython, bg: "bg-[#1e415e]", color: "text-[#ffd43b]" },
  "Responsive Design": { icon: MdDevices, bg: "bg-[#4c1d95]", color: "text-purple-300" },
};

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-purple-400 text-center font-medium mb-2 tracking-wide">SKILLS</p>
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        My Technical Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => {
          const entry = iconMap[skill];
          const Icon = entry?.icon;
          return (
            <div
              key={skill}
              className="w-24 flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-purple-400 hover:-translate-y-1 transition"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${entry?.bg ?? "bg-white/10"}`}
              >
                {Icon && <Icon className={`w-6 h-6 ${entry.color}`} />}
              </div>
              <span className="text-xs text-gray-300 text-center leading-tight">{skill}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
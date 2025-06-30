import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function Skill() {
  const skills = [
    {
      title: "Frontend",
      items: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
        { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
        { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
        { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
      ],
    },
    {
      title: "Backend",
      items: [
        { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
        { icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, name: "Express.js" },
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      ],
    },
    {
      title: "Tools",
      items: [
        { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
        { icon: <FaGithub className="text-black dark:text-white" />, name: "GitHub" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          🛠️ My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((section, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4 group hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-lg text-gray-700 dark:text-gray-100 group-hover:text-indigo-600">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

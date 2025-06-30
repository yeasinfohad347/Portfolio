import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

const techIcons = {
  React: <SiReact className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-cyan-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Javascript: <SiJavascript className="text-yellow-400" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  "Node.js": <SiNodedotjs className="text-green-700" />,
  "Express.js": <SiExpress className="text-gray-600" />,
};

export default function Projects() {
  const projects = [
    {
      title: "JobTrack",
      description:
        "A modern job listing platform built with React and Firebase to help job seekers explore opportunities across various companies.",
      live: "https://job-track-website-eaffb.web.app",
      github: "https://github.com/yeasinfohad/jobtrack", // Optional GitHub
      tech: ["React", "Tailwind", "Firebase", "Javascript"],
      image: "https://i.ibb.co/TqhwL92Y/Screenshot-2025-06-30-013721.png",
    },
    {
      title: "Plant Care Tracker",
      description: "Track watering, fertilizing, and plant growth.",
      live: "https://plant-care-tracker-6dcaf.web.app/",
      github: "https://github.com/yeasinfohad/plant-care-tracker",
      tech: [
        "React",
        "Tailwind",
        "Firebase",
        "Javascript",
        "MongoDB",
        "Node.js",
        "Express.js",
      ],
      image: "https://i.ibb.co/F4fDHrcs/Screenshot-2025-06-30-013624.png",
    },
    {
      title: "Lost & Found System",
      description: "Report and recover lost items using real-time updates.",
      live: "https://whereisit-web.web.app",
      github: "https://github.com/yeasinfohad/lost-found",
      tech: [
        "React",
        "Tailwind",
        "Firebase",
        "Javascript",
        "MongoDB",
        "Node.js",
        "Express.js",
      ],
      image: "https://i.ibb.co/93qntFQr/Screenshot-2025-06-30-013533.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-[#0f172a] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          <span className="text-primary">My</span> Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
            >
              {/* Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4 border"
                />
              )}

              {/* Title + Description */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech stack with icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-gray-200 dark:bg-slate-700 text-sm text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full"
                    >
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-primary text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 hover:bg-primary-focus transition"
                >
                  Live <FaExternalLinkAlt />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition inline-flex items-center gap-2"
                  >
                    GitHub <FaGithub />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

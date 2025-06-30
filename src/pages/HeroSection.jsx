import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const sentence = ["Hi,", "I'm", "Yeasin", "Forhad"];

  const codeString = `
// 👇 Sample Developer Profile Object
const profile = {
  name: "Yeasin Forhad",
  title: "MERN Stack Developer",
  location: "Bangladesh",
  portfolioURL: "https://yeasinforhad.dev",
  skills: [
    "React", "Tailwind CSS", "JavaScript", "TypeScript",
    "Firebase", "Node.js", "Express.js", "MongoDB"
  ],
  experience: {
    years: 1,
    projectsCompleted: 12,
    teamPlayer: true,
    clientFriendly: true
  },
  strengths: {
    hardWorker: true,
    quickLearner: true,
    problemSolver: true
  },
  availableForHire: true
};
`;

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300 py-16 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-10 w-full">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight flex flex-wrap gap-2 justify-center lg:justify-start ">
            {sentence.map((word, index) => (
              <motion.span
                key={index}
                className={word === "Yeasin" || word === "Forhad" ? "text-primary" : ""}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            className="text-lg sm:text-2xl lg:text-4xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Typewriter
              words={["MERN Stack Developer", "React Enthusiast", "Problem Solver"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 px-2 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            A passionate MERN Stack Developer crafting fast, scalable, and interactive web
            applications using modern technologies like React, Node.js, and MongoDB.
          </motion.p>

          <motion.a
            href="#projects"
            className="btn btn-primary btn-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        {/* Right Code Preview */}
        <motion.div
          className="w-full lg:w-1/2 mt-10 lg:mt-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-2xl shadow-lg overflow-x-auto">
            {/* Fake Tab */}
            <div className="bg-[#0f111a] px-4 py-2 rounded-t-xl flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-white text-sm ml-4">developer.js</span>
            </div>

            {/* Code Area */}
            <div className="bg-[#0f111a] rounded-b-xl overflow-x-auto max-h-[300px] sm:max-h-[400px]">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                customStyle={{
                  fontSize: "0.75rem",
                  lineHeight: "1.4",
                  minWidth: "300px",
                  padding: "1.2rem",
                }}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

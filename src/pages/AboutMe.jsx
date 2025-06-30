import { motion } from "framer-motion";
import aboutImg from "../assets/yeasin.jpg"; // Replace with your image

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-[#0f172a] py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary transform group-hover:scale-105 transition duration-300">
              <img
                src={aboutImg}
                alt="Yeasin Forhad"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-primary opacity-10 rounded-2xl pointer-events-none blur-sm"></div>
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <span className="text-primary">About</span> Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
            I'm <strong>Yeasin Forhad</strong>, a dedicated MERN stack developer who began his programming journey in <strong>2023</strong> with competitive programming during university. From writing efficient algorithms to building complete web applications, I’ve developed a passion for crafting clean and user-focused solutions.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
            I enjoy working with <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">Tailwind CSS</span>, and the <span className="text-primary font-medium">MERN stack</span> to build fast, modern, and responsive web apps. Whether it's front-end interactivity or backend logic, I love solving problems and creating smooth user experiences.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            Outside of tech, I'm a big fan of <strong>cricket</strong>, enjoy <strong>drawing</strong> and <strong>sketching</strong>, and love staying curious about how things work. I value teamwork, communication, and am always excited to take on new challenges with a positive attitude. 😊
          </p>

          <a href="/YeasinForhad_CV.pdf" download>
            <button className="btn btn-primary btn-wide shadow-lg hover:scale-105 transition-transform">
              Download Resume
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

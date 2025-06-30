import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#03373D] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Name */}
        <div className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} Yeasin Forhad
        </div>

        {/* Center - Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/yeasinfohad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Right - Message */}
        <div className="text-sm text-teal-200 text-center md:text-right">
          Built with ❤️ using React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}

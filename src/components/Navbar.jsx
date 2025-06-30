import { Link } from "react-scroll";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo-1.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          activeClass="active"
          className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaHome /> Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          activeClass="active"
          className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaUser /> About
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          activeClass="active"
          className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaProjectDiagram /> Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          activeClass="active"
          className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaEnvelope /> Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-full sm:w-[95%] bg-[#03373D] rounded-2xl shadow-xl border border-[#055055]">
      <div className="navbar max-w-7xl mx-auto px-4 text-white">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-[#03373D] rounded-box w-52 text-white space-y-2"
              >
                {menuItems}
              </ul>
            )}
          </div>

          {/* Brand Logo / Name */}
          <a className="btn btn-ghost normal-case text-xl font-bold text-white hover:text-primary transition">
            <span className="lg:hidden">
              <img src={logo} alt="logo" className="h-8 w-auto" />
            </span>
            <span className="hidden lg:inline-block">
              Yeasin<span className="text-primary">Forhad</span>
            </span>
          </a>
        </div>

        {/* Navbar Center for Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-white">{menuItems}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a
            href="/YeasinForhad_CV.pdf"
            download
            className="btn btn-sm bg-primary text-white border-none hover:bg-primary-focus transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

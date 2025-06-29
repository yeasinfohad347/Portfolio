export default function Navbar() {
  const menuItems = (
    <>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </>
  );

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] bg-[#03373D] rounded-2xl shadow-lg">
      <div className="navbar max-w-7xl mx-auto px-4 text-white">
        {/* Start: Logo & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#03373D] rounded-box w-52 text-white"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white font-bold">
            Yeasin<span className="text-primary">Forhad</span>
          </a>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-white">
            {menuItems}
          </ul>
        </div>

        {/* CV Button */}
        <div className="navbar-end">
          <a
            href="/YeasinForhad_CV.pdf"
            download
            className="btn btn-sm bg-primary text-white border-none hover:bg-primary-focus"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

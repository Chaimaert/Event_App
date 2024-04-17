import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Events", path: "events" },
    { link: "Requests", path: "requests" },
  ];

  return (
    <header className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ${isSticky ? "sticky border" : ""}`}>
      <nav className="py-4 lg:px-14 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="block">
            <img src={logo} className="w-20 inline-block" alt="Logo" />
          </a>

          <ul className="hidden md:flex space-x-12 ml-8">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="text-base text-gray-900 hover:text-brandPrimary font-medium cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          {/* Mobile menu toggle button */}
          <div className="md:hidden mr-4">
            <button onClick={toggleMenu} className="text-neutralDGrey focus:outline-none focus:text-gray-500">
              {isMenuOpen ? <FaTimes className="h-6 w-6 text-neutralDGrey" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          <a href="/" className="hidden md:block text-base text-brandPrimary hover:text-gray-900 font-medium">
            Logout
          </a>

          {/* Mobile menu  */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white py-4 px-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map(({ link, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      className="text-base text-gray-900 hover:text-brandPrimary font-medium cursor-pointer"
                      onClick={toggleMenu}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="/" className="text-base text-brandPrimary hover:text-gray-900 font-medium mt-6" onClick={toggleMenu}>
                Logout
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

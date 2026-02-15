import { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo/fashion_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },

    {
      name: "Men's",
      submenu: [
        { name: "Dhuti", link: "/man/dhuti" },
        { name: "Kurta", link: "/man/kurta" },
        { name: "Sherwani", link: "/man/sherwani" },
      ],
    },
    {
      name: "Women",
      submenu: [
        { name: "Saree", link: "/women/saree" },
        { name: "Lahenga", link: "/women/lahenga" },
        { name: "Blouse", link: "/women/blouse" },
      ],
    },
    {
      name: "Couple",
      submenu: [
        { name: "Punjabi", link: "/couple/punjabi" },
        { name: "Lahenga Sherwani", link: "/couple/lahenga_sherwani" },
      ],
    },
    {
      name: "Juti",
      submenu: [{ name: "Men's Juti", link: "/juti" }],
    },
    {
      name: "clintele",
      submenu: [{ name: "Clientele", link: "/clintele" }],
    },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5 text-blue-600"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center transition-transform duration-500 hover:scale-105"
        >
          <img src={logo} alt="LOGO" className="h-20 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              {item.submenu ? (
                <span
                  className={`font-medium flex items-center gap-1 transition cursor-pointer ${
                    scrolled ? "text-gray-800" : "text-white"
                  } hover:text-blue-700`}
                >
                  {item.name}
                  <HiChevronDown className="ml-0.5 text-[1rem] transition-transform duration-300 group-hover:rotate-180" />
                </span>
              ) : (
                <Link
                  to={item.link}
                  className={`font-medium flex items-center gap-1 transition ${
                    scrolled ? "text-gray-800" : "text-white"
                  } hover:text-blue-700`}
                >
                  {item.name}
                </Link>
              )}

              {item.submenu && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  {item.submenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={sub.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-3">
          <a
            href="https://www.facebook.com/avisheknaiya.in"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/AvishekNaiya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/avishekknaiya_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[1000px] py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-base font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx} className="w-full text-center">
              {item.submenu ? (
                <details className="group">
                  <summary className="cursor-pointer flex justify-between items-center px-4 py-2 font-medium text-gray-800 hover:text-blue-700">
                    {item.name}
                    <span className="ml-2 transition-transform duration-300 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <a
                          href={sub.link}
                          className="block py-1 text-gray-700 hover:text-blue-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a
                  href={item.link}
                  className="block py-2 font-medium text-gray-800 hover:text-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
          <li className="flex space-x-3 mt-4">
            <a
              href="https://www.facebook.com/avisheknaiya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full  hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/AvishekNaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/avishekknaiya_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

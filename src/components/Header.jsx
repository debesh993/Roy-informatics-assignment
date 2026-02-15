import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide">
          Avishekk Naiya
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <a href="#home" className="hover:text-gray-600 transition">
            Home
          </a>
          <a href="#services" className="hover:text-gray-600 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-gray-600 transition">
            Gallery
          </a>
          <a href="#about" className="hover:text-gray-600 transition">
            About
          </a>
          <a
            href="#contact"
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX size={28} />
            ) : (
              <HiMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-base font-medium">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a
            href="#contact"
            className="bg-black text-white px-6 py-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

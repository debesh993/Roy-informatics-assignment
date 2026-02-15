import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import logo from "../assets/images/logo/fashion_logo_old.png";

gsap.registerPlugin(ScrollTrigger);

const Footer1 = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-animate", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="py-10 border-t border-gray-200" ref={footerRef}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="footer-animate">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="h-14 transition duration-500 hover:opacity-80"
              />
            </a>
          </div>

          {/* Text */}
          <div className="footer-animate text-center text-sm text-gray-600">
            <span>© 2022 by Avishekk Naiya. All Rights Reserved. </span>
            <br className="md:hidden" />
            <span>Designed & Developed by </span>
            <a
              href="https://royinformatics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0b4976] hover:underline"
            >
              Roy Informatics Pvt. Ltd.
            </a>
          </div>

          {/* Social Icons */}
          <div className="footer-animate flex items-center gap-5 text-gray-700">

            <a
              href="https://www.facebook.com/avisheknaiya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition duration-300 hover:-translate-y-1 hover:scale-110 hover:text-[#1877F2]"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/AvishekNaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition duration-300 hover:-translate-y-1 hover:scale-110 hover:text-[#1DA1F2]"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/avishekknaiya_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition duration-300 hover:-translate-y-1 hover:scale-110 hover:text-[#E1306C]"
            >
              <FaInstagram />
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer1;

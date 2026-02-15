import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="text-2xl font-semibold tracking-wide">
            Avishekk Naiya
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-600">
            <p>© 2022 by Avishekk Naiya. All Rights Reserved.</p>
            <p>
              Designed & Developed by{" "}
              <a
                href="https://royinformatics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0b4976] font-medium hover:underline"
              >
                Roy Informatics Pvt. Ltd.
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-gray-600">
            <a
              href="https://www.facebook.com/avisheknaiya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://twitter.com/AvishekNaiya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="https://www.instagram.com/avishekknaiya_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaInstagram size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

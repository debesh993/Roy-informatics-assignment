import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919051956595"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-5 right-5
        sm:bottom-6 sm:right-6
        md:bottom-8 md:right-8
        lg:bottom-10 lg:right-10
        z-50
        bg-[#25D366]
        w-14 h-14
        sm:w-16 sm:h-16
        rounded-full
        flex items-center justify-center
        shadow-xl
        transition-all duration-300
        hover:scale-110 hover:shadow-2xl
      "
    >
      <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
    </a>
  );
};

export default WhatsAppFloat;

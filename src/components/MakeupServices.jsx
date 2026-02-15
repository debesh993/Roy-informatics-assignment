import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import makeup1 from "../assets/makeup_image/20220924073647_makeup1.jpg";
import makeup2 from "../assets/makeup_image/20220924073702_makeup2.jpg";
import makeup3 from "../assets/makeup_image/20220924073716_makeup3.jpg";

const services = [
  {
    id: "01",
    title: "Bridal Makeup",
    description:
      "On your wedding day, you should look like yourself at your most beautiful.",
    image: makeup1,
  },
  {
    id: "02",
    title: "Reception Makeup",
    description:
      "Beauty is power, and makeup enhances that; it’s a woman’s secret.",
    image: makeup2,
  },
  {
    id: "03",
    title: "Party Makeup",
    description:
      "Flawless glam that complements your outfit and elevates your confidence.",
    image: makeup3,
  },
];

const MakeupServices = () => {
  const [current, setCurrent] = useState(0);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 }
    ).fromTo(
      imageRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.5"
    );
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const service = services[current];

  return (
    <section id="service" className="bg-black text-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Our Makeup Services
          </h2>
        </div>

        {/* Slide */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Left Content */}
          <div
            ref={contentRef}
            className="lg:w-1/2 space-y-5 text-center lg:text-left max-w-lg"
          >
            <span className="text-6xl font-extralight text-gray-600 block">
              {service.id}
            </span>

            <h3 className="text-3xl font-semibold">
              {service.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>

            <a
              href="/makeup-gallery"
              className="
                inline-block
                border border-white
                px-7 py-2
                text-sm
                tracking-wide
                transition duration-300
                hover:bg-white hover:text-black
              "
            >
              View More
            </a>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            className="lg:w-1/2 flex justify-center lg:justify-start"
          >
            <img
              src={service.image}
              alt={service.title}
              className="
                w-[300px]
                sm:w-[340px]
                lg:w-[360px]
                h-[440px]
                sm:h-[500px]
                lg:h-[540px]
                object-cover
                rounded-xl
                shadow-2xl
              "
            />
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-16">
          <button
            onClick={prevSlide}
            className="
              w-12 h-12
              flex items-center justify-center
              border border-white
              rounded-full
              hover:bg-white hover:text-black
              transition duration-300
            "
          >
            <FiArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="
              w-12 h-12
              flex items-center justify-center
              border border-white
              rounded-full
              hover:bg-white hover:text-black
              transition duration-300
            "
          >
            <FiArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default MakeupServices;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../assets/about/AN_medium.jpg";

gsap.registerPlugin(ScrollTrigger);

const About1 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(".about-img", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Text animation stagger
      gsap.from(".about-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left Image */}
          <div className="about-img overflow-hidden">
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div className="about-content bg-[#ede0b4] p-10 lg:p-14">
            
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              About Us
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A sudden walk into the magical world of a new Fashion house and you are bewildered with the unique patterns in textiles, marvelous colour combination and stunning designs which is at the very same time traditional yet contemporary, ethnic yet occidental.
            </p>

            <a href="/about">
              <button className="px-8 py-3 border border-black text-black transition duration-300 hover:bg-black hover:text-white">
                View More
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;

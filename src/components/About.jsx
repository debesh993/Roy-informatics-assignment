const About = () => {
  return (
    <section id="about" className="bg-[#ede0b4] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/about/AN_medium.jpg"
              alt="About Avishekk Naiya"
              className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wide">
              About Us
            </h2>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
              A sudden walk into the magical world of a new Fashion house and
              you are bewildered with the unique patterns in textiles, marvelous
              colour combination and stunning designs which is at the very same
              time traditional yet contemporary, ethnic yet occidental.
            </p>

            <a
              href="/about"
              className="
                inline-block
                bg-black
                text-white
                px-8 py-3
                rounded-full
                font-medium
                transition duration-300
                hover:bg-gray-800
                hover:scale-105
              "
            >
              View More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

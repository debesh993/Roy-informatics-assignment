const CTASection = () => {
  return (
    <section className="bg-[#031940] py-10">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Text */}
          <div className="text-white text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-medium tracking-wide">
              Interested in any of our services? Book now.
            </h3>
          </div>

          {/* Right Button */}
          <div>
            <a
              href="/contact"
              className="
                inline-block
                bg-white
                text-[#031940]
                px-8 py-3
                rounded-full
                font-medium
                transition duration-300
                hover:bg-gray-200
                hover:scale-105
              "
            >
              Book Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;

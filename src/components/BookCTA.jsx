const BookCTA = () => {
  return (
    <section className="bg-[#031940] py-10 lg:py-14">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Text */}
          <div className="text-white text-lg md:text-xl font-medium text-center md:text-left">
            Interested in any of our services? Book now.
          </div>

          {/* Right Button */}
          <div>
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-8 py-3
                border border-white
                text-white
                text-sm
                tracking-wide
                rounded-full
                transition duration-300
                hover:bg-white hover:text-[#031940]
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

export default BookCTA;

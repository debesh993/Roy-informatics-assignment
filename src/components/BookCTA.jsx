import { Link, useNavigate } from "react-router-dom";

const BookCTA = () => {
  const navigate=useNavigate()
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
            <Link
            to="/"
              onClick={(e) => {
                e.preventDefault(); // prevent instant navigation
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });

                // After smooth scroll, navigate
                setTimeout(() => {
                  navigate("/");
                }, 500); // adjust timeout to match scroll duration
              }}
              
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;

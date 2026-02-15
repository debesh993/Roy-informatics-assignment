import image1 from '../assets/newarrival_image/202306051124101474.jpg'
import image2 from '../assets/newarrival_image/202306051123583539.jpg'
import image3 from '../assets/newarrival_image/202306020504311630.jpg'

const arrivals = [
  {
    id: 1,
    image: image1,
    link: "/shop",
  },
  {
    id: 2,
    image: image2,
    link: "/shop",
  },
  {
    id: 3,
    image: image3,
    link: "/shop",
  },
];

const NewArrival = () => {
  return (
    <section id="blog" className="bg-[#ede0b4] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            New Arrival
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {arrivals.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group block overflow-hidden rounded-xl"
            >
              <div className="relative">

                {/* Image */}
                <img
                  src={item.image}
                  alt="New Arrival"
                  className="
                    w-full
                    h-[540px] sm:h-[540px] lg:h-[580px]
                    object-cover
                    transition duration-500
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black/40
                    opacity-0
                    group-hover:opacity-100
                    transition duration-300
                    flex items-center justify-center
                  "
                >
                  <span
                    className="
                      text-white
                      text-lg
                      font-medium
                      border border-white
                      px-6 py-2
                      rounded-full
                      hover:bg-white hover:text-black
                      transition duration-300
                    "
                  >
                    Shop Now
                  </span>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewArrival;

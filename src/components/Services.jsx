const services = [
  {
    id: 1,
    title: "Bridal Makeup",
    description:
      "Professional bridal makeup with modern and traditional styling.",
    image: "/images/services/service1.jpg",
  },
  {
    id: 2,
    title: "Fashion Styling",
    description:
      "Creative styling solutions blending ethnic and contemporary fashion.",
    image: "/images/services/service2.jpg",
  },
  {
    id: 3,
    title: "Photoshoot",
    description:
      "Premium photoshoot sessions for portfolio and brand campaigns.",
    image: "/images/services/service3.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#ede0b4]"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

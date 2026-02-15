import { useState } from "react";

const categories = ["All", "Shoots", "Celebraties", "Media", "Makeup"];

const galleryItems = [
  {
    id: 1,
    category: "Media",
    image: "/admin/gallery_image/20220924130937_20220403155151_269860427_465138835203969_854279468283732353_n.jpg",
  },
  {
    id: 2,
    category: "Shoots",
    image: "/admin/gallery_image/20220924130909_20220403154706_277995063_484516593266193_145789189694995063_n.jpg",
  },
  {
    id: 3,
    category: "Celebraties",
    image: "/admin/gallery_image/20220924130852_20220403154940_271947798_468343888216797_4900989596216481115_n.jpg",
  },
  {
    id: 4,
    category: "Makeup",
    image: "/admin/gallery_image/20220924130827_20220403155034_274563021_473261524391700_6835427941056144062_n.jpg",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="bg-[#ede0b4] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Gallery
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition duration-300
                ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt="Gallery"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

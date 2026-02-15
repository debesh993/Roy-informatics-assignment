import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Images
import img1 from "../assets/gallery_image/20220716064844_celeb2.jpg";
import img2 from "../assets/gallery_image/20220716064835_celeb1.jpg";
import img3 from "../assets/gallery_image/20220716064826_shoots.jpg";
import img4 from "../assets/gallery_image/20220716064816_makeup2.jpg";
import img5 from "../assets/gallery_image/20220716064805_makeup.jpg";
import img6 from "../assets/gallery_image/20220624073321_G4.jpg";

const galleryImages = [
  { id: 1, category: "Celebraties", image: img1 },
  { id: 2, category: "Celebraties", image: img2 },
  { id: 3, category: "Shoots", image: img3 },
  { id: 4, category: "Makeup", image: img4 },
  { id: 5, category: "Makeup", image: img5 },
  { id: 6, category: "Media", image: img6 },
];

const categories = ["All", "Shoots", "Celebraties", "Media", "Makeup"];

const Gallery1 = () => {
  const [active, setActive] = useState("All");
  const gridRef = useRef(null);

  const filteredImages =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  // GSAP Animation on filter change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [active]);

  return (
    <section
      id="portfolio"
      className="bg-[#ede0b4] pt-[130px] pb-[70px]"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Gallery
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-medium transition duration-300 ${
                active === cat
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="gallery-item relative overflow-hidden group"
            >
              <img
                src={item.image}
                alt="Gallery"
                className="w-full h-[520px] object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Smooth Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="/gallery">
            <button className="px-8 py-3 border border-black text-black transition duration-300 hover:bg-black hover:text-white">
              View More
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery1;

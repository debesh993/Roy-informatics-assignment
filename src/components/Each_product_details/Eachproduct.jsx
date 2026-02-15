import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import bgTexture from "../../assets/background/texture.jpeg";
import { useProducts } from "../context/ProductContext";

const Eachproduct = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const sliderRef = useRef(null);

  // ✅ Get product using id from URL
  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return <div className="py-40 text-center">Product Not Found</div>;
  }

  const thumbnails = [product.image];

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  // ✅ Correct related products filter
  const relatedProducts = products.filter(
    (p) => p.id !== product.id
  );

  // ✅ Proper GSAP animation (scoped & safe)
  useEffect(() => {
    if (!sliderRef.current) return;

    const track = sliderRef.current.querySelector(".slider-track");

    const animation = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 65,
      ease: "linear",
    });

    return () => {
      animation.kill();
    };
  }, [relatedProducts]);

  return (
    <>
      {/* MAIN PRODUCT SECTION */}
      <section
        className="w-full min-h-screen bg-cover bg-center pt-30 pb-16 px-4"
        style={{ backgroundImage: `url(${bgTexture})` }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - IMAGE SECTION */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4">
              {thumbnails.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`border ${
                    activeImage === img
                      ? "border-black"
                      : "border-transparent"
                  } p-1`}
                >
                  <img
                    src={img}
                    alt="Thumbnail"
                    className="w-20 h-24 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <div
                className="relative max-w-md mx-auto overflow-hidden cursor-zoom-in"
                onMouseMove={handleMouseMove}
                style={{ "--x": "50%", "--y": "50%" }}
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full shadow-xl transition-transform duration-300 ease-out hover:scale-150"
                  style={{
                    transformOrigin: "var(--x) var(--y)",
                  }}
                />
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div className="space-y-6 text-black">

            <p className="uppercase tracking-widest text-sm">
              {product.category}
            </p>

            <h1 className="text-4xl font-light">
              {product.name}
            </h1>

            <p className="text-lg">
              MRP : {product.mrp}
            </p>

            <p className="text-2xl font-medium">
              Sale Price : {product.salePrice}
            </p>

            <p className="text-gray-800 max-w-md leading-relaxed">
              {product.description || "Premium handcrafted traditional attire."}
            </p>

            <a
              href="#"
              className="inline-block bg-[#9a8f5c] text-white uppercase tracking-wider px-10 py-4 mt-6 hover:bg-black transition duration-300"
            >
              View Catalog
            </a>

          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS SLIDER */}
      <section
        ref={sliderRef}
        className="relative py-24 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgTexture})` }}
      >
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 tracking-wide">
          Related Products
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="slider-track flex gap-10 w-max">

            {[...relatedProducts, ...relatedProducts].map((item, index) => (
              <div
                key={index}
                className="group w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0"
              >
                <div className="relative overflow-hidden">

                  <div className="absolute top-4 left-4 z-10 bg-white px-4 py-1 text-xs uppercase tracking-widest shadow">
                    {item.category}
                  </div>

                  <Link to={`/product_details/${item.id}`}>
                    <img
                      src={item.images ? item.images[0] : item.image}
                      alt={item.name}
                      className="w-full h-[420px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                </div>

                <div className="text-center mt-6 space-y-2">
                  <h3 className="text-lg font-medium tracking-wide">
                    {item.name}
                  </h3>

                  <p className="text-gray-700 text-sm">
                    MRP : {item.mrp}
                  </p>

                  <p className="text-gray-900 font-semibold">
                    Sale Price : {item.salePrice}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Eachproduct;
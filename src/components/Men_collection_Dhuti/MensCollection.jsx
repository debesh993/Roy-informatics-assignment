import React from "react";
import backgroundimage from '../../assets/background/texture.jpeg'
import dhoti1 from "../../assets/product_image/20220702061015_dhoti-1.jpg";
import dhoti2 from "../../assets/product_image/20220702062658_dhoti-3.jpg";
import dhoti3 from "../../assets/product_image/20220702062837_dhoti-2.jpg";
import dhoti4 from "../../assets/product_image/20220702064238_dhoti-7.jpg";
import dhoti5 from "../../assets/product_image/20220702064410_dhoti-11.jpg";
import dhoti6 from "../../assets/product_image/20220702064750_dhoti-9.jpg";
import dhoti7 from "../../assets/product_image/20220702070417_dhoti-6.jpg";

import dhoti8 from "../../assets/product_image/202211021224095575.jpg";
import dhoti9 from "../../assets/product_image/202211021244406036.jpg";
import dhoti10 from "../../assets/product_image/202211021245237245.jpg";
import dhoti11 from "../../assets/product_image/202211021250536766.jpg";
import dhoti12 from "../../assets/product_image/202211021252506577.jpg";

const products = [
  { id: 1, name: "Dhuti Classic", category: "Men's", mrp: "₹3500", salePrice: "₹3300", image: dhoti1, link: "/product_details/1" },
  { id: 2, name: "Dhuti Royal", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti2, link: "/product_details/2" },
  { id: 3, name: "Dhuti Elegance", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti3, link: "/product_details/3" },
  { id: 4, name: "Dhuti Premium", category: "Men's", mrp: "₹4000", salePrice: "₹3800", image: dhoti4, link: "/product_details/4" },
  { id: 5, name: "Dhuti Comfort", category: "Men's", mrp: "₹4000", salePrice: "₹3800", image: dhoti5, link: "/product_details/5" },
  { id: 6, name: "Dhuti Deluxe", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti6, link: "/product_details/6" },
  { id: 7, name: "Dhuti Trendy", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti7, link: "/product_details/7" },
  { id: 8, name: "Dhuti Modern", category: "Men's", mrp: "₹3500", salePrice: "₹3300", image: dhoti8, link: "/product_details/8" },
  { id: 9, name: "Dhuti Urban", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti9, link: "/product_details/9" },
  { id: 10, name: "Dhuti Luxe", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti10, link: "/product_details/10" },
  { id: 11, name: "Dhuti Heritage", category: "Men's", mrp: "₹4000", salePrice: "₹3800", image: dhoti11, link: "/product_details/11" },
  { id: 12, name: "Dhuti Supreme", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti12, link: "/product_details/12" },
];

const MensCollection = () => {
  return (
    <section
      id="expert"
      className="py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          MEN'S COLLECTION | DHUTI
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[520px] object-cover" // increased height ~30%
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-10 flex items-center justify-center transition duration-300">
                  <span className="text-white text-lg font-semibold px-4 py-2 bg-gray-800/60 rounded">
                    {product.category} | {product.salePrice}
                  </span>
                </div> */}
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-1">MRP: {product.mrp}</p>
                <p className="text-gray-800 font-bold mb-3">Sale Price: {product.salePrice}</p>
                <a href={product.link}>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-300">
                    View More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MensCollection;

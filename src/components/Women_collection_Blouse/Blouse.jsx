import backgroundimage from "../../assets/background/texture.jpeg";

// Import all saree images
import blouse1 from "../../assets/blouse/202305250647343951.jpeg";
import blouse2 from "../../assets/blouse/202305250654096693.jpeg";
import blouse3 from "../../assets/blouse/202305250700075418.jpeg";
import blouse4 from "../../assets/blouse/202305260105525069.jpg";
import blouse5 from "../../assets/blouse/202305260120235286.jpg";
import blouse6 from "../../assets/blouse/202305260125406288.jpg";
import blouse7 from "../../assets/blouse/202305260132324969.jpg";
import blouse8 from "../../assets/blouse/202305260138004297.jpg";
import blouse9 from "../../assets/blouse/202305260143037187.jpg";
import blouse10 from "../../assets/blouse/202305260152225517.jpg";
import blouse11 from "../../assets/blouse/202305260204349682.jpg";
import blouse12 from "../../assets/blouse/202305260214342916.jpg";
import blouse13 from "../../assets/blouse/202305260309512309.jpg";
import blouse14 from "../../assets/blouse/202305260320182304.jpg";
import blouse15 from "../../assets/blouse/202305260338321672.jpg";
import blouse16 from "../../assets/blouse/202305260352582902.jpg";
import blouse17 from "../../assets/blouse/202305260422111948.jpg";
import blouse18 from "../../assets/blouse/202305261248576843.jpg";
import blouse19 from "../../assets/blouse/202305261258058786.jpg";
import blouse20 from "../../assets/blouse/202306050154468078.jpg";
import blouse21 from "../../assets/blouse/202306160103223279.jpg";
import blouse22 from "../../assets/blouse/202306160105056299.jpg";
import blouse23 from "../../assets/blouse/202306160107057632.jpg";
// Create the products array
const products = [
  { id: 1, name: "Designer Blouse 1", category: "Women's", mrp: "N/A", salePrice: "₹1200", image: blouse1, link: "/product_details/1" },
  { id: 2, name: "Designer Blouse 2", category: "Women's", mrp: "N/A", salePrice: "₹1300", image: blouse2, link: "/product_details/2" },
  { id: 3, name: "Designer Blouse 3", category: "Women's", mrp: "N/A", salePrice: "₹1400", image: blouse3, link: "/product_details/3" },
  { id: 4, name: "Designer Blouse 4", category: "Women's", mrp: "N/A", salePrice: "₹1500", image: blouse4, link: "/product_details/4" },
  { id: 5, name: "Designer Blouse 5", category: "Women's", mrp: "N/A", salePrice: "₹1600", image: blouse5, link: "/product_details/5" },
  { id: 6, name: "Designer Blouse 6", category: "Women's", mrp: "N/A", salePrice: "₹1700", image: blouse6, link: "/product_details/6" },
  { id: 7, name: "Designer Blouse 7", category: "Women's", mrp: "N/A", salePrice: "₹1800", image: blouse7, link: "/product_details/7" },
  { id: 8, name: "Designer Blouse 8", category: "Women's", mrp: "N/A", salePrice: "₹1900", image: blouse8, link: "/product_details/8" },
  { id: 9, name: "Designer Blouse 9", category: "Women's", mrp: "N/A", salePrice: "₹2000", image: blouse9, link: "/product_details/9" },
  { id: 10, name: "Designer Blouse 10", category: "Women's", mrp: "N/A", salePrice: "₹2100", image: blouse10, link: "/product_details/10" },
  { id: 11, name: "Designer Blouse 11", category: "Women's", mrp: "N/A", salePrice: "₹2200", image: blouse11, link: "/product_details/11" },
  { id: 12, name: "Designer Blouse 12", category: "Women's", mrp: "N/A", salePrice: "₹2300", image: blouse12, link: "/product_details/12" },
  { id: 13, name: "Designer Blouse 13", category: "Women's", mrp: "N/A", salePrice: "₹2400", image: blouse13, link: "/product_details/13" },
  { id: 14, name: "Designer Blouse 14", category: "Women's", mrp: "N/A", salePrice: "₹2500", image: blouse14, link: "/product_details/14" },
  { id: 15, name: "Designer Blouse 15", category: "Women's", mrp: "N/A", salePrice: "₹2600", image: blouse15, link: "/product_details/15" },
  { id: 16, name: "Designer Blouse 16", category: "Women's", mrp: "N/A", salePrice: "₹2700", image: blouse16, link: "/product_details/16" },
  { id: 17, name: "Designer Blouse 17", category: "Women's", mrp: "N/A", salePrice: "₹2800", image: blouse17, link: "/product_details/17" },
  { id: 18, name: "Designer Blouse 18", category: "Women's", mrp: "N/A", salePrice: "₹2900", image: blouse18, link: "/product_details/18" },
  { id: 19, name: "Designer Blouse 19", category: "Women's", mrp: "N/A", salePrice: "₹3000", image: blouse19, link: "/product_details/19" },
  { id: 20, name: "Designer Blouse 20", category: "Women's", mrp: "N/A", salePrice: "₹3100", image: blouse20, link: "/product_details/20" },
  { id: 21, name: "Designer Blouse 21", category: "Women's", mrp: "N/A", salePrice: "₹3200", image: blouse21, link: "/product_details/21" },
  { id: 22, name: "Designer Blouse 22", category: "Women's", mrp: "N/A", salePrice: "₹3300", image: blouse22, link: "/product_details/22" },
  { id: 23, name: "Designer Blouse 23", category: "Women's", mrp: "N/A", salePrice: "₹3400", image: blouse23, link: "/product_details/23" },
];

const Blouse = () => {
  return (
    <section
      id="expert"
      className="py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          WOMEN COLLECTION | BLOUSE.
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]"
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
              <div className="p-5 text-center bg-transparent">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-1">MRP: {product.mrp}</p>
                <p className="text-gray-800 font-bold mb-3">
                  Sale Price: {product.salePrice}
                </p>
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

export default Blouse;

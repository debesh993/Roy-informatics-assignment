import backgroundimage from "../../assets/background/texture.jpeg";

// Import all saree images
import juti1 from "../../assets/juti/20220713114115_juti1.jpg";
import juti2 from "../../assets/juti/20220728032921_juti5.jpg";
import juti3 from "../../assets/juti/20220728033240_juti11.jpg";
import juti4 from "../../assets/juti/20220728033746_juti8.jpg";
import juti5 from "../../assets/juti/202303040123207628.jpg";
import juti6 from "../../assets/juti/202303040220208058.jpg";
import juti7 from "../../assets/juti/202303040251468481.jpg";
import juti8 from "../../assets/juti/202303040311125578.jpg";
import juti9 from "../../assets/juti/202303040314448832.jpg";
import juti10 from "../../assets/juti/202308150704264821.jpg";
import juti11 from "../../assets/juti/202407090639547348.jpg";
import juti12 from "../../assets/juti/202407090640541938.jpg";
import juti13 from "../../assets/juti/202407090643157007.jpg";
// Create the products array
const products = [
  { id: 1, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹900", image: juti1, link: "/product_details/1" },
  { id: 2, name:"Juti", category: "Juti", mrp: "N/A", salePrice: "₹1000", image: juti2, link: "/product_details/2" },
  { id: 3, name:"Juti", category: "Juti", mrp: "N/A", salePrice: "₹1100", image: juti3, link: "/product_details/3" },
  { id: 4, name:"Juti", category: "Juti", mrp: "N/A", salePrice: "₹1200", image: juti4, link: "/product_details/4" },
  { id: 5, name:"Juti", category: "Juti", mrp: "N/A", salePrice: "₹1300", image: juti5, link: "/product_details/5" },
  { id: 6, name:"Juti", category: "Juti", mrp: "N/A", salePrice: "₹1400", image: juti6, link: "/product_details/6" },
  { id: 7, name:"Juti", category: "Juti", mrp: "N/A", salePrice: "₹1500", image: juti7, link: "/product_details/7" },
  { id: 8, name:"Juti", category: "Juti", mrp: "N/A", salePrice: "₹1600", image: juti8, link: "/product_details/8" },
  { id: 9, name:"Juti", category: "Juti", mrp: "N/A", salePrice: "₹1700", image: juti9, link: "/product_details/9" },
  { id: 10, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1800", image: juti10, link: "/product_details/10" },
  { id: 11, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1900", image: juti11, link: "/product_details/11" },
  { id: 12, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹2000", image: juti12, link: "/product_details/12" },
  { id: 13, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹2100", image: juti13, link: "/product_details/13" },
];

const Juti = () => {
  return (
    <section
      id="expert"
      className="py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          JUTI COLLECTION | MEN'S JUTI
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

export default Juti;

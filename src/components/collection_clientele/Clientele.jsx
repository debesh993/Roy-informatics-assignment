import backgroundimage from "../../assets/background/texture.jpeg";

// Import all saree images
import clientevele1 from "../../assets/clientele/202407140523528143.jpg";
import clientevele2 from "../../assets/clientele/202407140526555707.jpg";
import clientevele3 from "../../assets/clientele/202407140538127529.jpg";
import clientevele4 from "../../assets/clientele/202407140539504765.jpg";
import clientevele5 from "../../assets/clientele/202407140541409267.jpg";
import clientevele6 from "../../assets/clientele/202407140543048568.jpg";
import clientevele7 from "../../assets/clientele/202407140547171157.jpg";
import clientevele8 from "../../assets/clientele/202407140550192678.jpeg";
import clientevele9 from "../../assets/clientele/202407140552282691.jpg";
import clientevele10 from "../../assets/clientele/202407140555092761.jpeg";
import clientevele11 from "../../assets/clientele/202407140559259822.jpg";
import clientevele12 from "../../assets/clientele/202407140612565677.jpeg";
import clientevele13 from "../../assets/clientele/202407140618574314.jpg";
// Create the products array
const products = [
  { id: 1, name: "Raw Silk", category: "Clientevele", mrp: "N/A", salePrice: "₹7500", image: clientevele1, link: "/product_details/1" },
  { id: 2, name: "Royal Banarasi Silk", category: "Clientevele", mrp: "N/A", salePrice: "₹8200", image: clientevele2, link: "/product_details/2" },
  { id: 3, name: "Premium Kanjivaram", category: "Clientevele", mrp: "N/A", salePrice: "₹8800", image: clientevele3, link: "/product_details/3" },
  { id: 4, name: "Velvet Zari Edition", category: "Clientevele", mrp: "N/A", salePrice: "₹9100", image: clientevele4, link: "/product_details/4" },
  { id: 5, name: "Heritage Brocade Silk", category: "Clientevele", mrp: "N/A", salePrice: "₹9600", image: clientevele5, link: "/product_details/5" },
  { id: 6, name: "Signature Wedding Silk", category: "Clientevele", mrp: "N/A", salePrice: "₹10200", image: clientevele6, link: "/product_details/6" },
  { id: 7, name: "Luxury Tissue Silk", category: "Clientevele", mrp: "N/A", salePrice: "₹11000", image: clientevele7, link: "/product_details/7" },
  { id: 8, name: "Golden Zari Classic", category: "Clientevele", mrp: "N/A", salePrice: "₹11500", image: clientevele8, link: "/product_details/8" },
  { id: 9, name: "Royal Bridal Weave", category: "Clientevele", mrp: "N/A", salePrice: "₹12000", image: clientevele9, link: "/product_details/9" },
  { id: 10, name: "Elite Handloom Collection", category: "Clientevele", mrp: "N/A", salePrice: "₹12800", image: clientevele10, link: "/product_details/10" },
  { id: 11, name: "Opulent Festival Silk", category: "Clientevele", mrp: "N/A", salePrice: "₹13500", image: clientevele11, link: "/product_details/11" },
  { id: 12, name: "Grand Occasion Saree", category: "Clientevele", mrp: "N/A", salePrice: "₹14200", image: clientevele12, link: "/product_details/12" },
  { id: 13, name: "Platinum Heritage Silk", category: "Clientevele", mrp: "N/A", salePrice: "₹15000", image: clientevele13, link: "/product_details/13" },
];

const Clientele = () => {
  return (
    <section
      id="expert"
      className="py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          CLIENTELE COLLECTION | CLIENTELE
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

export default Clientele;

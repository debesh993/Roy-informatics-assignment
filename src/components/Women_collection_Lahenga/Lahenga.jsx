import backgroundimage from "../../assets/background/texture.jpeg";

// Import all saree images
import lehenga1 from "../../assets/lahenga/20220624120632_ANKL6copy.jpg";
import lehenga2 from "../../assets/lahenga/20220624124546_ANKL24copy.jpg";
import lehenga3 from "../../assets/lahenga/20220624125436_ANKL12copy.jpg";
import lehenga4 from "../../assets/lahenga/20220731115839_lehenga2.jpg";
// Create the products array
const products=[
    {
  id: 1,
  name: "Elegant Lehenga 1",
  category: "Women's",
  mrp: "N/A",
  salePrice: "₹4500",
  image: lehenga1,
  link: "/product_details/5",
},
{
  id: 2,
  name: "Elegant Lehenga 2",
  category: "Women's",
  mrp: "N/A",
  salePrice: "₹4700",
  image: lehenga2,
  link: "/product_details/6",
},
{
  id: 3,
  name: "Elegant Lehenga 3",
  category: "Women's",
  mrp: "N/A",
  salePrice: "₹4900",
  image: lehenga3,
  link: "/product_details/7",
},
{
  id: 4,
  name: "Elegant Lehenga 4",
  category: "Women's",
  mrp: "N/A",
  salePrice: "₹5200",
  image: lehenga4,
  link: "/product_details/8",
},
]

const Lahenga = () => {
  return (
    <section
      id="expert"
      className="py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          WOMEN COLLECTION | LAHENGA
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

export default Lahenga;

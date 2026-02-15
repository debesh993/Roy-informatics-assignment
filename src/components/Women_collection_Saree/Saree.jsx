import backgroundimage from "../../assets/background/texture.jpeg";

// Import all saree images
import saree1 from "../../assets/saree/20220701012756_saree3jpg.jpg";
import saree2 from "../../assets/saree/20220701013816_saree6jpg.jpg";
import saree3 from "../../assets/saree/20220701020522_saree14jpg.jpg";
import saree4 from "../../assets/saree/20220701022049_saree15jpg.jpg";
import saree5 from "../../assets/saree/20220701023034_saree21jpg.jpg";
import saree6 from "../../assets/saree/20220701023309_saree10jpg.jpg";
import saree7 from "../../assets/saree/20220701023743_saree18jpg.jpg";
import saree8 from "../../assets/saree/20220701051958_saree24jpg.jpg";
import saree9 from "../../assets/saree/20220701052303_saree27jpg.jpg";
import saree10 from "../../assets/saree/20220706014527_saree31jpg.jpg";
import saree11 from "../../assets/saree/20220706044549_saree36jpg.jpg";
import saree12 from "../../assets/saree/20220818035210_saree3.jpg";
import saree13 from "../../assets/saree/20220818035454_saree4.jpg";
import saree14 from "../../assets/saree/20220818041530_saree12.jpg";
import saree16 from "../../assets/saree/202306130105335640.jpg";
import saree15 from "../../assets/saree/202306051129434109.jpg";
import saree17 from "../../assets/saree/202308130437293854.jpg";
import saree18 from "../../assets/saree/202308130459048337.jpg";
import saree19 from "../../assets/saree/202311090106477401.jpg";
import saree20 from "../../assets/saree/202311090109382550.jpg";
import saree21 from "../../assets/saree/202311251200591987.jpg";
import saree22 from "../../assets/saree/202311251203451414.jpg";
import saree23 from "../../assets/saree/202312170457325055.jpg";
import saree24 from "../../assets/saree/202403120455114412.jpg";
import saree25 from "../../assets/saree/202403120500304485.jpg";
import saree26 from "../../assets/saree/202403120504123278.jpg";
import saree27 from "../../assets/saree/202407141226471461.jpg";
import saree28 from "../../assets/saree/202407141236028847.jpg";
import saree29 from "../../assets/saree/202407141238382093.jpg";
import saree30 from "../../assets/saree/202407141240114792.jpg";
import saree31 from "../../assets/saree/202407141248594678.jpg";
import saree32 from "../../assets/saree/202506220255332390.jpg";
import saree33 from "../../assets/saree/202506220338296992.jpg";
import saree34 from "../../assets/saree/202506220513439984.jpg";
import saree35 from "../../assets/saree/202506220519491869.jpg";
import saree36 from "../../assets/saree/202506220555468068.JPG";
import saree37 from "../../assets/saree/202508030611393778.jpg";
import saree38 from "../../assets/saree/202508040517132154.jpg";

// Create the products array
const products = [
  {
    id: 1,
    name: "Elegant Saree 1",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹2500",
    image: saree1,
    link: "/product_details/1",
  },
  {
    id: 2,
    name: "Elegant Saree 2",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹2600",
    image: saree2,
    link: "/product_details/2",
  },
  {
    id: 3,
    name: "Elegant Saree 3",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹2700",
    image: saree3,
    link: "/product_details/3",
  },
  {
    id: 4,
    name: "Elegant Saree 4",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹2800",
    image: saree4,
    link: "/product_details/4",
  },
  {
    id: 5,
    name: "Elegant Saree 5",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹2900",
    image: saree5,
    link: "/product_details/5",
  },
  {
    id: 6,
    name: "Elegant Saree 6",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3000",
    image: saree6,
    link: "/product_details/6",
  },
  {
    id: 7,
    name: "Elegant Saree 7",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3100",
    image: saree7,
    link: "/product_details/7",
  },
  {
    id: 8,
    name: "Elegant Saree 8",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3200",
    image: saree8,
    link: "/product_details/8",
  },
  {
    id: 9,
    name: "Elegant Saree 9",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3300",
    image: saree9,
    link: "/product_details/9",
  },
  {
    id: 10,
    name: "Elegant Saree 10",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3400",
    image: saree10,
    link: "/product_details/10",
  },
  {
    id: 11,
    name: "Elegant Saree 11",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3500",
    image: saree11,
    link: "/product_details/11",
  },
  {
    id: 12,
    name: "Elegant Saree 12",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3600",
    image: saree12,
    link: "/product_details/12",
  },
  {
    id: 13,
    name: "Elegant Saree 13",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3700",
    image: saree13,
    link: "/product_details/13",
  },
  {
    id: 14,
    name: "Elegant Saree 14",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3800",
    image: saree14,
    link: "/product_details/14",
  },
  {
    id: 15,
    name: "Elegant Saree 15",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹3900",
    image: saree15,
    link: "/product_details/15",
  },
  {
    id: 16,
    name: "Elegant Saree 16",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4000",
    image: saree16,
    link: "/product_details/16",
  },
  {
    id: 17,
    name: "Elegant Saree 17",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4100",
    image: saree17,
    link: "/product_details/17",
  },
  {
    id: 18,
    name: "Elegant Saree 18",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4200",
    image: saree18,
    link: "/product_details/18",
  },
  {
    id: 19,
    name: "Elegant Saree 19",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4300",
    image: saree19,
    link: "/product_details/19",
  },
  {
    id: 20,
    name: "Elegant Saree 20",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4400",
    image: saree20,
    link: "/product_details/20",
  },
  {
    id: 21,
    name: "Elegant Saree 21",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4500",
    image: saree21,
    link: "/product_details/21",
  },
  {
    id: 22,
    name: "Elegant Saree 22",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4600",
    image: saree22,
    link: "/product_details/22",
  },
  {
    id: 23,
    name: "Elegant Saree 23",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4700",
    image: saree23,
    link: "/product_details/23",
  },
  {
    id: 24,
    name: "Elegant Saree 24",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4800",
    image: saree24,
    link: "/product_details/24",
  },
  {
    id: 25,
    name: "Elegant Saree 25",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹4900",
    image: saree25,
    link: "/product_details/25",
  },
  {
    id: 26,
    name: "Elegant Saree 26",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5000",
    image: saree26,
    link: "/product_details/26",
  },
  {
    id: 27,
    name: "Elegant Saree 27",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5100",
    image: saree27,
    link: "/product_details/27",
  },
  {
    id: 28,
    name: "Elegant Saree 28",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5200",
    image: saree28,
    link: "/product_details/28",
  },
  {
    id: 29,
    name: "Elegant Saree 29",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5300",
    image: saree29,
    link: "/product_details/29",
  },
  {
    id: 30,
    name: "Elegant Saree 30",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5400",
    image: saree30,
    link: "/product_details/30",
  },
  {
    id: 31,
    name: "Elegant Saree 31",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5500",
    image: saree31,
    link: "/product_details/31",
  },
  {
    id: 32,
    name: "Elegant Saree 32",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5600",
    image: saree32,
    link: "/product_details/32",
  },
  {
    id: 33,
    name: "Elegant Saree 33",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5700",
    image: saree33,
    link: "/product_details/33",
  },
  {
    id: 34,
    name: "Elegant Saree 34",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5800",
    image: saree34,
    link: "/product_details/34",
  },
  {
    id: 35,
    name: "Elegant Saree 35",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹5900",
    image: saree35,
    link: "/product_details/35",
  },
  {
    id: 36,
    name: "Elegant Saree 36",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹6000",
    image: saree36,
    link: "/product_details/36",
  },
  {
    id: 37,
    name: "Elegant Saree 37",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹6100",
    image: saree37,
    link: "/product_details/37",
  },
  {
    id: 38,
    name: "Elegant Saree 38",
    category: "Women's",
    mrp: "N/A",
    salePrice: "₹6200",
    image: saree38,
    link: "/product_details/38",
  },
];

const Saree = () => {
  return (
    <section
      id="expert"
      className="py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          WOMEN COLLECTION | SAREE
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

export default Saree;

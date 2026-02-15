import backgroundimage from '../../assets/background/texture.jpeg';

import kurta1 from "../../assets/Kurta/20220701053530_kurta-18.jpg";
import kurta2 from "../../assets/Kurta/20220701053816_kurta-14.jpg";
import kurta3 from "../../assets/Kurta/20220701054250_kurta-17.jpg";
import kurta4 from "../../assets/Kurta/20220702011854_kurta-24.jpg";
import kurta5 from "../../assets/Kurta/20220702044927_kurta-32.jpg";
import kurta6 from "../../assets/Kurta/20220702045211_kurta-30.jpg";
import kurta7 from "../../assets/Kurta/20220702053235_kurta-35.jpg";
import kurta8 from "../../assets/Kurta/20220702053826_kurta-32.jpg";
import kurta9 from "../../assets/Kurta/20220706045906_kurta-36.jpg";
import kurta10 from "../../assets/Kurta/202306051132553918.jpg";
import kurta11 from "../../assets/Kurta/202306051135005290.jpg";
import kurta12 from "../../assets/Kurta/202306051144118013.jpg";
import kurta13 from "../../assets/Kurta/202306051150403933.jpg";
import kurta14 from "../../assets/Kurta/202306051152263332.jpg";
import kurta15 from "../../assets/Kurta/202306091151199973.jpg";
import kurta16 from "../../assets/Kurta/202307230156514551.jpg";
import kurta17 from "../../assets/Kurta/202307241152013326.jpg";
import kurta18 from "../../assets/Kurta/202307260712215804.jpg";
import kurta19 from "../../assets/Kurta/202307261230253222.jpg";
import kurta20 from "../../assets/Kurta/202307290435109913.jpg";
import kurta21 from "../../assets/Kurta/202309051255307938.jpg";
import kurta22 from "../../assets/Kurta/202309171121226887.jpg";
import kurta23 from "../../assets/Kurta/202309171127055224.jpg";
import kurta24 from "../../assets/Kurta/202309171129546977.jpg";
import kurta25 from "../../assets/Kurta/202506220416139643.JPG";
import kurta26 from "../../assets/Kurta/202506220422441284.JPG";
import kurta27 from "../../assets/Kurta/202506220431392012.jpeg";
import kurta28 from "../../assets/Kurta/202508040534355330.jpg";
import kurta29 from "../../assets/Kurta/202508230113381442.jpg";
import kurta30 from "../../assets/Kurta/202508230124357085.jpg";
import kurta31 from "../../assets/Kurta/202508230145292557.jpg";
import kurta32 from "../../assets/Kurta/202508230156287145.jpg";
import kurta33 from "../../assets/Kurta/202508230229268387.jpg";
import kurta34 from "../../assets/Kurta/202508230243377999.jpg";
import kurta35 from "../../assets/Kurta/202508230548082096.jpg";
import kurta36 from "../../assets/Kurta/202508230604462492.jpg";
import kurta37 from "../../assets/Kurta/202508231217258307.jpg";
import kurta38 from "../../assets/Kurta/202508231234078392.jpg";

const products = [
  { id: 1, name: "Kurta Classic", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta1, link: "/product_details/1" },
  { id: 2, name: "Kurta Royal", category: "Men's", mrp: "₹20000", salePrice: "₹19000", image: kurta2, link: "/product_details/2" },
  { id: 3, name: "Kurta Elegance", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta3, link: "/product_details/3" },
  { id: 4, name: "Kurta Premium", category: "Men's", mrp: "₹24000", salePrice: "₹23000", image: kurta4, link: "/product_details/4" },
  { id: 5, name: "Kurta Comfort", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta5, link: "/product_details/5" },
  { id: 6, name: "Kurta Deluxe", category: "Men's", mrp: "₹25000", salePrice: "₹24000", image: kurta6, link: "/product_details/6" },
  { id: 7, name: "Kurta Trendy", category: "Men's", mrp: "₹21000", salePrice: "₹20000", image: kurta7, link: "/product_details/7" },
  { id: 8, name: "Kurta Modern", category: "Men's", mrp: "₹18000", salePrice: "₹17000", image: kurta8, link: "/product_details/8" },
  { id: 9, name: "Kurta Urban", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta9, link: "/product_details/9" },
  { id: 10, name: "Kurta Luxe", category: "Men's", mrp: "₹26000", salePrice: "₹25000", image: kurta10, link: "/product_details/10" },
  { id: 11, name: "Kurta Heritage", category: "Men's", mrp: "₹20000", salePrice: "₹19000", image: kurta11, link: "/product_details/11" },
  { id: 12, name: "Kurta Supreme", category: "Men's", mrp: "₹27000", salePrice: "₹26000", image: kurta12, link: "/product_details/12" },
  { id: 13, name: "Kurta Festive", category: "Men's", mrp: "₹21000", salePrice: "₹20000", image: kurta13, link: "/product_details/13" },
  { id: 14, name: "Kurta Celebration", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta14, link: "/product_details/14" },
  { id: 15, name: "Kurta Party", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta15, link: "/product_details/15" },
  { id: 16, name: "Kurta Classic Gold", category: "Men's", mrp: "₹24000", salePrice: "₹23000", image: kurta16, link: "/product_details/16" },
  { id: 17, name: "Kurta Royal Blue", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta17, link: "/product_details/17" },
  { id: 18, name: "Kurta Elegant Red", category: "Men's", mrp: "₹21000", salePrice: "₹20000", image: kurta18, link: "/product_details/18" },
  { id: 19, name: "Kurta Festive Green", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta19, link: "/product_details/19" },
  { id: 20, name: "Kurta Royal Maroon", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta20, link: "/product_details/20" },
  { id: 21, name: "Kurta Trendy Black", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta21, link: "/product_details/21" },
  { id: 22, name: "Kurta Classic White", category: "Men's", mrp: "₹20000", salePrice: "₹19000", image: kurta22, link: "/product_details/22" },
  { id: 23, name: "Kurta Gold Shine", category: "Men's", mrp: "₹25000", salePrice: "₹24000", image: kurta23, link: "/product_details/23" },
  { id: 24, name: "Kurta Celebration Blue", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta24, link: "/product_details/24" },
  { id: 25, name: "Kurta Party Red", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta25, link: "/product_details/25" },
  { id: 26, name: "Kurta Luxe Gold", category: "Men's", mrp: "₹26000", salePrice: "₹25000", image: kurta26, link: "/product_details/26" },
  { id: 27, name: "Kurta Elegant Beige", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta27, link: "/product_details/27" },
  { id: 28, name: "Kurta Royal Green", category: "Men's", mrp: "₹21000", salePrice: "₹20000", image: kurta28, link: "/product_details/28" },
  { id: 29, name: "Kurta Festive Yellow", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta29, link: "/product_details/29" },
  { id: 30, name: "Kurta Trendy Orange", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta30, link: "/product_details/30" },
  { id: 31, name: "Kurta Classic Pink", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta31, link: "/product_details/31" },
  { id: 32, name: "Kurta Royal Purple", category: "Men's", mrp: "₹20000", salePrice: "₹19000", image: kurta32, link: "/product_details/32" },
  { id: 33, name: "Kurta Luxe Orange", category: "Men's", mrp: "₹25000", salePrice: "₹24000", image: kurta33, link: "/product_details/33" },
  { id: 34, name: "Kurta Festive Blue", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta34, link: "/product_details/34" },
  { id: 35, name: "Kurta Party Green", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta35, link: "/product_details/35" },
  { id: 36, name: "Kurta Classic Red", category: "Men's", mrp: "₹26000", salePrice: "₹25000", image: kurta36, link: "/product_details/36" },
  { id: 37, name: "Kurta Elegant Black", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta37, link: "/product_details/37" },
  { id: 38, name: "Kurta Royal White", category: "Men's", mrp: "₹21000", salePrice: "₹20000", image: kurta38, link: "/product_details/38" },
];

const Kurta = () => {
  return (
    <section
      id="expert"
      className="py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          MEN'S COLLECTION | KURTA
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

export default Kurta;

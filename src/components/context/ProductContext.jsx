import { createContext, useContext } from "react";

// ================= IMPORT ALL IMAGES HERE =================

// Dhuti
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

// Dhuti

// Background (if needed globally)

// ================= CREATE CONTEXT =================

const ProductContext = createContext();

 const ProductProvider = ({ children }) => {

  const products = [

    // ===== Dhuti Collection =====
    { id: 1, name: "Dhuti Classic", category: "Men's", mrp: "₹3500", salePrice: "₹3300", image: dhoti1, link: "/product_details/1",image:dhoti1 },
      { id: 2, name: "Dhuti Royal", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti2, link: "/product_details/2",image:dhoti2 },
      { id: 3, name: "Dhuti Elegance", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti3, link: "/product_details/3",image:dhoti3 },
      { id: 4, name: "Dhuti Premium", category: "Men's", mrp: "₹4000", salePrice: "₹3800", image: dhoti4, link: "/product_details/4",image:dhoti4 },
      { id: 5, name: "Dhuti Comfort", category: "Men's", mrp: "₹4000", salePrice: "₹3800", image: dhoti5, link: "/product_details/5",image:dhoti5 },
      { id: 6, name: "Dhuti Deluxe", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti6, link: "/product_details/6",image:dhoti6 },
      { id: 7, name: "Dhuti Trendy", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti7, link: "/product_details/7",image:dhoti7 },
      { id: 8, name: "Dhuti Modern", category: "Men's", mrp: "₹3500", salePrice: "₹3300", image: dhoti8, link: "/product_details/8",image:dhoti8 },
      { id: 9, name: "Dhuti Urban", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti9, link: "/product_details/9",image:dhoti9 },
      { id: 10, name: "Dhuti Luxe", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti10, link: "/product_details/10",image:dhoti10 },
      { id: 11, name: "Dhuti Heritage", category: "Men's", mrp: "₹4000", salePrice: "₹3800", image: dhoti11, link: "/product_details/11",image:dhoti11 },
      { id: 12, name: "Dhuti Supreme", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti12, link: "/product_details/12",image:dhoti12 },

  ];

  return (
    <ProductContext.Provider value={{ products}}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook (clean usage)
export const useProducts = () => useContext(ProductContext);
export default ProductProvider;
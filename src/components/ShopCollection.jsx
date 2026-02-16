import mens from "../assets/category_image/20220924071927_mens.webp";
import womens from "../assets/category_image/20220924071914_womens.webp";
import couple from "../assets/category_image/20220924071854_couple.webp";
import juti from "../assets/category_image/20220924071838_coverjuti.webp";
import clientele from "../assets/category_image/202407140449564196.jpg";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Men's",
    image: mens,
    link: "/man/kurta",
  },
  {
    id: 2,
    title: "Women",
    image: womens,
    link: "/women/saree",
  },
  {
    id: 3,
    title: "Couple",
    image: couple,
    link: "/couple/lahenga_sherwani",
  },
  {
    id: 4,
    title: "Juti",
    image: juti,
    link: "/juti",
  },
  {
    id: 5,
    title: "Clientele",
    image: clientele,
    link: "/clintele",
  },
];


const ShopCollection = () => {
  return (
    <section id="expert" className="bg-[#ede0b4] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            SHOP THE COLLECTION
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">

          {categories.map((item) => (
            <div
              key={item.id}
              className="group w-[255px]"
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-xl shadow-lg">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[380px]
                    object-cover
                    transition duration-500
                    group-hover:scale-110
                  "
                />

                {/* Dark Overlay */}
                <div className="
                  absolute inset-0
                  bg-black/30
                  opacity-0
                  group-hover:opacity-100
                  transition duration-300
                " />
              </div>

              {/* Info */}
              <div className="text-center mt-6">
                <h4 className="text-lg font-medium mb-3">
                  {item.title}
                </h4>

                <Link
                  to={item.link}
                  className="
                    inline-block
                    border border-black
                    px-6 py-2
                    rounded-full
                    text-sm
                    transition duration-300
                    hover:bg-black hover:text-white
                  "
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ShopCollection;

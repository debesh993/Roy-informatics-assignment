import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import image1 from "../assets/admin_hero_images/20220924072451_banner1.webp";
import image11 from "../assets/admin_hero_images/20220924072451_banner.webp";

import image2 from "../assets/admin_hero_images/20220924072606_banner.webp";
import image21 from "../assets/admin_hero_images/20220924072606_banner4.webp";

import image3 from "../assets/admin_hero_images/202306050147251819.jpg";
import image31 from "../assets/admin_hero_images/20230605014725181.jpg";

import image4 from "../assets/admin_hero_images/202506220226159388.jpg";
import image5 from "../assets/admin_hero_images/202506220234343515.jpg";
import image51 from "../assets/admin_hero_images/20250622023434351.jpg";

const slides = [
  {
    id: 1,
    imageSmall: image11,
    imageLarge: image1,
  },
  {
    id: 2,
    imageSmall: image21,
    imageLarge: image2,
  },
  {
    id: 3,
    imageSmall: image31,
    imageLarge: image3,
  },
  {
    id: 4,
    imageSmall: image4,
    imageLarge: image4,
  },
  {
    id: 5,
    imageSmall: image51,
    imageLarge: image5,
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${window.innerWidth >= 1024 ? slide.imageLarge : slide.imageSmall})`,
              }}
            >
              {/* Dark Overlay */}

              {/* Content Container (if needed later) */}
              <div className="relative z-10 flex items-center justify-center h-full px-6">
                {/* You can add heading here later */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

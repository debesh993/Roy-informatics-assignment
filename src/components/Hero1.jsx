import { useEffect } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import banner1 from "../assets/admin_hero_images/20220924072451_banner1.webp";
import banner2 from "../assets/admin_hero_images/20220924072606_banner4.webp";
import banner3 from "../assets/admin_hero_images/202306050147251819.jpg";
import banner4 from "../assets/admin_hero_images/202506220226159388.jpg";
import banner5 from "../assets/admin_hero_images/202506220234343515.jpg";

const slides = [banner5, banner4, banner3, banner2, banner1]; // order like your snippet

const Hero1 = () => {
  useEffect(() => {
    gsap.from(".slide-inner", {
      scale: 1.05,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="hero-section w-full h-screen relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        className="w-full h-full"
        onSlideChange={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex].querySelector(".slide-inner");
          gsap.fromTo(activeSlide, { scale: 1.05 }, { scale: 1, duration: 3, ease: "power3.out" });
        }}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-inner w-[100vw] h-screen bg-center bg-contain bg-no-repeat  relative"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="container mx-auto h-full flex items-center">
                <div className="carousel-detail" data-swiper-parallax="-900">
                  <div className="carousel-detail-animate">
                    {/* Optional text overlay here */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero1;

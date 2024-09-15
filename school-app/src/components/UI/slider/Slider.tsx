// import Swiper core and required modules
import Image from "../../../assets/slider/01.jpg";
import Image1 from "../../../assets/slider/1.jpg";
import Image2 from "../../../assets/slider/2.jpeg";
import Image3 from "../../../assets/slider/3.webp";
import Image4 from "../../../assets/slider/4.jpg";
import Image5 from "../../../assets/slider/5.jpg";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import "./slider.scss";
export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image4} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image5} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image4} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image5} />
      </SwiperSlide>
    </Swiper>
  );
}

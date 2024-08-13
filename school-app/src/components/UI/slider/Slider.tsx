// import Swiper core and required modules
import Image from '../../../assets/slider/01.jpg'
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
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image} />
      </SwiperSlide>
    </Swiper>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
const Slider = ({ sliderProducts }) => {
  return (
    <div className="slides-main">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliderProducts.map((sliderProduct) => (
          <SwiperSlide key={sliderProduct.image}>
            <img src={sliderProduct.image} alt={sliderProduct.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

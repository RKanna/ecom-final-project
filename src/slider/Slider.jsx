import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
const Slider = ({ products }) => {
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
        {products.map(
          (product) =>
            product.sliderValue === true && (
              <SwiperSlide key={product.image}>
                <div className="slide-img-fix">
                  <Link to={`/product/${product.itemId}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default Slider;

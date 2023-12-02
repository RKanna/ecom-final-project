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
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 2,
            },
            1500: {
              slidesPerView: 2,
            },
            1700: {
              slidesPerView: 2,
            },
          }}
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
                      <img
                        className="slider-main-img"
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

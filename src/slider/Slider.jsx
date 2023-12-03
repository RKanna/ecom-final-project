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
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 100,
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

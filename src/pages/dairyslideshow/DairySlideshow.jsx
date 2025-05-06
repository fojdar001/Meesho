// src/components/DairySlideshow.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./DairySlideshow.css";

const slides = [
  {
    image: "https://www.boldsky.com/img/2015/08/05-1438771364-cover.jpg",
    title: "Fresh Milk Delivered Daily",
    subtitle: "From local farms to your doorstep"
  },
  {
    image: "https://th.bing.com/th/id/OIP.CHWl1Yy9L2IQQPPhe9yJjAHaE8?rs=1&pid=ImgDetMain",
    title: "Pure Butter & Ghee",
    subtitle: "100% Natural and Homemade Taste"
  },
  {
    image: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/how_to_follow_low_residue_diet_slideshow/493ss_getty_rf_dairy.jpg?resize=339px:*&output-quality=100",
    title: "Organic Curd & Cheese",
    subtitle: "Healthy, Creamy, Delicious"
  }
];

const DairySlideshow = () => {
  return (
    <div className="dairy-slideshow">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="dairy-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img src={slide.image} alt={slide.title} />
              <div className="slide-caption">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DairySlideshow;

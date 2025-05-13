import React, { useEffect, useState } from "react";
import "./DairySlideshow.css";

const slides = [
  {
    image: "https://img.freepik.com/premium-photo/bottle-glass-milk-grass-field_929907-3520.jpg",
    title: "Fresh Milk Delivered Daily",
    subtitle: "From local farms to your doorstep"
  },
  {
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321707/ghee-butter-in-glass-jar-with-wooden-spoon.jpg",
    title: "Pure Butter & Ghee",
    subtitle: "100% Natural and Homemade Taste"
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5eb43938f468c330e7d8d665/1633610695806-0M8I2NMZNNLLQ7DZOH0D/cheese-curds.jpg",
    title: "Organic Curd & Cheese",
    subtitle: "Healthy, Creamy, Delicious"
  }
];

const DairyBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // reset animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // trigger animation again
      }, 300); // slight delay for re-animation
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle } = slides[currentIndex];

  return (
    <div
      className="dairy-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`banner-text ${fade ? "fade-in" : ""}`}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default DairyBanner;

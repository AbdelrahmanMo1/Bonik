import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderData from "./SliderData";

const SideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {SliderData.map((slide) => {
        const { id, title, desc, image } = slide;
        return (
          <div className="slide-container" key={id}>
            <div className="slide-content w-[60%]">
              <h2 className="font-bold text-7xl leading-tight">{title}</h2>
              <p className="sm:text-lg lg:my-7 my-2 text-md">{desc}</p>
              <div className="btn-main">
                <button className="bg-[#33415c] text-white text-lg py-2 px-6 rounded-md capitalize my-3 hover:bg-[#384764e5] transition-all duration-500 lg:ml-2 ml-0">
                  visit collection
                </button>
              </div>
            </div>
            <div className="slide-img w-[300px] h-[300px]">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SideCard;

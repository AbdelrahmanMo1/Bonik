import React from "react";
import Data from "./Data";
import Slider from "react-slick";

const TopCart = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {Data.map((category) => {
          const { id, image, name, desc } = category;
          return (
            <section key={id}>
              <div className="top-catigory bg-[#f8f9fa] p-5 mb-3 mx-3 rounded-md">
                <div className="flex justify-between relative text-sm">
                  <h3 className="absolute top-0 left-0 bg-[#979dac] text-white py-1 px-2 rounded-md capitalize">
                    {name}
                  </h3>
                  <p className="absolute top-0 right-0 bg-[#495057] text-white py-1 px-2 rounded-md">
                    {desc}
                  </p>
                </div>
                <img src={image} alt={name} className="w-full h-full" />
              </div>
            </section>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;

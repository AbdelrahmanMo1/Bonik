import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <section className="container mx-auto pb-5">
      <div className="banner flex justify-between">
        <div className="banner-img w-[30%] h-[350px] object-cover ">
          <img
            src={require("./imgs/banner-1.png")}
            className="w-full h-full rounded-md"
            alt="banner-1"
          />
        </div>
        <div className="banner-img w-[68%] h-[350px] object-cover">
          <img
            src={require("./imgs/banner-2.png")}
            className="w-full h-full rounded-md"
            alt="banner-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

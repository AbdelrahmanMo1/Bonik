import React from "react";
import Categories from "./Categories";
import Slider from "./Slider";
import "./home.css";
const Home = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Categories />
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Home;

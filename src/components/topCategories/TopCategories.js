import React from "react";
import { BiCategory } from "react-icons/bi";
import TopCart from "./Categories";
import "./categories.css";
const TopCategories = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center text-3xl font-bold space-x-1 mb-5">
        <i className="text-[#e94560]">
          <BiCategory />
        </i>
        <p className="text-[#2B2C30]">Top Categories</p>
      </div>
      <TopCart />
    </section>
  );
};

export default TopCategories;

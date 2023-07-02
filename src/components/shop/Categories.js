import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <section className="flex justify-center items-center font-bold sm:space-x-1 space-x-0 text-lg">
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button
              className="tracking-wider capitalize text-[#2B2C30] hover:bg-[#e94560] hover:text-white px-2 rounded-md transition-all duration-300"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Categories;

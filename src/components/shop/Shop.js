import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Cart from "./Cart";
import { FaMobileAlt } from "react-icons/fa";

const newCategories = ["all", ...new Set(items.map((item) => item.category))];

const Shop = ({ addToCard }) => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(newCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <section className="container mx-auto py-5">
      <Categories categories={categories} filterItems={filterItems} />
      <div className="py-5">
        <div className="flex items-center text-3xl font-bold space-x-1">
          <i className="text-[#e94560]">
            <FaMobileAlt />
          </i>
          <p className="text-[#2B2C30]">Mobile Phone</p>
        </div>
        <Cart items={menuItems} addToCard={addToCard} />
      </div>
    </section>
  );
};

export default Shop;

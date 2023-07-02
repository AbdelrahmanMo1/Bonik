import React from "react";
import { GiElectric } from "react-icons/gi";
import FlashCard from "./FlashCard";
import "./flash.css";

const FlashDeals = ({ productItems, addToCard }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="flex items-center text-3xl font-bold mb-5">
          <i className="text-[#e94560]">
            <GiElectric />
          </i>
          <p className="text-[#2B2C30]">Flash Deals</p>
        </h2>
        <FlashCard productItems={productItems} addToCard={addToCard} />
      </div>
    </section>
  );
};

export default FlashDeals;

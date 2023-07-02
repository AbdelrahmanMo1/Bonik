import React from "react";
import Data from "./Data";
const Cart = () => {
  return (
    <section className="new-arrivals grid lg:grid-cols-6 lg:gap-x-5 md:grid-cols-4 md:gap-x-7 grid-cols-2 gap-x-10 gap-y-5">
      {Data.map((carts) => {
        const { id, name, image, price } = carts;
        return (
          <div key={id} className="bg-[#f8f9fa] p-5 mb-3 rounded-md relative">
            <div>
              <img src={image} alt={name} className="w-full h-full" />
            </div>
            <h3 className="text-xl text-[#2B2C30] font-bold mt-3 mb-1">
              {name}
            </h3>
            <h2 className="text-xl font-bold text-[#7d8597]">${price}</h2>
          </div>
        );
      })}
    </section>
  );
};

export default Cart;

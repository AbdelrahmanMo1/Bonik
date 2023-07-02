import React, { useState } from "react";
import "./shop.css";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

const Cart = ({ items, addToCard }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="grid lg:grid-cols-4 gap-x-4 gap-y-0 md:grid-cols-3 grid-cols-2">
      {items.map((item) => {
        const { id, discount, image, name, price } = item;
        return (
          <div className="py-5 mx-2" key={id}>
            <div className="flash-box relative bg-white px-5 py-6  rounded-md">
              <div className="relative">
                <span className="bg-[#e94560] text-white py-1 px-2 rounded-md text-sm">
                  % {discount} Off
                </span>
                <img src={image} alt={name} />
                <div className="like absolute top-0 right-0 text-center opacity-0">
                  <p className="bg-[#2B2C30] text-white text-xl mb-2 flex justify-center items-center w-[30px] h-[30px] rounded-full">
                    {count}
                  </p>
                  <i
                    className="text-3xl text-[#e94560] cursor-pointer"
                    onClick={increment}
                  >
                    <AiOutlineHeart />
                  </i>
                </div>
              </div>
              <div>
                <p className="name-item text-lg text-[#2B2C30] font-bold tracking-wide">
                  {name}
                </p>
                <div className="flex sm:space-x-1 text-xl text-yellow-500 my-1">
                  <i>
                    <AiTwotoneStar />
                  </i>
                  <i>
                    <AiTwotoneStar />
                  </i>
                  <i>
                    <AiTwotoneStar />
                  </i>
                  <i>
                    <AiTwotoneStar />
                  </i>
                  <i>
                    <AiTwotoneStar />
                  </i>
                </div>
                <div className="flex justify-between items-center text-xl">
                  <p className="font-bold text-[#e94560]">{price}.00</p>
                  <button
                    className="bg-[#e94560] text-white p-2 rounded-md"
                    onClick={() => addToCard(item)}
                  >
                    <BsCartPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

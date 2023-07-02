import React from "react";
import "./cart.css";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = ({ cartItem, addToCard, decreaseQty, removeItem }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <div className="cart flex justify-between container mx-auto my-8 min-h-[42vh]">
      <div className="cart-item w-[70%]">
        {cartItem.length === 0 && (
          <h1 className="text-3xl text-[#e94560] font-bold capitalize">
            no items are add in cart
          </h1>
        )}
        {cartItem.map((item) => {
          const { id, image, name, price, qty } = item;
          const productQty = price * qty;
          return (
            <div
              className="flash-box relative bg-white px-5 mb-5 rounded-md flex items-center"
              key={id}
            >
              <img src={image} alt={name} width="150" />
              <div className="w-full">
                <h2 className="text-lg text-[#2B2C30] font-bold">{name}</h2>
                <p className="text-lg text-[#e94560]">{price * qty}.00</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center space-x-3">
                    <span>Qty: {qty}</span>
                    <div className="flex space-x-2 text-black text-lg">
                      <button
                        className="hover:bg-[#e94560] hover:text-white transition-all duration-300 rounded-full"
                        onClick={() => addToCard(item)}
                      >
                        <AiOutlinePlus />
                      </button>
                      <button
                        className="hover:bg-[#e94560] hover:text-white transition-all duration-300 rounded-full"
                        onClick={() => decreaseQty(item)}
                      >
                        <AiOutlineMinus />
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <p className="font-bold text-[#2B2C30]">
                      Subtotal({qty}): $
                    </p>
                    {productQty}
                  </div>
                </div>
              </div>
              <button
                className="absolute top-5 right-5 text-2xl text-red-500"
                onClick={() => removeItem(id)}
              >
                <AiFillDelete />
              </button>
            </div>
          );
        })}
      </div>

      {totalPrice === 0 ? (
        ""
      ) : (
        <div className="summary border border-[#33415c] h-fit py-3 px-6 rounded-md w-[26%]">
          <h1 className="text-2xl text-[#33415c] font-bold border-b border-neutral-500 pb-3">
            Cart Summary
          </h1>
          <h3 className="text-xl text-[#2B2C30] font-bold py-3 flex justify-between">
            Total Price:{" "}
            <span className="text-[#e94560]">${totalPrice}.00</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;

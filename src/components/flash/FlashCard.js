import React, { useState } from "react";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
  BsCartPlus,
} from "react-icons/bs";
import Slider from "react-slick";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="absolute -top-5 right-16">
      <button className="text-[#e94560] text-3xl">
        <BsFillArrowLeftSquareFill />
      </button>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="absolute -top-5 right-1">
      <button className="text-[#e94560] text-3xl">
        <BsFillArrowRightSquareFill />
      </button>
    </div>
  );
};

const FlashCard = ({ productItems, addToCard }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((item) => {
          const { id, discount, image, name, price } = item;
          return (
            <div className="py-8" key={id}>
              <div className="flash-box relative bg-white px-5 py-8 mx-5 rounded-md">
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
                  <p className="text-lg name text-[#2B2C30] font-bold tracking-wide">
                    {name}
                  </p>
                  <div className="flex space-x-1 text-xl text-yellow-500 my-1">
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
      </Slider>
    </>
  );
};

export default FlashCard;

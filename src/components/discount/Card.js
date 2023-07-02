import Data from "./Data";
import Slider from "react-slick";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

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

const Card = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
        {Data.map((item) => {
          const { id, image, name, price, oldPrice } = item;
          return (
            <section key={id} className="discount">
              <div className="bg-[#f8f9fa] p-5 mb-3 rounded-md mt-8 mx-3">
                <img src={image} alt={name} />
                <h3 className="name text-xl text-[#2B2C30] font-bold mt-3">
                  {name}
                </h3>
                <div className="flex justify-between mt-2">
                  <h2 className="text-xl font-bold text-[#7d8597]">{price}</h2>
                  <del className="text-[#e94560]">{oldPrice}</del>
                </div>
              </div>
            </section>
          );
        })}
      </Slider>
    </>
  );
};

export default Card;

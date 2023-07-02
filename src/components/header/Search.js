import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsFillBagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Search = ({ cartItem }) => {
  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 150);
  });
  return (
    <section className="search">
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-4">
          <Link
            to="/"
            className="lg:text-3xl sm:text-2xl font-bold uppercase text-[#e94560]"
          >
            Bonik
          </Link>
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="seach"
              className="w-full sm:py-1 pl-2 border border-[#2b2d42] rounded-md"
            />
            <i className="absolute right-2 sm:top-[5px] top-[3px] text-xl text-[#33415c]">
              <BsSearch />
            </i>
          </div>
          <div className="flex space-x-5 text-[#33415c]">
            <div>
              <i className="lg:text-2xl sm:text-xl cursor-pointer">
                <FaUserAlt />
              </i>
            </div>
            <Link to="/cart" className="relative">
              <i className="lg:text-2xl sm:text-xl cursor-pointer">
                <BsFillBagFill />
              </i>
              <span className="absolute -top-3 -right-5 bg-[#e94560] px-2 rounded-full text-white">
                {cartItem.length === 0 ? "" : cartItem.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;

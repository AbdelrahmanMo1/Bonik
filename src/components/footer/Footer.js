import React from "react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="py-10 mt-5 bg-[#33415c] text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0 sm:grid-cols-2 sm:gap-x-20 gap-y-8">
          <div className="box max-w-[400px]">
            <h2 className="text-3xl font-medium tracking-wide text-[#e94560] mb-4">
              Bonik
            </h2>
            <p className="mb-5 text-[#f8f9fa]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="flex justify-between">
              <button className="flex items-center space-x-1 capitalize bg-[#979dac] text-sm py-1 px-3 rounded">
                <i>
                  <FaGooglePlay />
                </i>
                <p>google play</p>
              </button>
              <button className="flex items-center space-x-1 capitalize bg-[#979dac] text-sm py-1 px-3 rounded">
                <i>
                  <FaAppStoreIos />
                </i>
                <p>app store</p>
              </button>
            </div>
          </div>
          <div className="box capitalize tracking-wide">
            <h2 className="text-3xl font-medium mb-4">about us</h2>
            <ul className="text-[#f8f9fa] text-xl space-y-1">
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">our stares</Link>
              </li>
              <li>
                <Link to="/">our cares</Link>
              </li>
              <li>
                <Link to="/">terms & conditions</Link>
              </li>
              <li>
                <Link to="/">privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="box capitalize tracking-wide">
            <h2 className="text-3xl font-medium mb-4">customer care</h2>
            <ul className="text-[#f8f9fa] text-xl space-y-1">
              <li>
                <Link to="/">help center</Link>
              </li>
              <li>
                <Link to="/">how to buy</Link>
              </li>
              <li>
                <Link to="/">track your order</Link>
              </li>
              <li>
                <Link to="/">corporate</Link>
              </li>
              <li>
                <Link to="/">returns & refunds</Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2 className="text-3xl font-medium mb-4 capitalize">contact us</h2>
            <ul className="space-y-2 text-xl">
              <li>50 washington square south,new york</li>
              <li>NY 10012,united states</li>
              <li className="">
                <span className="capitalize font-medium">email: </span>
                example@gmail.com
              </li>
              <li>
                <span className="capitalize font-medium">phone: </span>
                +201027440090
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <section className="bg-[#33415c] text-[#f8f9fa] py-3">
      <div className="container mx-auto">
        <div className="header flex justify-between items-center">
          <div className="flex items-center lg:space-x-8 space-x-3 lg:text-lg text-md">
            <a
              href="https://wa.me/+201027440090"
              className="flex items-center space-x-2"
            >
              <BsTelephoneFill /> <p>+201027440090</p>
            </a>
            <a
              href="mailto:prog.abdelrahman@gmail.com"
              className="flex items-center space-x-2 "
            >
              <BsEnvelopeFill /> <p>prog.abdelrahman.mo@gmail.com</p>
            </a>
          </div>
          <div className="flex items-center lg:space-x-5 space-x-3">
            <div className="space-x-5 lg:block hidden">
              <Link to="/">Theme FAQ"s</Link>
              <Link to="/">Need Help?</Link>
            </div>
            <div className="language flex space-x-4">
              <Link to="/" className="flex items-center">
                <span className="pr-1 text-xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> EN
              </Link>
              <Link to="/" className="flex items-center">
                <span className="pr-1 text-xl">🇪🇬</span> AR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;

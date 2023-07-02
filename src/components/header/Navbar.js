import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-[#33415c]">
          <button className="btn-category flex items-center space-x-2 text-[1.4rem] font-bold tracking-wider uppercase">
            <BiCategory />
            <p>Category</p>
          </button>
          <ul className={`${toggleMenu ? "nav-links open" : "nav-links"}`}>
            <li>
              <Link to="/" className="nav-link">
                home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                pages
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                user account
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                vendor account
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                track my order
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className={`${toggleMenu ? "toggle open" : "toggle"}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

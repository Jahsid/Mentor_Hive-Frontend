import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="bg-white">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
        <NavLink to="/">
          <span className="ml-2 text-2xl font-bold text-green-700">
            Elevate Hub
          </span>
        </NavLink>
      </div>

      {/* mobile menu button */}
      <div className="lg:hidden flex items-center">
        <button className="text-gray-600 focus:outline-none">
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {/* Desktop Navigation(only visible when user is not logged in) */}
      <ul className="items-center hidden space-x-8 lg:flex">
        <li>
          <button>
              Become a Mentor with Us
          </button>
        </li>
      </ul>

      {/* when isMobileIsOpen is true */}
      {isMobileMenuOpen &&(
        <div>
          <button>
            Become a Mentor with Us
          </button>

        {/* signin */}
          <button>
            Sign in
          </button>

        {/* signup */}
          <button>
            Sign up
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Nav;

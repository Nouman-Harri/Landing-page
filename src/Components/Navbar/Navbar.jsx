import React, { useState } from "react";
import img1 from "../../images/Black Modern Software Programmer Logo finel.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="pt-1 pb-2 bg-slate-200">
      <div className="">
        {/* Navigation links (Left) */}
        <div className="text-center">
          <ul className="flex space-x-8 items-center justify-center">
            <li>
              <a
                href="/"
                className="text-black transition inline-block hover:border-b-2 hover:border-blue-500 px-7"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-black transition inline-block hover:border-b-2 hover:border-blue-500 px-7"
              >
                Services
              </a>
            </li>
            <li>
              <a href="/services" className="text-black inline-block">
                <img className="h-[80px] w-[80px] m-auto" src={img1} alt="" />
                <span className="font-semibold">
                  BYTE BLITZ INTERNATIONAL
                </span>{" "}
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-black transition inline-block hover:border-b-2 hover:border-blue-500 px-7"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-black transition inline-block hover:border-b-2 hover:border-blue-500 px-7"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger menu icon for small screens */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="fas fa-times text-black text-2xl"></i>
          ) : (
            <i className="fas fa-bars text-black text-2xl"></i>
          )}
        </div>

        {/* Mobile menu for small screens */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center mt-16">
            <li>
              <a
                href="/"
                className="text-black py-2 transition inline-block hover:bg-gray-700 hover:border-b-2 hover:border-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-black py-2 transition inline-block hover:bg-gray-700 hover:border-b-2 hover:border-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-black py-2 transition inline-block hover:bg-gray-700 hover:border-b-2 hover:border-blue-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-black py-2 transition inline-block hover:bg-gray-700 hover:border-b-2 hover:border-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
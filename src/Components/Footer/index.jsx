import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  const iconSize = 32;

  return (
    <footer className="flex items-center justify-start bg-[#004994] text-white p-8">
      <div className="flex items-center justify-start mb-4 w-1/3">
        <div className="flex items-center space-x-8">
          <a
            href="/"
            className="text-white"
            style={{ fontSize: `${iconSize}px` }}
          >
            <FaWhatsapp />
          </a>
          <a
            href="/"
            className="text-white"
            style={{ fontSize: `${iconSize}px` }}
          >
            <FaTelegram />
          </a>
          <a
            href="/"
            className="text-white"
            style={{ fontSize: `${iconSize}px` }}
          >
            <FaTwitter />
          </a>
          <a
            href="/"
            className="text-white"
            style={{ fontSize: `${iconSize}px` }}
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="text-center mb-4 w-1/3">
        <p>
          This is prime space! Use it to elaborate on your attention-grabbing
          title. Explain what this section is about, share some details, and
          give just the right amount of information to get the audience hooked.
        </p>
        <p>
          Don't give everything away, though! After all, you want them to click
          on your call-to-action after reading this.
        </p>
        <h1 className="text-4xl font-bold mt-4">Lets Talk</h1>
      </div>

      <div className="flex items-center justify-end w-1/3">
        <button className="text-white border border-white px-20 py-3 ">
          Join Us
        </button>
      </div>
    </footer>
  );
};

export default Footer;

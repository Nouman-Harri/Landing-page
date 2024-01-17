import React from "react";
import AvatarComponent from "../Avatar";

function Contact() {
  return (
    <div>
      <div
        className="text-center ml-80 mt-14"
        style={{ display: "-webkit-inline-box", gap: "21px" }}
      >
        <div className="border-b-3 border-blue-500 h-0.5 w-60 mt-10 mb-2 mx-auto"></div>
        <h1 className="text-3xl font-semibold mb-4 mx-auto">
          Our chief exceutive officer <br /> (CEO) and Founder
        </h1>
        <div className="border-b-3 border-blue-500 h-0.5 w-60 mt-10 mb-5 mx-auto"></div>
      </div>
      <div>
        <AvatarComponent />
      </div>
    </div>
  );
}

export default Contact;

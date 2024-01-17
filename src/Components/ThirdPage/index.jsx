import React from "react";
import img3 from "../../images/Group 1127.png";

function About() {
  return (
    <>
      <div
        className="text-center ml-80 mt-14"
        style={{ display: "-webkit-inline-box", gap: "21px" }}
      >
        <div className="border-b-3 border-blue-500 h-0.5 w-60 mt-5 mb-2 mx-auto"></div>
        <h1 className="text-3xl font-bold mb-4 mx-auto">Who We Are</h1>
        <div className="border-b-3 border-blue-500 h-0.5 w-60 mt-5 mb-5 mx-auto"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 ml-10 mr-10 mt-8">
        <div className="lg:w-1/2">
          <img src={img3} alt="sorry we can't proceed due to internet issues" />
        </div>
        <div
          className="lg:w-1/3 border-2 rounded-md text-white bg-blue-700 p-5 text-center m-8 h-[28rem]
        "
        >
          <h1 className="font-semibold text-4xl mb-8 pt-8">What We Do?</h1>
          <p
            className="text-l pb-16"
            style={{
              wordSpacing: "0.1em",
              lineHeight: "2em",
            }}
          >
            Byte Blitz International Pvt. Ltd stands out as a pioneering force
            in customer care services, Graphic, Video Editing, E-commerce, Web
            Development, and cutting-edge UI/UX figma expertise. Our foremost
            goal is to create a transformative platform for honing skills,
            fostering a professional environment that empowers the aspiring
            youth of Gilgit Baltistan. Join us on this journey, where innovation
            meets opportunity, and together, let's shape a brighter future
          </p>
        </div>
      </div>
      <div className="">
        <p className="border-2 border-[#004994] p-8 w-1/3 shadow-lg">
          Empowering Innovation, Transforming Tomorrow. Explore the Future with{" "}
          <span className="font-semibold text-[#004994]">
            Byte Blitz International
          </span>
        </p>
      </div>
    </>
  );
}

export default About;

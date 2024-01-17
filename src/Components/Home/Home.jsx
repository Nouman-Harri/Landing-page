import React from "react";
import im2 from "../../images/imgHome.png";

const HomePage = () => {
  return (
    <div className="container flex justify-evenly items-center pl-14 pr-14">
      {/* Left side */}
      <div className="w-2/3">
        <h1 className="text-4xl font-bold mb-4 text-blue-500">
          INNOVATE, <br />
          INSPIRE
        </h1>
        <p className="text-gray-700 mb-8">
          <span style={{ wordSpacing: "0.2em", letterSpacing: "0.5em" }} className="font-semibold">
            SMART <span className="text-[#004994]">&</span> INNOVATIVE MINDS
          </span>{" "}
          <br />A dynamic and innovattive software house. With a team of <br />{" "}
          skilled freelacers and experts. showcasing the diverse <br />
          range of services offered by{" "}
          <span className="font-bold text-blue-500">BILTZ TEAM</span>
        </p>
        <div className="flex space-x-4">
          <button
            className="text-black px-4 py-2 border  hover:bg-sky-700 hover:text-white"
            style={{ borderColor: "#004994" }}
          >
            Learn More
          </button>
          <button
            className=" text-black px-4 py-2 border  hover:bg-sky-700 hover:text-white"
            style={{ borderColor: "#004994" }}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="">
        <img src={im2} alt="Sample" className="w-full h-auto rounded" />
      </div>
    </div>
  );
};

export default HomePage;

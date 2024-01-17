import React from "react";
import {
  FaAccessibleIcon,
  FaAccusoft,
  FaAddressBook,
  FaAffiliatetheme,
  FaAllergies,
  FaAmilia,
  FaArrowRight,
} from "react-icons/fa";

const ServicesPage = () => {
  const servicesData = [
    {
      title: "UX/UI",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      icon: <FaAccusoft />,
    },
    {
      title: "Full-Stack Development",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      icon: <FaAccessibleIcon />,
    },
    {
      title: "Training Solution",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      icon: <FaAddressBook />,
    },
  ];

  const servicesData2 = [
    {
      title: "E Commerce",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      icon: <FaAffiliatetheme />,
    },
    {
      title: "Tele-Marketing",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      icon: <FaAllergies />,
    },
    {
      title: "Video Editing",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      icon: <FaAmilia />,
    },
  ];

  return (
    <>
      <div
        className="text-center ml-80"
        style={{ display: "-webkit-inline-box", gap: "21px" }}
      >
        <div className="border-b-3 border-blue-500 h-0.5 w-60 mt-5 mb-2 mx-auto"></div>
        <h1 className="text-3xl font-bold mb-4 mx-auto">Our Services</h1>
        <div className="border-b-3 border-blue-500 h-0.5 w-60 mt-5 mb-5 mx-auto"></div>
      </div>
      <div className="text-center flex flex-col items-center p-4">
        <div className="ml-20 mr-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...servicesData, ...servicesData2].map((service, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded text-left"
              >
                <div className="text-4xl text-blue-500 mb-20">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p>{service.description}</p>
                <a href="/" className="text-blue-500 hover:underline flex mt-2">
                  View More <FaArrowRight className="ml-1 mt-[6px]" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

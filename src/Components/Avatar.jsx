import React from "react";
import avatar1 from "../images/Rectangle 78.png";
import avatar2 from "../images/Group 1127.png";

const AvatarComponent = () => {
  return (
    <div className="flex items-center justify-center mt-6 mb-12">
      <div className="rounded-full overflow-hidden w-100 h-100 mx-10">
        <img
          src={avatar1}
          alt="Avatar 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-full overflow-hidden w-60 h-60 mx-4">
        <img
          src={avatar2}
          alt="Avatar 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AvatarComponent;

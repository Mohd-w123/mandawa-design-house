import React from "react";

const LinearBgHeading = ({text}) => {
  return (
    <div
      className="py-[34px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/images/global/linearHeadingBG.png') " }}
    >
      <div className="flex justify-center">
        <h2 className="text-white font-belleza text-6xl">{text}</h2>
      </div>
    </div>
  );
};

export default LinearBgHeading;

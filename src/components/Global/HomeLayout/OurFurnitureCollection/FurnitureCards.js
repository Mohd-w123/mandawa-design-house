import Image from "next/image";
import React from "react";

const FurnitureCards = ({ cards }) => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="">
        <Image src={cards.image} width={413} height={426} alt="Products" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-center font-belleza text-[34px] text-[#191919]">
          {cards.title}
        </h2>
        <p className="font-poppins text-[#A3A3A3] text-center">
          {cards.description}
        </p>
      </div>
    </div>
  );
};

export default FurnitureCards;

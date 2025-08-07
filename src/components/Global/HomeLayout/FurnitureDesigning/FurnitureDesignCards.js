import Image from "next/image";
import React from "react";

const FurnitureDesignCards = ({ cards }) => {
  return (
    <div className="flex flex-col gap-3.5 cursor-pointer">
      <div className="bg-white">
        <Image src={cards.image} width={413} height={426} alt="Products" />
      </div>
    </div>
  );
};

export default FurnitureDesignCards;

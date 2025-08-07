import React from "react";
import furnitureDesigningData from "@/data/furnitureDesigningData.json";
import FurnitureDesignCards from "./FurnitureDesignCards";
import Button from "../../Buttons";

const FurnitureDesigning = () => {
  return (
    <section className="py-[80px] px-4 bg-[#F6F4EE]">
      <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
        <div className="flex justify-center items-center ">
          <div className="max-w-[811px] flex flex-col gap-3.5">
            <h2 className="text-6xl font-belleza text-[#191919] text-center">
              Furniture Designing
            </h2>
            <p className="text-[18px] font-poppins text-[#A3A3A3] text-center">
              Furniture design is a process of planning and creating furniture
              for homes, offices, or other spaces, focusing on aesthetics,
              functionality, and comfort. It encompasses various aspects,
              including material selection, structural integrity, ergonomics,
              and overall design style. Essentially, furniture designers strive
              to create objects that are both visually appealing and serve a
              practical purpose in a given environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 ">
          {furnitureDesigningData.map((data, index) => (
            <FurnitureDesignCards key={index} cards={data} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button text={"Explore More"} variant="Brown" />
        </div>
      </div>
    </section>
  );
};

export default FurnitureDesigning;

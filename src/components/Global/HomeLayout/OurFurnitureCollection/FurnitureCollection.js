import Image from "next/image";
import React from "react";
import FurnitureCollectionData from "@/data/FurnitureCollectionData.json";
import FurnitureCards from "./FurnitureCards";
import Button from "../../Buttons";

const FurnitureCollection = () => {
  return (
    <section className="py-[80px] px-4">
      <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
        <div className="flex justify-center items-center ">
          <div className="max-w-[811px] flex flex-col gap-3.5">
            <h2 className="text-6xl font-belleza text-[#191919] text-center">
              Our Furniture Collection
            </h2>
            <p className="text-[18px] font-poppins text-[#A3A3A3] text-center">
              Explore our premium collection of modern furniture, thoughtfully
              designed to elevate your living spaces. Find the perfect piece for
              your home, whether it&apos;s a cozy sofa, elegant bookshelf, or a
              functional dining table
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 ">
          {FurnitureCollectionData.map((data, index) => (
            <FurnitureCards key={index} cards={data} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button text={"Explore More"} variant="Brown" />
        </div>
      </div>
    </section>
  );
};

export default FurnitureCollection;

import React from "react";
import LinearBgHeading from "../LinearBgHeading";
import Image from "next/image";

const WoodenMachinery = () => {
  return (
<section>
  <LinearBgHeading text={"WOODEN MACHINERY"} />
  <div className="py-[80px] px-4">
    <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
      
      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        {[
          { img: "/images/global/image 28.png", title: "Sliding Table Saw" },
          { img: "/images/global/image 51.png", title: "Double-Sided Planer" },
        ].map((item, i) => (
          <div
            key={i}
            className="relative group flex flex-col gap-4 sm:gap-[30px] cursor-pointer"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.img}
                fill
                alt={item.title}
                className="object-cover"
              />
              <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-white text-center px-2">
                  {item.title}
                </h4>
              </div>
            </div>
            <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300">
              <p className="font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-[#191919] text-center px-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {[
          { img: "/images/global/image 30.png", title: "Clamp Carrier Machine" },
          { img: "/images/global/image 23.png", title: "Mortiser Machine Taiwan" },
          { img: "/images/global/image 32.png", title: "Wide Belt Sander" },
        ].map((item, i) => (
          <div
            key={i}
            className="relative group flex flex-col gap-4 sm:gap-[30px] cursor-pointer"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.img}
                fill
                alt={item.title}
                className="object-cover"
              />
              <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-white text-center px-2">
                  {item.title}
                </h4>
              </div>
            </div>
            <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300">
              <p className="font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-[#191919] text-center px-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        {[
          { img: "/images/global/image 34.png", title: "Round End Tenoner" },
          { img: "/images/global/image 33.png", title: "Straight-Line Rip Saw" },
        ].map((item, i) => (
          <div
            key={i}
            className="relative group flex flex-col gap-4 sm:gap-[30px] cursor-pointer"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.img}
                fill
                alt={item.title}
                className="object-cover"
              />
              <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-white text-center px-2">
                  {item.title}
                </h4>
              </div>
            </div>
            <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300">
              <p className="font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-[#191919] text-center px-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  </div>
</section>


  );
};

export default WoodenMachinery;

import React from "react";
import LinearBgHeading from "../LinearBgHeading";
import Image from "next/image";

const OurUnits = () => {
  return (
   <section>
  
       <LinearBgHeading text={"OUR UNITS"} />
       <div className="py-[80px] px-4">
  <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {[
        { src: "/images/global/image 10.png", title: "Unit: 01" },
        { src: "/images/global/image 12.png", title: "Unit: 02" },
        { src: "/images/global/image 14.png", title: "Unit: 03" },
        { src: "/images/global/image 16.png", title: "Administration area & Showroom" }
      ].map((item, idx) => (
        <div
          key={idx}
          className="relative group flex flex-col gap-[30px] cursor-pointer"
        >
          {/* Image container */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
            />
            {/* Hover overlay */}
            <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-xl sm:text-2xl md:text-[28px] lg:text-[34px] text-white text-center px-4">
                {item.title}
              </h4>
            </div>
          </div>

          {/* Static label */}
          <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300">
            <p className="font-belleza text-xl sm:text-2xl md:text-[28px] lg:text-[34px] text-[#191919] text-center px-4">
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

export default OurUnits;

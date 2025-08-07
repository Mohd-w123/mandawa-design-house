import React from "react";
import LinearBgHeading from "../LinearBgHeading";
import Image from "next/image";

const OurUnits = () => {
  return (
    <section>
      <LinearBgHeading text={"OUR UNITS"} />
      <div className=' py-[80px] px-4"'>
        <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
          <div className="grid grid-cols-2 gap-10">
            <div className="relative group flex flex-col gap-[30px] cursor-pointer ">
              <div className="relative min-h-[440px]">
                <Image
                  src={"/images/global/image 10.png"}
                  fill
                  alt="design house"
                />
                <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                  <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                    Unit:01
                  </h4>
                </div>
              </div>
              <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                <p className="font-belleza text-[34px] text-[#191919] ">
                  Unit:01
                </p>
              </div>
            </div>
            <div className="relative group flex flex-col gap-[30px] cursor-pointer ">
              <div className="relative min-h-[440px]">
                <Image
                  src={"/images/global/image 12.png"}
                  fill
                  alt="design house"
                />
                <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                  <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                    Unit:02
                  </h4>
                </div>
              </div>
              <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                <p className="font-belleza text-[34px] text-[#191919] ">
                  Unit:02
                </p>
              </div>
            </div>
            <div className="relative group flex flex-col gap-[30px] cursor-pointer">
              <div className="relative min-h-[440px]">
                <Image
                  src={"/images/global/image 14.png"}
                  fill
                  alt="design house"
                />
                <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                  <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                    Unit:03
                  </h4>
                </div>
              </div>
              <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                <p className="font-belleza text-[34px] text-[#191919] ">
                  Unit:03
                </p>
              </div>
            </div>
            <div className="relative group flex flex-col gap-[30px] cursor-pointer">
              <div className="relative min-h-[440px]">
                <Image
                  src={"/images/global/image 16.png"}
                  fill
                  alt="design house"
                />
                <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                  <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                    Administration area & Showroom
                  </h4>
                </div>
              </div>
              <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                <p className="font-belleza text-[34px] text-[#191919] ">
                  Administration area & Showroom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurUnits;

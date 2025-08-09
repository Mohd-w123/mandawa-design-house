import Image from "next/image";
import React from "react";

const softwares = [
  { src: "/images/global/image 52.png", name: "Rhinoceros" },
  { src: "/images/global/image 53.png", name: "AutoCAD" },
  { src: "/images/global/image 54.png", name: "Sketchup" },
  { src: "/images/global/image 55.png", name: "5d render" },
  { src: "/images/global/image 56.png", name: "Photoshop" },
  { src: "/images/global/image 57.png", name: "Adobe Illustrator" },
];

const DesigningSoftware = () => {
  return (
<section
  className="bg-no-repeat bg-center bg-cover py-[80px] px-4"
  style={{ backgroundImage: "url('/images/global/Group.png')" }}
>
  <div className="max-w-[1280px] m-auto flex flex-col gap-20">
    <div className="flex justify-center">
      <h2 className= 'md:text-text-6xl sm:text-5xl text-4xl  font-belleza text-[#191919] text-center'>
        Designing Software
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-20 md:gap-12 sm:gap-8 justify-items-center">
      <div className="flex flex-col gap-6 items-center">
        <Image
          src={"/images/global/image 52.png"}
          width={160}
          height={160}
          alt="Rhinoceros"
          className="w-[120px] sm:w-[100px]"
        />
        <p className="font-belleza text-[34px] md:text-[28px] sm:text-[22px] text-[#191919] text-center">
          Rhinoceros
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Image
          src={"/images/global/image 53.png"}
          width={160}
          height={160}
          alt="AutoCAD"
          className="w-[120px] sm:w-[100px]"
        />
        <p className="font-belleza text-[34px] md:text-[28px] sm:text-[22px] text-[#191919] text-center">
          AutoCAD
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Image
          src={"/images/global/image 54.png"}
          width={160}
          height={160}
          alt="Sketchup"
          className="w-[120px] sm:w-[100px]"
        />
        <p className="font-belleza text-[34px] md:text-[28px] sm:text-[22px] text-[#191919] text-center">
          Sketchup
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Image
          src={"/images/global/image 55.png"}
          width={160}
          height={160}
          alt="5d render"
          className="w-[120px] sm:w-[100px]"
        />
        <p className="font-belleza text-[34px] md:text-[28px] sm:text-[22px] text-[#191919] text-center">
          5d render
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Image
          src={"/images/global/image 56.png"}
          width={160}
          height={160}
          alt="Photoshop"
          className="w-[120px] sm:w-[100px]"
        />
        <p className="font-belleza text-[34px] md:text-[28px] sm:text-[22px] text-[#191919] text-center">
          Photoshop
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Image
          src={"/images/global/image 57.png"}
          width={160}
          height={160}
          alt="Adobe Illustrator"
          className="w-[120px] sm:w-[100px]"
        />
        <p className="font-belleza text-[34px] md:text-[28px] sm:text-[22px] text-[#191919] text-center w-[160px] sm:w-auto">
          Adobe Illustrator
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default DesigningSoftware;

import Image from "next/image";
import React from "react";

const DesigningSoftware = () => {
  return (
    <section
      className=" bg-no-repeat bg-center bg-cover py-[80px] px-4"
      style={{ backgroundImage: "url('/images/global/Group.png')" }}
    >
      <div className="max-w-[1280px] m-auto flex flex-col gap-20">
        <div className="flex justify-center">
          <h2 className='text-6xl font-belleza text-[#191919] text-center"'>
            Designing Software
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-20 justify-items-center">
          <div className="flex flex-col gap-6">
            <div>
              <Image
                src={"/images/global/image 52.png"}
                width={160}
                height={160}
                alt="Rhinoceros"
              />
            </div>
            <p className="font-belleza text-[34px] text-[#191919] text-center">
              Rhinoceros
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                src={"/images/global/image 53.png"}
                width={160}
                height={160}
                alt="AutoCAD"
              />
            </div>
            <p className="font-belleza text-[34px] text-[#191919] text-center">
              AutoCAD
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                src={"/images/global/image 54.png"}
                width={160}
                height={160}
                alt="Sketchup"
              />
            </div>
            <p className="font-belleza text-center text-[34px] text-[#191919]">
              Sketchup
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                src={"/images/global/image 55.png"}
                width={160}
                height={160}
                alt="5d render"
              />
            </div>
            <p className="font-belleza text-[34px] text-[#191919] text-center">
              5d render
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                src={"/images/global/image 56.png"}
                width={160}
                height={160}
                alt="Photoshop"
              />
            </div>
            <p className="font-belleza  text-[34px] text-[#191919] text-center">
             Photoshop
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                src={"/images/global/image 57.png"}
                width={160}
                height={160}
                alt="Adobe Illustrator"
              />
            </div>
            <p className="font-belleza text-[34px] text-center text-[#191919] w-[160px]">
              Adobe Illustrator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesigningSoftware;

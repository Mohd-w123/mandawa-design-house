import Image from "next/image";
import React from "react";

const ConceptOfDrawing = () => {
  return (
    <section className=" py-[80px] px-4">
      <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
        <div className="flex justify-center">
          <h2 className='text-6xl font-belleza text-[#191919] text-center"'>
            Concept of Drawing
          </h2>
        </div>
        <div className="relative min-h-[330px]">
          <Image
            src={"/images/global/image 42.png"}
            fill
            alt="Organization Chart"
          />
        </div>
        <div className="relative min-h-[440px] grid grid-cols-3 gap-10">
          <div className="flex items-center justify-center">
            <Image
              src={"/images/global/image 43.png"}
              width={400}
              height={440}
              alt="chair"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/global/image 44.png"}
              width={400}
              height={440}
              alt="table"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/global/image 45.png"}
              width={400}
              height={440}
              alt="dress table"
            />
          </div>
        </div>
        <div className="relative min-h-[440px] grid grid-cols-2 gap-10">
          <div className="flex items-center justify-center">
            <Image
              src={"/images/global/image 46.png"}
              width={620}
              height={440}
              alt="dining table"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/global/image 47.png"}
              width={620}
              height={440}
              alt="bed"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ConceptOfDrawing;

import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-[80px] px-4 bg-[#F6F4EE]">
      <div className="max-w-[1280px] m-auto grid grid-cols-2 gap-[40px]">
        <div className="relative min-h-[586px] ">
          <Image
            src={"/images/global/imageWhyChoose.png"}
            fill
            alt="why choose us"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3.5 max-w-[506px]">
            <h3 className="font-belleza text-6xl text-[#191919]">
              Why Choose Us?
            </h3>
            <p className="font-poppins text-[#666666] text-[20px]">
              A company, as a client, looks for Quality delivered Fast and at a
              low Cost.
            </p>
          </div>
          <div className="flex flex-col gap-3.5 pl-6">
           <ul className="list-disc">
            <li className="font-poppins text-2xl text-[#191919]">We have the experience</li>
           </ul>
            <p className="font-poppins text-[#666666] text-[20px]">
              To provide consistent quality
            </p>
            <p className="font-poppins text-[#666666] text-[20px]">
           Delivery on time
            </p>
          </div>
          <div className="flex flex-col gap-3.5  pl-6">
           <ul className="list-disc">
            <li className="font-poppins text-2xl text-[#191919]">We can provide Low Cost product in Bulk through</li>
           </ul>
            <p className="font-poppins text-[#666666] text-[20px]">
              Leveraging our in-house designing capacity
            </p>
            <p className="font-poppins text-[#666666] text-[20px]">
           Our Hi-tech production set-up and assembly line
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

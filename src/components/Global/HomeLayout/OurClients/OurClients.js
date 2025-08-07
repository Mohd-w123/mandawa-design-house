import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <section className="  py-[80px] px-4 ">
      <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
        <div className="flex justify-center">
          <h2 className='text-6xl font-belleza text-[#191919] text-center"'>
            Our Clients
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-10">
          <div>
            <Image
              src={"/images/global/imageClient1.png"}
              width={160}
              height={160}
              alt="client company logo"
            />
          </div>
          <div>
            <Image
              src={"/images/global/imageClient2.png"}
              width={160}
              height={160}
              alt="client company logo"
            />
          </div>
          <div>
            <Image
              src={"/images/global/imageClient3.png"}
              width={160}
              height={160}
              alt="client company logo"
            />
          </div>
          <div>
            <Image
              src={"/images/global/imageClient4.png"}
              width={160}
              height={160}
              alt="client company logo"
            />
          </div>
          <div>
            <Image
              src={"/images/global/imageClient5.png"}
              width={160}
              height={160}
              alt="client company logo"
            />
          </div>
          <div>
            <Image
              src={"/images/global/imageClient6.png"}
              width={160}
              height={160}
              alt="client company logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;

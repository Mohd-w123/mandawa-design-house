import Image from "next/image";
import React from "react";

const OrganizationChart = () => {
  return (
    <section className="min-h-[1513px] bg-repeat-y bg-center bg-cover py-[80px] px-4" style={{backgroundImage : "url('/images/global/Group.png')"}}>
      <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
        <div className="flex justify-center">
          <h2 className='text-6xl font-belleza text-[#191919] text-center"'>
            Organization Chart
          </h2>
        </div>
        <div className="relative min-h-[1223px]">
          <Image
            src={"/images/global/organizationChart.png"}
            fill
            alt="Organization Chart"
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;

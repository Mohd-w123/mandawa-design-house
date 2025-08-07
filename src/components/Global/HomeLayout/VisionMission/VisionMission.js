import Image from "next/image";

const VisionMission = () => {
  return (
    <section className="py-[80px] px-4 bg-[#F6F4EE]">
      <div className="max-w-[1280px] m-auto">
        <div className="grid grid-cols-2 xl:gap-20 lg:gap-10">
          <div className="py-[75px] flex flex-col gap-3.5">
            <h2 className="text-6xl font-belleza text-[#191919]">
              Mission & Vision
            </h2>
            <p className="font-poppins text-[18px] text-[#666666]">
              As a qualityproduct provider, We aim atachieving sustainable and
              viable growthrate through excellence in all its
              activities,generating optimum profits through total satisfaction
              of customers, suppliers, employees and society.
            </p>
            <p className="font-poppins text-[18px] text-[#666666]">
              To become a cost effective, high quality destination for all our
              customers globally with consistent professionalism and efficiency.
            </p>
            <div className="w-[492px]">
              <ul className="flex flex-col gap-3.5 list-disc pl-6">
                <li className="font-poppins text-[18px] text-[#666666]">
                  Experienced production team
                </li>
                <li className="font-poppins text-[18px] text-[#666666]">
                  Consistent Standards of Quality
                </li>
                <li className="font-poppins text-[18px] text-[#666666]">
                  Huge Experience in wood technology & wooden furniture
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative top-[75px]">
              <Image src={"/images/global/image 6.png"} width={288} height={480} alt="working images"/>
            </div>
            <div><Image src={"/images/global/rectangle 15.png"} width={288} height={480} alt="machine image"/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

import React from 'react'
import LinearBgHeading from '../LinearBgHeading'
import Image from 'next/image'

const ManufacturingSection = () => {
  return (
  <section >
       <LinearBgHeading text={"MANUFACTURING SECTIONS"} />
    <div className="py-[80px] px-4 bg-[#F6F4EE]">
  <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { src: "/images/global/image 11.png", title: "C T P & Wood Seasoning" },
        { src: "/images/global/image 22.png", title: "Wood Storage Area" },
        { src: "/images/global/image 26.png", title: "Our Set Up : Manufacturing" }
      ].map((item, idx) => (
        <div key={idx} className="relative group flex flex-col gap-[30px] cursor-pointer">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full">
  <Image
    src={item.src}
    fill
    alt={item.title}
    className="object-cover"
  />
  <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
    <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-lg sm:text-xl md:text-2xl lg:text-[34px] text-white text-center px-4">
      {item.title}
    </h4>
  </div>
</div>

          {/* Static label */}
          <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300">
            <p className="font-belleza text-lg sm:text-xl md:text-2xl lg:text-[34px] text-[#191919] text-center px-4">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
</section>

  )
}

export default ManufacturingSection

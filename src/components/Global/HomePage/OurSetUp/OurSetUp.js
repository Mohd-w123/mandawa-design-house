import React from 'react'
import LinearBgHeading from '../LinearBgHeading'
import Image from 'next/image'

const OurSetUp = () => {
  return (
<section>
  <LinearBgHeading text={"OUR SET UP"} />
  <div className="py-[60px] px-4 sm:px-6 md:px-8">
    <div className="max-w-[1280px] m-auto flex flex-col gap-[40px] sm:gap-[50px] md:gap-[60px]">
      
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        
        {/* Assembly */}
        <div className="relative group flex flex-col gap-[15px] sm:gap-[20px] cursor-pointer">
          <div className="relative w-full min-h-[300px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[440px]">
            <Image
              src="/images/global/image 35.png"
              fill
              alt="design house"
              className="object-cover "
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="mt-3 group-hover:mt-0 transition-all duration-300 font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-white text-center px-2">
                Assembly
              </h4>
            </div>
          </div>
          <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-3 group-hover:opacity-0 transition-all duration-300">
            <p className="font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-[#191919] text-center">
              Assembly
            </p>
          </div>
        </div>

        {/* Sanding */}
        <div className="relative group flex flex-col gap-[15px] sm:gap-[20px] cursor-pointer">
          <div className="relative w-full min-h-[300px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[440px]">
            <Image
              src="/images/global/image 37.png"
              fill
              alt="design house"
              className="object-cover "
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="mt-3 group-hover:mt-0 transition-all duration-300 font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-white text-center px-2">
                Sanding
              </h4>
            </div>
          </div>
          <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-3 group-hover:opacity-0 transition-all duration-300">
            <p className="font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-[#191919] text-center">
              Sanding
            </p>
          </div>
        </div>

        {/* Polishing */}
        <div className="relative group flex flex-col gap-[15px] sm:gap-[20px] cursor-pointer">
          <div className="relative w-full min-h-[300px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[440px]">
            <Image
              src="/images/global/image 40.png"
              fill
              alt="design house"
              className="object-cover "
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="mt-3 group-hover:mt-0 transition-all duration-300 font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-white text-center px-2">
                Polishing
              </h4>
            </div>
          </div>
          <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-3 group-hover:opacity-0 transition-all duration-300">
            <p className="font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-[#191919] text-center">
              Polishing
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


  )
}

export default OurSetUp

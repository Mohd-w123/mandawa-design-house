import React from 'react'
import LinearBgHeading from '../LinearBgHeading'
import Image from 'next/image'

const ManufacturingSection = () => {
  return (
   <section>
       <LinearBgHeading text={"MANUFACTURING SECTIONS"} />
         <div className=' py-[80px] px-4" bg-[#F6F4EE]'>
               <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
                 <div className="grid grid-cols-3 gap-10">
                   <div className="relative group flex flex-col gap-[30px] cursor-pointer">
                     <div className="relative min-h-[440px]">
                       <Image
                         src={"/images/global/image 11.png"}
                         fill
                         alt="design house"
                       />
                       <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                         <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                         C T P & Wood Seasoning
                         </h4>
                       </div>
                     </div>
                     <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                       <p className="font-belleza text-[34px] text-[#191919] ">
                         C T P & Wood Seasoning
                       </p>
                     </div>
                   </div>
                   <div className="relative group flex flex-col gap-[30px] cursor-pointer">
                     <div className="relative min-h-[440px]">
                       <Image
                         src={"/images/global/image 22.png"}
                         fill
                         alt="design house"
                       />
                       <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                         <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                           Wood Storage Area
                         </h4>
                       </div>
                     </div>
                     <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                       <p className="font-belleza text-[34px] text-[#191919] ">
                         Wood Storage Area
                       </p>
                     </div>
                   </div>
                   <div className="relative group flex flex-col gap-[30px] cursor-pointer ">
                     <div className="relative min-h-[440px]">
                       <Image
                         src={"/images/global/image 26.png"}
                         fill
                         alt="design house"
                       />
                       <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                         <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                           Our Set Up : Manufacturing
                         </h4>
                       </div>
                     </div>
                     <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                       <p className="font-belleza text-[34px] text-[#191919] ">
                         Our Set Up : Manufacturing
                       </p>
                     </div>
                   </div>
                   
                 </div>
               </div>
             </div>
   </section>
  )
}

export default ManufacturingSection

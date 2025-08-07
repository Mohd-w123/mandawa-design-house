import React from 'react'
import LinearBgHeading from '../LinearBgHeading'
import Image from 'next/image'

const OurSetUp = () => {
  return (
   <section>
    <LinearBgHeading text={"OUR SET UP"} />
     <div className=' py-[80px] px-4"'>
                   <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
                     <div className="grid grid-cols-3 gap-10">
                       <div className="relative group flex flex-col gap-[30px] ">
                         <div className="relative min-h-[440px]">
                           <Image
                             src={"/images/global/image 35.png"}
                             fill
                             alt="design house"
                           />
                           <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                             <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                             Assembly
                             </h4>
                           </div>
                         </div>
                         <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                           <p className="font-belleza text-[34px] text-[#191919] ">
                             Assembly
                           </p>
                         </div>
                       </div>
                       <div className="relative group flex flex-col gap-[30px] ">
                         <div className="relative min-h-[440px]">
                           <Image
                             src={"/images/global/image 37.png"}
                             fill
                             alt="design house"
                           />
                           <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                             <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                               Sanding
                             </h4>
                           </div>
                         </div>
                         <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                           <p className="font-belleza text-[34px] text-[#191919] ">
                             Sanding
                           </p>
                         </div>
                       </div>
                       <div className="relative group flex flex-col gap-[30px] ">
                         <div className="relative min-h-[440px]">
                           <Image
                             src={"/images/global/image 40.png"}
                             fill
                             alt="design house"
                           />
                           <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black/50  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                             <h4 className="mt-5 group-hover:mt-0 transition-all duration-300 font-belleza text-[34px] text-white">
                               Polishing
                             </h4>
                           </div>
                         </div>
                         <div className="flex justify-center relative bottom-0 opacity-100 group-hover:bottom-5 group-hover:opacity-0 transition-all duration-300 ">
                           <p className="font-belleza text-[34px] text-[#191919] ">
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

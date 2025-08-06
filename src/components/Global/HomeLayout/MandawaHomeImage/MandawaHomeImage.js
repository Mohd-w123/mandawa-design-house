import Image from 'next/image'
import React from 'react'

const MandawaHomeImage = () => {
  return (
     <section >
        <div className="relative  min-h-[680px]">
        <Image src={"/images/global/image 5.png"} fill  alt="mandawa design house big image"/>
        <div className="w-full h-full absolute top-0 flex justify-center items-center gap-3.5">
          <div>
            <Image
              src={"/images/global/image VM.png"}
              width={100}
              height={100}
              alt="mandawa design house Logo"
            />
          
          </div>
            <h3 className="text-white text-[80px] font-belleza">Mandawa Design House</h3>
        </div>
        </div>
      </section>
  )
}

export default MandawaHomeImage

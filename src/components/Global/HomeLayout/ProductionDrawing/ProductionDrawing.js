import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const images = [
  '/images/global/image 88.png',
  '/images/global/image 88.png',
  '/images/global/image 88.png',
 
];

const ProductionDrawing = () => {
  return (
   <section className=" py-[80px] px-4 bg-[#F6F4EE]">
       <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
         <div className="flex justify-center">
           <h2 className='text-6xl font-belleza text-[#191919] text-center"'>
             Concept of Drawing
           </h2>
         </div>
        <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        
    
        centeredSlides={true}
        loop={true}
      
        className="mySwiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Slide ${i}`}
              fill
              className="rounded-xl object-cover  transition-all duration-300 scale-90 swiper-slide-active:scale-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  
         
       </div>
     </section>
  )
}

export default ProductionDrawing

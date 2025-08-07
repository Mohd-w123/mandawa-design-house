import React from 'react'

import Image from 'next/image';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides visible
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
};

const images = [
  '/images/global/image 88.png',
  '/images/global/image 88.png',
  '/images/global/image 88.png',
 
];

const ProductionDrawing = () => {
  return (
   <section className=" py-[80px] px-4 bg-[#F6F4EE] overflow-hidden">
       <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
         <div className="flex justify-center">
           <h2 className='text-6xl font-belleza text-[#191919] text-center"'>
            Production Drawing
           </h2>
         </div>
<div className=''>
<Slider {...settings}>
{images.map((img , index) => (
  <div className='px-2  ' key={index}>
    <div className='relative w-[840px] min-h-[592px]'>
      <Image
      src={img}
      width={840}
      height={400}
      alt='production '
      />
    </div>
  </div>
))}
</Slider>
</div>
  
         
       </div>
     </section>
  )
}

export default ProductionDrawing

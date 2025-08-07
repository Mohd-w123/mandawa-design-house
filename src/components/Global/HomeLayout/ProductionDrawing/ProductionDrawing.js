import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import ArrowBtn from "./ArrowBtn";

const images = [
  "/images/global/image 88.png",
  "/images/global/image 88.png",
  "/images/global/image 88.png",
  "/images/global/image 88.png",
  "/images/global/image 88.png",
  "/images/global/image 88.png",
];

const ProductionDrawing = () => {
  const swiperRef = useRef(null);

  return (
    <section className=" py-[80px] px-4 bg-[#F6F4EE] overflow-hidden">
      <div className="max-w-[1280px] m-auto flex flex-col gap-[60px] overflow-hidden">
        <div className="flex justify-center">
          <h2 className='text-6xl font-belleza text-[#191919] text-center"'>
            Production Drawing
          </h2>
        </div>

        <Swiper
          effect={"coverflow"}
         
          slidesPerView="auto"
          spaceBetween={200}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="!w-[840px] h-[592px] bg-white rounded-xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`Slide ${index}`}
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center gap-2">
          <ArrowBtn
            text={"<"}
            variant="Brown"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <ArrowBtn
            text={">"}
            variant="Brown"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductionDrawing;

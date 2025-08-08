import Image from "next/image";
import React from "react";

const ContactHero = () => {
  return (
    <section className="py-[60px] px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[40px]">
        {/* Heading */}
        <div className="flex justify-center items-center">
          <h1 className="font-belleza text-4xl md:text-5xl lg:text-6xl text-[#191919] text-center">
            Contact Us
          </h1>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[460px]">
          <Image
            src="/images/global/Rectangle 16.png"
            alt="Contact page hero"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

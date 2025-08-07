import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterStrip from "./FooterStrip";

const Footer = () => {
  return (
    <>
    <section
      className="py-[80px] px-4 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/images/global/footer.png')" }}
    >
      <div className="max-w-[1280px] m-auto flex flex-col gap-10 ">
        <div className="flex justify-between">
          <h3 className="font-belleza text-white text-[34px]">
            Mandawa Design House
          </h3>
          <div className="flex flex-col gap-[18px]">
            <h5 className="font-belleza text-white text-2xl">Contact Us</h5>
            <div className="flex gap-4">
              <Image
              className="cursor-pointer"
                src={"/images/global/facebook.png"}
                width={24}
                height={24}
                alt="faceBook"
              />
              <Image
                     className="cursor-pointer"
                src={"/images/global/insta.png"}
                width={24}
                height={24}
                alt="instagram"
              />
              <Image
                     className="cursor-pointer"
                src={"/images/global/linkedin.png"}
                width={24}
                height={24}
                alt="linked IN"
              />
              <Image
                     className="cursor-pointer"
                src={"/images/global/youtube.png"}
                width={24}
                height={24}
                alt="youtube"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col-dense gap-[113px]">
          <div className="flex flex-col gap-[18px]">
            <div>
              <p
                
                className="underline text-2xl font-belleza text-white"
              >
                Quick Links
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Link href={"#"} className="text-[18px] font-poppins text-white">
                About
              </Link>
              <Link href={"#"} className="text-[18px] font-poppins text-white">
                Collection
              </Link>
              <Link href={"#"} className="text-[18px] font-poppins text-white">
                Blog
              </Link>
              <Link href={"#"} className="text-[18px] font-poppins text-white">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[18px]">
            <div>
              <p
      
                className="underline text-2xl font-belleza text-white"
              >
                Contact Us:
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Link href={"#"} className="text-[18px] font-poppins text-white">
               +91 9829823333
              </Link>
              <Link href={"#"} className="text-[18px] font-poppins text-white">
                +91 7014447678
              </Link>
            </div>
          </div>
            <div className="flex flex-col gap-[18px]">
            <div>
              <p
             
                className="underline text-2xl font-belleza text-white"
              >
                Connect Us:
              </p>
            </div>
            <div className="flex flex-col gap-1 w-[330px]">
              <Link href={"#"} className="text-[18px] font-poppins text-white">
               https://mandawadesignhouse.com/
              </Link>
      
              <Link href={"#"} className="text-[18px] font-poppins text-white">
                https://www.linkedin.com/in/ mandawadesignhouse/
              </Link>
        
            </div>
          </div>
            <div className="flex flex-col gap-[18px]">
            <div>
              <p
               
                className="underline text-2xl font-belleza text-white"
              >
                Address:
              </p>
            </div>
            <div className="flex flex-col gap-1">
             <p className="text-[18px] font-poppins text-white" > B-158, 1st Phase, RIICO Industrial Area Manda,  Chomu, 303702</p>
        
            </div>
            <div>
              <Link
                href={"#"}
                className="underline text-2xl font-belleza text-white"
              >
                GSTIN:
              </Link>
            </div>
            <div className="flex flex-col gap-1">
             <p className="text-[18px] font-poppins text-white" > 08AAPCM1097H1Z2</p>
        
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterStrip/>
    </>
  );
};

export default Footer;

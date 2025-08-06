"use client";
import Link from "next/link";
import Button from "../Buttons";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-[2] font-poppins">
      <div className="md:mx-[40px] mx-5 py-2 sm:py-3 lg:py-[14px]">
        <div className="flex justify-between h-16 items-center">
            <MobileMenu />
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center">
                <img src="/images/global/mandawa-design-house.png" alt="Mandawa Design House" className="h-[32px]" />
              </div>
            </Link>
          </div>
          <NavLinks />
          <div className="flex justify-center md:gap-0 gap-4 items-center">
            <Link href="/contact-us">
              <Button text="Contact Us" className="px-2" variant="Brown"/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

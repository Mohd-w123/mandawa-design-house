import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="block md:hidden">
      <Icon icon="mynaui:menu" width="24" height="24" className="block md:hidden text-[#191919]"  onClick={toggleMenu} />
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white shadow-md md:hidden flex items-center px-5">
          <div className="flex flex-col gap-16 w-full">
            <Link
              href="/"
              className="text-[#1D2130] text-2xl font-medium capitalize flex items-center hover:text-black px-4 w-full"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#1D2130] text-2xl font-medium capitalize flex items-center hover:text-black px-4 w-full"
            >
              About
            </Link>

            <Link
              href="/collection"
              className="text-[#1D2130] text-2xl font-medium capitalize flex items-center hover:text-black px-4 w-full"
            >
             Collection
            </Link>

            <Link
              href="/blog"
              className="text-[#1D2130] text-2xl font-medium capitalize flex items-center hover:text-black px-4 w-full"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;

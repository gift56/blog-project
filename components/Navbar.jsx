import React from "react";
import Image from "next/image";

const Navbar = () => {
  const socialIcons = [
    "/facebook.png",
    "/instagram.png",
    "/tiktok.png",
    "/youtube.png",
  ];
  return (
    <header className="w-full flex items-center justify-between py-4">
      <div className="flex items-center justify-start gap-2">
        {socialIcons.map((item, index) => (
          <Image
            src={item}
            alt="social icons"
            width={24}
            height={24}
            key={index}
          />
        ))}
      </div>
    </header>
  );
};

export default Navbar;

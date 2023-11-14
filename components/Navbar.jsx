import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from ".";

const Navbar = () => {
  const socialIcons = [
    "/facebook.png",
    "/instagram.png",
    "/tiktok.png",
    "/youtube.png",
  ];
  return (
    <header className="w-full flex items-center justify-between py-4">
      <div className="hidden md:flex items-center justify-start gap-2">
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
      <Link
        href="/"
        className="select-none text-2xl font-bold md:text-3xl text-black"
      >
        Devblog
      </Link>
      <nav className="flex items-center justify-center gap-4">
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;

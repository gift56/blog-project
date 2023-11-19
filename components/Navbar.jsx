import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthLink, ThemeToggle } from ".";

const Navbar = () => {
  const socialIcons = [
    "/facebook.png",
    "/instagram.png",
    "/tiktok.png",
    "/youtube.png",
  ];
  const navLinks = [
    {
      to: "/",
      text: "Homepage",
    },
    {
      to: "/",
      text: "Contact",
    },
    {
      to: "/",
      text: "About",
    },
  ];

  return (
    <header className="w-full flex items-center justify-between py-4">
      <div className="hidden lg:flex items-center justify-start gap-2">
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
        {navLinks.map((item) => (
          <Link
            key={item.text}
            href={item.to}
            className="hidden md:flex h-full text-lg font-normal relative before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:w-[25%] before:h-[2px] before:bg-primary hover:before:w-full before:transition-all before:duration-200 transition-all duration-300"
          >
            {item.text}
          </Link>
        ))}
        <AuthLink />
      </nav>
    </header>
  );
};

export default Navbar;

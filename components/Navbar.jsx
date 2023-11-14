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
        {navLinks.map((item) => (
          <Link
            key={item.text}
            href={item.to}
            className="hidden md:flex hover:border-b-2 h-full border-black transition-all text-lg font-normal"
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

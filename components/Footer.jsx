import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    "/facebook.png",
    "/instagram.png",
    "/tiktok.png",
    "/youtube.png",
  ];
  const footerLinks = [
    {
      title: "Links",
      links: [
        { href: "/", text: "Homepage" },
        { href: "/", text: "Blog" },
        { href: "/", text: "About" },
        { href: "/", text: "Contact" },
      ],
    },
    {
      title: "Tags",
      links: [
        { href: "/", text: "Style" },
        { href: "/", text: "Fashion" },
        { href: "/", text: "Coding" },
        { href: "/", text: "Travel" },
      ],
    },
    {
      title: "Social",
      links: [
        { href: "/", text: "Facebook" },
        { href: "/", text: "Instagram" },
        { href: "/", text: "Tiktok" },
        { href: "/", text: "Youtube" },
      ],
    },
  ];
  return (
    <footer className="w-full py-10 flex flex-col md:flex-row items-start justify-start gap-8 md:justify-between">
      <div className="w-full md:flex-1 flex flex-col items-start justify-start gap-4">
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="select-none text-2xl font-bold md:text-3xl text-black"
          >
            Devblog
          </Link>
        </div>
        <p className="text-sm font-normal md:text-base text-dark">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
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
      </div>
      <div className="flex flex-col md:flex-wrap gap-8 md:gap-10 lg:flex-nowrap lg:flex-row items-start justify-start lg:justify-end w-full md:flex-1">
        {footerLinks.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start justify-start gap-5"
          >
            <h3 className="text-lg font-bold md:text-xl">{item.title}</h3>
            <nav className="flex flex-col items-start justify-start gap-3">
              {item.links.map((item, index) => (
                <Link href={item.href} key={index} className="text-base font-medium">
                  {item.text}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

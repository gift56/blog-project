import React from "react";
import Link from "next/link";
// import Image from "next/image";

const Footer = () => {
  const footerLinks = [
    {
      title: "Links",
      links: [
        {
          href: "https://giftedprofile.netlify.app",
          text: "Homepage",
          blank: true,
        },
        { href: "/", text: "Blog" },
        {
          href: "https://giftedprofile.netlify.app#about",
          text: "About",
          blank: true,
        },
        {
          href: "https://giftedprofile.netlify.app#contact",
          text: "Contact",
          blank: true,
        },
      ],
    },
    {
      title: "Tags",
      links: [
        { href: "/blog?cat=style", text: "Style", blank: false },
        { href: "/blog?cat=fashion", text: "Fashion", blank: false },
        { href: "/blog?cat=coding", text: "Coding", blank: false },
        { href: "/blog?cat=travel", text: "Travel", blank: false },
      ],
    },
    {
      title: "Social",
      links: [
        { href: "https://twitter.com/AsiughuE", text: "Twitter", blank: true },
        {
          href: "https://www.instagram.com/giftedvibez20",
          text: "Instagram",
          blank: true,
        },
        {
          href: "https://www.linkedin.com/in/efe-gift-109120241",
          text: "Linkedin",
          blank: true,
        },
        {
          href: "https://www.youtube.com/channel/UCzCr1eZUtBoS_gscF27HV7Q",
          text: "Youtube",
          blank: true,
        },
      ],
    },
  ];
  return (
    <footer className="w-full py-10 flex flex-col md:flex-row items-start justify-start gap-8 md:justify-between">
      <div className="w-full md:flex-1 flex flex-col items-start justify-start gap-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="select-none text-2xl font-bold md:text-3xl">
            Devblog
          </Link>
        </div>
        <p className="text-sm font-normal md:text-base text-dark dark:text-[#C0C5D0] max-w-[480px]">
          In the Devblog, collaboration is more than just a buzzword, it's the
          lifeblood of innovation. Discover how Project Odyssey is fostering a
          culture of collaboration, bringing together minds from different
          disciplines to create a symphony of code that resonates across the
          digital landscape
        </p>
        {/* <div className="flex items-center justify-start gap-2">
          {socialIcons.map((item, index) => (
            <Image
              src={item}
              alt="social icons"
              width={24}
              height={24}
              key={index}
            />
          ))}
        </div> */}
      </div>
      <div className="flex flex-col md:flex-wrap gap-8 md:gap-10 lg:gap-20 lg:flex-nowrap lg:flex-row items-start justify-start lg:justify-end w-full md:flex-1">
        {footerLinks.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start justify-start gap-5"
          >
            <h3 className="text-lg font-bold md:text-xl">{item.title}</h3>
            <nav className="flex flex-col items-start justify-start gap-3">
              {item.links.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  target={item.blank === true ? "_blank" : "_self"}
                  className="text-base font-medium hover:border-b border-primary transition-all duration-300 w-fit"
                >
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

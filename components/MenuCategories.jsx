import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  const catLinks = [
    {
      href: "/blog?cat=style",
      text: "Style",
    },
    {
      href: "/blog",
      text: "Fashion",
    },
    {
      href: "/blog",
      text: "Food",
    },
    {
      href: "/blog",
      text: "Travel",
    },
    {
      href: "/blog",
      text: "Culture",
    },
    {
      href: "/blog",
      text: "Coding",
    },
  ];

  const colorRender = (color) => {
    if (color === "Style") {
      return "bg-[#57c4ff31]";
    } else if (color === "Fashion") {
      return "bg-[#da85c731]";
    } else if (color === "Food") {
      return "bg-[#7fb88133]";
    } else if (color === "Travel") {
      return "bg-[#ff795736]";
    } else if (color === "Culture") {
      return "bg-[#ffb04f45]";
    } else if (color === "Coding") {
      return "bg-[#5e4fff31]";
    }
  };
  return (
    <div className="w-full flex flex-wrap justify-start gap-4">
      {catLinks.map((item) => (
        <Link
          href={item.href}
          key={item.text}
          className={`flex items-center gap-3 capitalize w-fit px-4 justify-center rounded-lg h-12 text-base font-medium md:text-lg ${colorRender(
            item.text
          )}`}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;

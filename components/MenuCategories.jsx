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
    <div className="w-full flex flex-wrap justify-between gap-4 md:gap-4">
      MenuCategories
    </div>
  );
};

export default MenuCategories;

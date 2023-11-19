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
  return <div>MenuCategories</div>;
};

export default MenuCategories;

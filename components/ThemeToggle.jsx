"use client";

import Image from "next/image";

const ThemeToggle = () => {
  return (
    <div className="w-12 h-6 rounded-full cursor-pointer flex items-center justify-between relative bg-white px-1">
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div className="w-[15px] h-[15px] rounded-full absolute right-1 bg-white"></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;

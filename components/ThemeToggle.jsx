"use client";

import Image from "next/image";

const ThemeToggle = () => {
  return (
    <div className="w-20 h-8 rounded-full cursor-pointer flex items-center justify-between relative bg-white px-2">
      <Image src="/moon.png" alt="moon" width={18} height={18} />
      <div className="w-[20px] h-[20px] rounded-full absolute right-2 bg-white"></div>
      <Image src="/sun.png" alt="sun" width={18} height={18} />
    </div>
  );
};

export default ThemeToggle;

"use client";

import Image from "next/image";

const ThemeToggle = () => {
  return (
    <div className="w-10 h-6 rounded-full cursor-pointer flex items-center justify-between relative bg-white">
      <Image src="/moon.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;

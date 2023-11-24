"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggle = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMount(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="w-20 h-8 rounded-full cursor-pointer flex items-center justify-between relative bg-dark2 dark:bg-white px-2">
      <Image
        src="/moon.png"
        alt="moon"
        width={18}
        height={18}
        className="cursor-pointer"
        onClick={() => setTheme("dark")}
      />
      <div
        className={`w-[20px] h-[20px] rounded-full absolute bg-white dark:bg-dark2 ${
          mount === true && currentTheme === "dark" ? "right-[50px]" : " right-2"
        } transition-all duration-300`}
      ></div>
      <Image
        src="/sun.png"
        alt="sun"
        width={18}
        height={18}
        className="cursor-pointer"
        onClick={() => setTheme("light")}
      />
    </div>
  );
};

export default ThemeToggle;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";

const AuthLink = () => {
  const { status, data } = useSession();
  const [mobileNav, setMobileNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const modalRef = useRef(null);
  const dropRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDown]);

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
    <>
      {!data ? (
        <Link
          href="/login"
          className="hidden md:flex h-full text-lg font-normal relative before:content-[''] before:absolute before:bottom-[-9px] before:left-[50%] before:translate-x-[-50%] before:w-[0%] before:h-[2px] before:bg-primary hover:before:w-full before:transition-all before:duration-200 transition-all duration-300"
        >
          Login
        </Link>
      ) : (
        <>
          <Link
            href="/write"
            className="hidden md:flex h-full text-lg font-normal relative before:content-[''] before:absolute before:bottom-[-9px] before:left-[50%] before:translate-x-[-50%] before:w-[0%] before:h-[2px] before:bg-primary hover:before:w-full before:transition-all before:duration-200 transition-all duration-300"
          >
            Write
          </Link>
          {data && (
            <div className="relative">
              <div
                onClick={() => setDropDown((prev) => !prev)}
                className="flex items-center justify-start gap-1 cursor-pointer"
              >
                <Image
                  src={data?.user?.image}
                  alt={data?.user?.name ? data?.user?.name : "ProfilePhoto"}
                  width={35}
                  height={35}
                  className="rounded-full object-contain"
                />
                <FiChevronDown size={20} />
              </div>
              <div
                ref={dropRef}
                className={`absolute ${
                  dropDown
                    ? "top-10 scale-100 opacity-100"
                    : "scale-0 top-0 opacity-0"
                } transition-all duration-300 -right-12 md:right-0 w-[300px] p-8 bg-white rounded-lg shadow-lg flex flex-col items-start justify-start gap-3`}
              >
                <div className="flex items-center justify-start gap-3">
                  <Image
                    src={data?.user?.image}
                    alt={data?.user?.name ? data?.user?.name : "ProfilePhoto"}
                    width={65}
                    height={65}
                    className="rounded-full object-contain"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <h4 className="text-xl font-medium text-darkBg">
                      {data?.user?.name}
                    </h4>
                    <p className="text-dark text-sm font-normal">
                      {data?.user?.email}
                    </p>
                  </div>
                </div>
                <span
                  className="flex items-center justify-start gap-4 h-full text-lg font-normal relative before:content-[''] before:absolute before:bottom-[-9px] before:left-[50%] before:translate-x-[-50%] before:w-[0%] before:h-[2px] before:bg-primary hover:before:w-full before:transition-all before:duration-200 transition-all duration-300 cursor-pointer text-red-500"
                  onClick={signOut}
                >
                  <span>Logout</span> <FiLogOut />
                </span>
              </div>
            </div>
          )}
        </>
      )}
      <span onClick={() => setMobileNav(true)} className="text-dark md:hidden">
        {mobileNav === false && <FaBars size={25} />}
      </span>
      <div
        className={`${
          mobileNav ? "left-0" : "-left-[180%]"
        } md:hidden flex flex-col h-screen bg-black/40 gap-7 absolute top-0 w-full z-40 transition-all duration-300`}
      >
        <div
          ref={modalRef}
          className="flex flex-col h-full bg-white gap-5 p-4 w-[250px]"
        >
          <div className="w-full flex items-center justify-end">
            <span className="text-dark" onClick={() => setMobileNav(false)}>
              <MdClose size={25} />
            </span>
          </div>

          <nav className="flex flex-col items-start justify-start gap-6 w-full">
            {navLinks.map((item, index) => (
              <Link
                href={item.to}
                key={index}
                onClick={() => setMobileNav(false)}
                className="text-lg font-normal"
              >
                {item.text}
              </Link>
            ))}
            {status && status === "unauthenticated" ? (
              <Link
                href="/login"
                className="text-lg font-normal"
                onClick={() => setMobileNav(false)}
              >
                Login
              </Link>
            ) : (
              <Link
                href="/write"
                className="text-lg font-normal"
                onClick={() => setMobileNav(false)}
              >
                Write
              </Link>
            )}
            <div className="flex flex-wrap items-center justify-start gap-2">
              {socialIcons.map((item, index) => (
                <Image
                  src={item}
                  alt="social icons"
                  width={24}
                  height={24}
                  key={index}
                  onClick={() => setMobileNav(false)}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AuthLink;

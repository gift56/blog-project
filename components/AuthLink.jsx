"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const AuthLink = () => {
  const status = "notauthenticated";
  const [mobileNav, setMobileNav] = useState(false);
  const modalRef = useRef(null);

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
      {status === "notauthenticated" ? (
        <Link
          href="/login"
          className="hidden md:flex hover:border-b-2 h-full border-black transition-all text-lg font-normal"
        >
          Login
        </Link>
      ) : (
        <>
          <Link
            href="/write"
            className="hidden md:flex hover:border-b-2 h-full border-black transition-all text-lg font-normal"
          >
            Write
          </Link>
          <span
            className="hidden md:flex hover:border-b-2 h-full border-black transition-all text-lg font-normal"
            // onClick={signOut}
          >
            Logout
          </span>
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
            {status === "notauthenticated" ? (
              <Link href="/login" className="text-lg font-normal">
                Login
              </Link>
            ) : (
              <>
                <Link href="/write" className="text-lg font-normal">
                  Write
                </Link>
                <span className="text-lg font-normal cursor-pointer">
                  Logout
                </span>
              </>
            )}
            <div className="flex flex-wrap items-center justify-start gap-2">
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
          </nav>
        </div>
      </div>
    </>
  );
};

export default AuthLink;

"use client";
import Link from "next/link";

const AuthLink = () => {
  const status = "Notauthenticated";
  return (
    <>
      {status === "Notauthenticated" ? (
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
    </>
  );
};

export default AuthLink;

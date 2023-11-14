"use client";
import Link from "next/link";

const AuthLink = () => {
  const status = "Notauthenticated";
  return (
    <>
      {status === "Notauthenticated" ? (
        <Link href="/login" className="">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="">
            Write
          </Link>
          <span className="" onClick={signOut}>
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default AuthLink;

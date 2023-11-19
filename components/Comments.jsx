"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import useSWR from "swr";
// import { useSession } from "next-auth/react";

const Comments = () => {
  const status = "authenticated";
  const [desc, setDesc] = useState("");

  return (
    <div className="w-full flex flex-col items-start justify-start gap-5">
      <h3 className="text-2xl font-bold text-dark md:text-3xl">Comments</h3>
      {status === "authenticated" ? (
        <div className="">
          <textarea
            placeholder="write a comment..."
            className=""
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="" onClick={() => {}}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
    </div>
  );
};

export default Comments;

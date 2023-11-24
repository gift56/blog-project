"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import useSWR from "swr";
// import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = () => {
  const status = "authenticateds";
  const [desc, setDesc] = useState("");

  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
      <h3 className="text-2xl font-bold text-dark md:text-3xl">Comments</h3>
      {status === "authenticated" ? (
        <div className="w-full flex items-end justify-between gap-5">
          <textarea
            placeholder="write a comment..."
            className="w-full h-[140px] border focus:border-primary outline-none p-3 rounded-lg resize-none"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="submit"
            className="w-[100px] h-12 border border-primary rounded-lg bg-primary text-white hover:bg-primary/60 disabled:bg-[#dc143c79] disabled:border-[#dc143c79] disabled:cursor-not-allowed transition-all duration-300"
            onClick={() => {}}
          >
            Send
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="w-fit px-5 h-12 flex items-center justify-center border border-primary rounded-lg bg-primary text-white hover:bg-primary/60 disabled:bg-[#dc143c79] disabled:border-[#dc143c79] disabled:cursor-not-allowed transition-all duration-300"
        >
          Login to write a comment
        </Link>
      )}
      <div className="flex flex-col items-start justify-start gap-4 w-full">
        <div className="w-full flex flex-col gap-2 items-start justify-start">
          <div className="w-full flex items-start justify-start gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/p1.jpeg"
                alt="author Profile Image"
                width={70}
                height={70}
                className="object-cover !w-full !h-full rounded-full"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="text-lg font-medium md:text-xl text-dark">
                John Doe
              </span>
              <span className="text-sm font-normal text-dark">
                25 April 2023
              </span>
            </div>
          </div>
          <p className="text-base font-medium text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            ea quidem magnam voluptatibus! Debitis voluptatibus est eos ratione
            inventore eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import useSWR from "swr";
// import { useSession } from "next-auth/react";

const Comments = () => {
  const status = "authenticateds";
  const [desc, setDesc] = useState("");

  return (
    <div className="w-full flex flex-col items-start justify-start gap-5">
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
          <div className="">
            {item?.user?.image && (
              <Image
                src={item.user.image}
                alt=""
                width={50}
                height={50}
                className={styles.image}
              />
            )}
            <div className={styles.userInfo}>
              <span className={styles.username}>{item.user.name}</span>
              <span className={styles.date}>{item.createdAt}</span>
            </div>
          </div>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;

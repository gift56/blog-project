"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { baseUrl } from "@/utils/config";
import toast from "react-hot-toast";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const [sending, setSending] = useState(false);
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${baseUrl}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    setSending(true);
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    if (res.status === 200) {
      setSending(false);
      setDesc("");
      toast.success("Comment created successfully!💡", {
        duration: 3000,
        position: "bottom-center",
      });
    }
    mutate();
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
      <h3 className="text-2xl font-bold text-dark dark:text-[#C0C5D0] md:text-3xl">
        Comments
      </h3>
      {status === "authenticated" ? (
        <div className="w-full flex items-end justify-between gap-5">
          <textarea
            placeholder="write a comment..."
            className="w-full h-[140px] border focus:border-primary outline-none p-3 rounded-lg resize-none bg-gray-300 text-dark2 dark:bg-dark2 dark:text-white"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="submit"
            disabled={desc.length <= 0}
            className={`w-fit h-12 px-4 flex items-center justify-center gap-2 border border-primary rounded-lg bg-primary text-white hover:bg-primary/60 disabled:bg-primary/40 disabled:border-primary/40 disabled:cursor-not-allowed transition-all duration-300 ${
              sending ? "py-0" : "py-2"
            }`}
            onClick={handleSubmit}
          >
            <div className={`w-10 ${sending ? "inline-block" : "hidden"}`}>
              <img
                src="/loader.svg"
                alt="loader"
                className="w-full h-full object-cover"
              />
            </div>
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
        {isLoading
          ? "Loading..."
          : data?.map((item) => (
              <div
                key={item._id}
                className="w-full flex flex-col gap-2 items-start justify-start"
              >
                <div className="w-full flex items-start justify-start gap-3">
                  {item?.user?.image && (
                    <div className="w-12 h-12 md:w-14 md:h-14">
                      <Image
                        src={item.user.image}
                        alt={item.user.name}
                        width={70}
                        height={70}
                        className="object-cover !w-full !h-full rounded-full"
                      />
                    </div>
                  )}
                  <div className="flex flex-col items-start justify-start gap-1">
                    <span className="text-lg font-medium md:text-xl text-dark dark:text-gray-100">
                      {item.user.name}
                    </span>
                    <span className="text-sm font-normal text-dark dark:text-gray-100">
                      {item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className="text-base font-medium text-dark dark:text-gray-100">
                  {item.desc}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;

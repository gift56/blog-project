"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import useSWR from "swr";
// import { useSession } from "next-auth/react";

const Comments = () => {
  const [desc, setDesc] = useState("");

  return <div className="w-full flex flex-col items-start justify-start">Comments</div>;
};

export default Comments;

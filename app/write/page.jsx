"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const router = useRouter();

  return (
    <main className="w-full flex flex-col relative items-start justify-start gap-6 py-14">
      <input
        type="text"
        placeholder="Title"
        className="outline-none border-none bg-transparent py-10 text-darkBg w-full px-7 text-3xl font-medium md:text-5xl placeholder:text-[#b3b3b1]"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select onChange={(e) => setCatSlug(e.target.value)}></select>
    </main>
  );
};

export default WritePage;

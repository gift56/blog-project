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

  const optionsValues = [
    "style",
    "fashion",
    "food",
    "culture",
    "travel",
    "coding",
  ];

  return (
    <main className="w-full flex flex-col relative items-start justify-start gap-6 py-14">
      <input
        type="text"
        placeholder="Title"
        className="outline-none border-none bg-transparent py-10 text-darkBg w-full px-7 text-3xl font-medium md:text-5xl placeholder:text-[#b3b3b1]"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <label htmlFor="cat" className="text-lg font-medium text-dark">
          Select Catergory
        </label>
        <select
          onChange={(e) => setCatSlug(e.target.value)}
          className="py-3 rounded-lg w-full cursor-pointer outline-none bg-transparent border-b border-dark focus:border-primary transition-all duration-300 text-lg pl-4"
          id="cat"
        >
          {optionsValues.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex items-start gap-6 h-[700px] w-full">
        <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center border border-darkBg bg-transparent" onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
          djd
        </button>
        {open && (
          <div className="flex items-center gap-5 absolute z-40 w-full left-[50px] bg-white pl-4 transition-all duration-300">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-primary bg-transparent">
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-primary bg-transparent">
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-primary bg-transparent">
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="absolute top-0 right-0 bg-primary text-white py-2 px-6 border-primary border rounded-2xl"
      >
        Publish
      </button>
    </main>
  );
};

export default WritePage;

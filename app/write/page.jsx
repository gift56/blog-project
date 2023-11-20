"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import { GoImage, GoPlus, GoUpload, GoVideo } from "react-icons/go";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const optionsValues = [
    "style",
    "fashion",
    "food",
    "culture",
    "travel",
    "coding",
  ];
  
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

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
      <div className="relative flex flex-col items-start gap-6 h-[700px] w-full">
        <button
          type="button"
          className="w-10 h-10 rounded-full flex items-center justify-center border border-darkBg bg-transparent"
          onClick={() => setOpen(!open)}
        >
          <GoPlus size={20} />
        </button>
        {open && (
          <div className="flex items-center gap-5 absolute z-40 w-full left-[50px] pl-4 transition-all duration-300">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
              accept="image/*"
            />
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-primary bg-transparent text-primary">
              <label htmlFor="image">
                <GoImage size={20} />
              </label>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-primary bg-transparent text-primary">
              <GoUpload size={20} />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-primary bg-transparent text-primary">
              <GoVideo size={20} />
            </button>
          </div>
        )}
        <ReactQuill
          className="w-full flex-grow"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
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

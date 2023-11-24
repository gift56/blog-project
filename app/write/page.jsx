"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import { GoImage, GoPlus, GoUpload, GoVideo } from "react-icons/go";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const optionsValues = [
    "style",
    "fashion",
    "food",
    "culture",
    "travel",
    "coding",
  ];

  if (status === "loading") {
    return <div className="text-2xl text-dark">Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    setSending(true);
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      setSending(false);
      router.push(`/post/${data.slug}`);
    }
  };

  const mediaValue = media.length > 0;
  const valueValue = value.length > 0;
  const titleValue = title.length > 0;

  const disableBtn = !mediaValue && !valueValue && !titleValue;

  return (
    <main className="w-full flex flex-col relative items-start justify-start gap-6 py-14">
      <input
        type="text"
        placeholder="Title"
        className="outline-none border-none bg-transparent py-10 text-darkBg w-full px-7 text-3xl font-medium md:text-5xl placeholder:text-[#b3b3b1]"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <select
          onChange={(e) => setCatSlug(e.target.value)}
          className="py-3 rounded-lg w-full cursor-pointer outline-none bg-transparent border-b border-dark focus:border-primary transition-all duration-300 text-lg pl-4"
          id="cat"
        >
          <option value="style">Select Catergory</option>
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
        {file && <p className="text-sm text-dark">{file.name}</p>}
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
            <label htmlFor="image">
              <button className="w-10 h-10 rounded-full flex items-center justify-center border border-primary bg-transparent text-primary">
                <GoUpload size={20} />
              </button>
            </label>
            <label htmlFor="image">
              <button className="w-10 h-10 rounded-full flex items-center justify-center border border-primary bg-transparent text-primary">
                <GoVideo size={20} />
              </button>
            </label>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button
        disabled={disableBtn}
        type="submit"
        onClick={handleSubmit}
        className="absolute top-0 right-0 bg-primary text-white py-2 px-6 border-primary border rounded-2xl disabled:bg-primary/50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <div className={`w-10 ${sending ? "inline-block" : "hidden"}`}>
          <img
            src="/loader.svg"
            alt="loader"
            className="w-full h-full object-cover"
          />
        </div>
        Publish
      </button>
    </main>
  );
};

export default WritePage;

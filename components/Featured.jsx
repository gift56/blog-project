import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section className="pt-5 flex flex-col items-start justify-start gap-10 w-full">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal">
        <b>Hey 👋, Efe's here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-7 w-full">
        <div className="flex-1 h-[500px] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
          <h3></h3>
        </div>
      </div>
    </section>
  );
};

export default Featured;

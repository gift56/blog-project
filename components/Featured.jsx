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
          <h3 className="text-2xl font-semibold md:text-4xl">
            Unveiling the Hidden Wonders of Jumabi
          </h3>
          <p className="text-base font-normal md:text-lg">
            🏝️ Nestled in the heart of Zizal, Jumabi is a
            captivating oasis that promises an escape like no other. Picture
            yourself strolling along pristine beaches, the powdery sand beneath
            your toes, as the sun paints the sky in hues of orange and pink.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;

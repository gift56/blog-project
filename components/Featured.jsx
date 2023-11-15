import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section className="pt-5 flex flex-col items-start justify-start gap-10 w-full">
      <h1 className="text-3xl md:text-5xl xl:text-7xl font-normal">
        <b>Hey 👋, Efe's here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-7 w-full">
        <div className="w-full lg:flex-1 relative">
          <Image
            src="/p1.jpeg"
            alt="island"
            width={500}
            height={500}
            className="!w-full md:!h-[500px] rounded-lg"
          />
        </div>
        <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-6">
          <h3 className="text-2xl font-semibold md:text-4xl">
            Unveiling the Hidden Wonders of Jumabi
          </h3>
          <p className="text-base font-normal md:text-lg text-dark">
            🏝️ Nestled in the heart of Zizal, Jumabi is a captivating oasis that
            promises an escape like no other. Picture yourself strolling along
            pristine beaches, the powdery sand beneath your toes, as the sun
            paints the sky in hues of orange and pink.
          </p>
          <button
            type="button"
            className="outline-none py-3 px-5 rounded w-fit hover:shadow-md transition-all"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;

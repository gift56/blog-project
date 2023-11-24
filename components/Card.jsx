"use client";

import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div
      key={key}
      className="w-full flex flex-col md:flex-row items-start justify-start gap-8 md:items-center"
    >
      {item.img && (
        <div className="w-full lg:flex-1 relative">
          <Image
            src={item.img}
            alt={item.title}
            width={500}
            height={500}
            className="!w-full md:!h-[300px] rounded-lg object-cover"
          />
        </div>
      )}
      <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-6">
        <p className="text-sm uppercase text-dark dark:text-[#C0C5D0] md:text-base font-medium">
          <span>{item.createdAt.substring(0, 10)}</span> -{" "}
          <span className="text-primary font-semibold">{item.catSlug}</span>
        </p>
        <h3 className="text-2xl font-semibold md:text-4xl">
          {item.title.substring(0, 50)}
        </h3>
        <div
          className="text-sm md:text-base font-normal text-dark dark:text-[#C0C5D0]"
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60).concat("","...") }}
        />
        <Link
          href={`/post/${item.slug}`}
          className="pb-2 w-max relative before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:w-[25%] before:h-[2px] before:bg-primary hover:before:w-full before:transition-all before:duration-200 transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

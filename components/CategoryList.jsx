"use client";

import Image from "next/image";
import Link from "next/link";
import { baseUrl } from "@/utils/config";
import { useState, useEffect } from "react";

// const getData = async () => {
//   const res = await fetch(`${baseUrl}/api/categories`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CategoryList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/categories`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed");
        }

        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching cat data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const colorRender = (color) => {
    if (color === "style") {
      return "bg-[#57c4ff31]";
    } else if (color === "fashion") {
      return "bg-[#da85c731]";
    } else if (color === "food") {
      return "bg-[#7fb88133]";
    } else if (color === "travel") {
      return "bg-[#ff795736]";
    } else if (color === "culture") {
      return "bg-[#ffb04f45]";
    } else if (color === "coding") {
      return "bg-[#5e4fff31]";
    }
  };
  return (
    <section className="py-9 w-full flex flex-col items-start justify-start gap-6">
      <h3 className="text-3xl font-semibold md:text-4xl">Popular Categories</h3>
      <div className="w-full flex flex-wrap justify-between gap-4 md:gap-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error:</p>
        ) : (
          data?.map((item) => (
            <Link
              href={`/blog?cat=${item.slug}`}
              key={item.id}
              className={`flex items-center gap-3 capitalize w-[45%] sm:w-[30%] lg:w-[23%] xl:w-[15%] justify-center rounded-lg h-16 ${colorRender(
                item.slug
              )}`}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className="object-cover !w-10 !h-10 rounded-full"
              />
              <span className="text-base font-medium md:text-lg">
                {item.title}
              </span>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default CategoryList;

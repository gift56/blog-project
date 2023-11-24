"use client";
import { baseUrl } from "@/utils/config";
import Link from "next/link";
import { useState, useEffect } from "react";


const MenuCategories = () => {
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
    <div className="w-full flex flex-wrap justify-start gap-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error:</p>
      ) : (
        data.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            key={item.id}
            className={`flex items-center gap-3 capitalize w-fit px-4 justify-center rounded-lg h-12 text-base font-medium md:text-lg ${colorRender(
              item.slug
            )}`}
          >
            {item.title}
          </Link>
        ))
      )}
    </div>
  );
};

export default MenuCategories;

"use client";

import { useState, useEffect } from "react";
import { MenuCategories, MenuPost } from ".";
import { baseUrl } from "@/utils/config";

const Menu = ({ page, cat }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/posts?page=${page}&cat=${cat || ""}&sortByViews=true`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed");
        }

        const newData = await res.json();

        if (newData.posts) {
          newData.posts.reverse();
        }
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, cat]);

  if (isLoading) {
    return <p className="w-full lg:flex-[0.8]">Loading Most Popular Post...</p>;
  }

  const { posts } = data;

  return (
    <div className="w-full lg:flex-[0.8] flex flex-col items-start justify-start gap-6">
      <div>
        <h4 className="text-sm font-medium md:text-base text-dark dark:text-[#C0C5D0]">{`What's Happening 🗞️`}</h4>
        <h2 className="text-xl font-bold md:text-2xl">Most Popular</h2>
      </div>
      {posts?.slice(0, 4).map((item) => (
        <MenuPost item={item} key={item._id} />
      ))}
      <div>
        <h4 className="text-sm font-medium md:text-base text-dark dark:text-[#C0C5D0]">
          Discover by topic
        </h4>
        <h2 className="text-xl font-bold md:text-2xl">Categories</h2>
      </div>
      <MenuCategories />
      {/* <div>
        <h4 className="text-sm font-medium md:text-base text-dark dark:text-[#C0C5D0]">
          Chosen by the author
        </h4>
        <h2 className="text-xl font-bold md:text-2xl">
          Editors Pick
        </h2>
      </div>
      <MenuPost withImage={true} /> */}
    </div>
  );
};

export default Menu;

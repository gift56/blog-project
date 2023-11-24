"use client";

import { useEffect, useState } from "react";
import { Card, Pagination } from ".";
import { baseUrl } from "@/utils/config";

// const getData = async (page, cat) => {
//   const res = await fetch(
//     `${baseUrl}/api/posts?page=${page}&cat=${cat || ""}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   const data = await res.json();

//   const reversedPosts = data.posts.reverse();
//   return { ...data, posts: reversedPosts };
// };

const CardList = ({ page, cat }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/posts?page=${page}&cat=${cat || ""}`,
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
    return <p className="w-full lg:flex-[2]">Loading...</p>;
  }

  const { posts, count } = data;

  const POST_PER_PAGE = 8;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="w-full lg:flex-[2] flex flex-col items-start justify-start gap-6">
      <h2 className="text-2xl font-bold md:text-3xl">Recent Post</h2>
      <div className="w-full flex flex-col items-start justify-start gap-8">
        {posts && posts.map((item) => <Card item={item} key={item._id} />)}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;

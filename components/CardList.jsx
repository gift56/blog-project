import React from "react";
import { Card, Pagination } from ".";
import { baseUrl } from "@/utils/config";

const getData = async (page, cat) => {
  const res = await fetch(
    `${baseUrl}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  console.log(posts);
  console.log(count);

  const POST_PER_PAGE = 2;

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

import React from "react";
import Image from "next/image";
import { Comments, Menu } from "@/components";
import { baseUrl } from "@/utils/config";

const getData = async (slug) => {
  const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const PostDetailPage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <main className="w-full flex flex-col items-start justify-start gap-16 py-10">
      <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6">
        <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-8 md:gap-10">
          <h1 className="text-3xl font-bold md:text-5xl text-darkBg">
            {data?.title}
          </h1>
          <div className="w-full flex items-start justify-start gap-3">
            {data?.user?.image && (
              <div className="w-12 h-12 md:w-14 md:h-14">
                <Image
                  src={data.user.image}
                  alt="author Profile Image"
                  width={70}
                  height={70}
                  className="object-cover !w-full !h-full rounded-full"
                />
              </div>
            )}
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="text-lg font-medium md:text-xl text-dark">
                {data?.user.name}
              </span>
              <span className="text-sm font-normal text-dark">
                25 April 2023
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="w-full lg:flex-1">
            <Image
              src={data.img}
              alt={data?.title}
              width={500}
              height={500}
              className="!w-full md:!h-[300px] rounded-lg object-cover"
            />
          </div>
        )}
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6">
        <div className="w-full lg:flex-[2] flex flex-col items-start justify-start gap-6">
          <div
            className="text-base font-normal text-gray md:text-lg"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <Comments />
        </div>
        <Menu />
      </div>
    </main>
  );
};

export default PostDetailPage;

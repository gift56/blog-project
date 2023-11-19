import React from "react";

const PostDetailPage = () => {
  return (
    <main className="w-full flex flex-col items-start justify-start py-10">
      <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6">
        <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-5">
          <h1 className="text-3xl font-bold md:text-5xl text-darkBg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
        <div className="w-full lg:flex-1"></div>
      </div>
    </main>
  );
};

export default PostDetailPage;

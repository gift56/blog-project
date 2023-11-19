import React from "react";

const PostDetailPage = () => {
  return (
    <main className="w-full flex flex-col items-start justify-start py-10">
      <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6">
        <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-5">
          <h1 className="text-3xl font-bold md:text-5xl text-darkBg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="w-full flex flex-col md:flex-row items-start justify-start gap-3">
            <div className="w-12 h-12 md:w-20 md:h-20">
              <Image
                src="/p1.jpeg"
                alt="authour Profile Image"
                className="object-cover !w-full !h-full rounded-full"
              />
            </div>

            {/* {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )} */}
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="">John Doe</span>
              <span className="">01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex-1"></div>
      </div>
    </main>
  );
};

export default PostDetailPage;

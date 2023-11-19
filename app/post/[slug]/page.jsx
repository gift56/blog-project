import React from "react";
import Image from "next/image";

const PostDetailPage = () => {
  return (
    <main className="w-full flex flex-col items-start justify-start py-10">
      <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6">
        <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-8 md:gap-10">
          <h1 className="text-3xl font-bold md:text-5xl text-darkBg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="w-full flex items-start justify-start gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/p1.jpeg"
                alt="author Profile Image"
                width={70}
                height={70}
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
              <span className="text-lg font-medium md:text-xl text-dark">
                John Doe
              </span>
              <span className="text-sm font-normal text-dark">
                25 April 2023
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex-1">
          <Image
            src="/p1.jpeg"
            alt="island"
            width={500}
            height={500}
            className="!w-full md:!h-[300px] rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6"></div>
    </main>
  );
};

export default PostDetailPage;

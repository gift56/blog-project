import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-start gap-8 md:items-center">
      <div className="w-full lg:flex-1 relative">
        <Image
          src="/p1.jpeg"
          alt="island"
          width={500}
          height={500}
          className="!w-full md:!h-[300px] rounded-lg"
        />
      </div>
      <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-6">
        <p className="text-sm uppercase text-gray-500 md:text-base font-medium">
          <span>11.2.2023</span> -{" "}
          <span className="text-primary font-semibold">Culture</span>
        </p>
        <h3 className="text-2xl font-semibold md:text-4xl text-darkBg">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="text-sm md:text-base font-normal text-dark">
          sit amet consectetur adipisicing elit. Natus voluptatum nihil ducimus
          illum officia quisquam aut nam voluptate deleniti veritatis.
        </p>
        <Link
          href={`/posts/""`}
          className="pb-2 w-max relative before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:w-[25%] before:h-[2px] before:bg-primary hover:before:w-full before:transition-all before:duration-200 transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

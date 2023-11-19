import Image from "next/image";
import Link from "next/link";

const MenuPost = ({ withImage }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-5">
      <Link href="/" className="flex items-start md:items-center flex-col md:flex-row justify-start gap-5">
        {withImage && (
          <div className="w-12 h-12 md:w-40 md:h-20">
            <Image
              src="/p1.jpeg"
              alt="user"
              width={100}
              height={100}
              className="!w-full !h-full object-cover rounded-full"
            />
          </div>
        )}
        <div className="">
          <span className={``}>Travel</span>
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="">
            <span className="">John Doe</span>
            <span className=""> - 10.03.2023</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;

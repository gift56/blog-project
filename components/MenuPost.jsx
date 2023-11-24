import Image from "next/image";
import Link from "next/link";

const MenuPost = ({ withImage }) => {
  const menuData = [
    {
      cat: "Travel",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      userImage: "/p1.jpeg",
      author: "John Doe",
      date: "10.03.2023",
    },
    {
      cat: "Culture",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      userImage: "/p1.jpeg",
      author: "John Doe",
      date: "10.03.2023",
    },
    {
      cat: "Fashion",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      userImage: "/p1.jpeg",
      author: "John Doe",
      date: "10.03.2023",
    },
  ];

  const colorRender = (color) => {
    if (color === "Style") {
      return "bg-[#57c4ff31]";
    } else if (color === "Fashion") {
      return "bg-[#da85c731]";
    } else if (color === "Food") {
      return "bg-[#7fb88133]";
    } else if (color === "Travel") {
      return "bg-[#ff795736]";
    } else if (color === "Culture") {
      return "bg-[#ffb04f45]";
    } else if (color === "Coding") {
      return "bg-[#5e4fff31]";
    }
  };
  return (
    <div className="w-full flex flex-col items-start justify-start gap-5">
      {menuData.map((item, index) => (
        <Link
          href="/"
          key={index}
          className="flex items-start md:items-center flex-col md:flex-row justify-start gap-5"
        >
          {withImage && (
            <div className="w-12 h-12 md:w-40 md:h-20">
              <Image
                src={item.userImage}
                alt="user"
                width={100}
                height={100}
                className="rounded-full !w-full !h-full"
              />
            </div>
          )}
          <div className="flex flex-col items-start justify-start gap-2">
            <span
              className={`flex items-center gap-3 capitalize w-fit px-2 justify-center rounded-lg h-7 text-base font-medium md:text-lg ${colorRender(
                item.cat
              )}`}
            >
              {item.cat}
            </span>
            <h3 className="text-base font-medium text">
              {item.title}
            </h3>
            <p className="text-dark dark:text-[#C0C5D0] text-sm font-medium">
              <span>{item.author}</span>
              <span className="text-primary"> - {item.date}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPost;

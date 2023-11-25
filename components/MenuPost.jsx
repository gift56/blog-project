import Image from "next/image";
import Link from "next/link";

const MenuPost = ({ item, key }) => {
  const colorRender = (color) => {
    if (color === "style") {
      return "bg-[#57c4ff31]";
    } else if (color === "fashion") {
      return "bg-[#da85c731]";
    } else if (color === "food") {
      return "bg-[#7fb88133]";
    } else if (color === "travel") {
      return "bg-[#ff795736]";
    } else if (color === "culture") {
      return "bg-[#ffb04f45]";
    } else if (color === "coding") {
      return "bg-[#5e4fff31]";
    }
  };

  function formatViewsCount(count) {
    if (count >= 1000) {
      const millionCount = count / 10000;
      return millionCount.toFixed(1) + "k views";
    } else if (count >= 1000000) {
      const millionCount = count / 1000000;
      return millionCount.toFixed(1) + "m views";
    } else {
      return count + " views";
    }
  }

  return (
    <div
      key={key}
      className="w-full flex flex-col items-start justify-start gap-5"
    >
      <Link
        href={`/post/${item.slug}`}
        className="flex items-start md:items-center flex-col md:flex-row justify-start gap-5 w-full"
      >
        {item.img && (
          <div className="w-12 h-12 md:w-40 md:h-20 rounded-[50%] overflow-hidden object-contain">
            <Image
              src={item.img}
              alt={item.title}
              width={100}
              height={100}
              className="rounded-full !w-full !h-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="flex items-center justify-between gap-2 w-full">
            <span
              className={`flex items-center gap-3 capitalize w-fit px-2 justify-center rounded-lg h-7 text-base font-medium md:text-lg ${colorRender(
                item.catSlug
              )}`}
            >
              {item.catSlug}
            </span>
            <span className="text-sm font-normal flex items-center justify-center gap-1">
              {formatViewsCount(item.views)}
            </span>
          </div>
          <h3 className="text-base font-medium">
            {item.title.substring(0, 58)}
          </h3>
          <p className="text-dark dark:text-[#C0C5D0] text-sm font-medium">
            <span>{item.userEmail.substring(0, 10)}</span>
            <span className="text-primary">
              {" "}
              - {item.createdAt.substring(0, 10)}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;

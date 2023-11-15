import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
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

  const catergoryStyles = [
    {
      src: "/style.png",
      alt: "style",
      slug: "style",
      title: "Style",
    },
    {
      src: "/fashion.png",
      alt: "fashion",
      slug: "fashion",
      title: "Fashion",
    },
    {
      src: "/food.png",
      alt: "food",
      slug: "food",
      title: "Food",
    },
    {
      src: "/travel.png",
      alt: "travel",
      slug: "travel",
      title: "Travel",
    },
    {
      src: "/culture.png",
      alt: "culture",
      slug: "culture",
      title: "Culture",
    },
    {
      src: "/coding.png",
      alt: "coding",
      slug: "coding",
      title: "Coding",
    },
  ];

  return (
    <section className="py-9 w-full flex flex-col items-start justify-start gap-6">
      <h3 className="text-3xl font-semibold md:text-4xl">Popular Categories</h3>
      <div className="w-full flex flex-wrap justify-between gap-4">
        {catergoryStyles.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            key={item.slug}
            className={`flex items-center gap-3 capitalize w-[50%] md:w-[40%] lg:w-[25%] xl:w-[15%] justify-center rounded-lg h-16 ${colorRender(
              item.slug
            )}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={32}
              height={32}
              className="object-cover !w-10 !h-10 rounded-full"
            />
            <span className="text-base font-medium md:text-lg">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;

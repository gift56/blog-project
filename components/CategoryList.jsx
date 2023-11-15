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
  return (
    <section className="py-9 w-full flex flex-col items-start justify-start gap-6">
      <h3 className="text-3xl font-semibold md:text-4xl">Popular Categories</h3>
      <div className="w-full flex flex-wrap justify-between gap-6">
        <Link
          href="/blog?cat=style"
          className={`flex items-center gap-3 capitalize w-[15%] justify-center rounded-lg h-20`}
          // key={item._id}
        ></Link>
      </div>
    </section>
  );
};

export default CategoryList;

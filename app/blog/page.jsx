import { CardList, Menu } from "@/components";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <main className="w-full flex flex-col gap-12 py-10">
      <h1 className="w-full text-center text-2xl font-bold md:text-4xl">
        <span className="capitalize">{cat}</span> Blog
      </h1>
      <section className="flex flex-col lg:flex-row items-start justify-between gap-10 py-8">
        <CardList page={page} cat={cat} />
        <Menu />
      </section>
    </main>
  );
};

export default BlogPage;

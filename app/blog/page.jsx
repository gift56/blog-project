import { CardList, Menu } from "@/components";

const BlogPage = () => {
  return (
    <main className="w-full flex flex-col gap-8 py-10">
      <h1 className="w-full text-center text-2xl font-bold md:text-4xl">
        Culture Blog
      </h1>
      <section className="flex flex-col lg:flex-row items-start justify-between gap-10 py-8">
        <CardList />
        <Menu />
      </section>
    </main>
  );
};

export default BlogPage;

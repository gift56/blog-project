import { CardList, CategoryList, Featured, Menu } from "@/components";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main>
      <Featured />
      <CategoryList />
      <section className="flex flex-col lg:flex-row items-start justify-between gap-10 py-8">
        <CardList page={page} />
        <Menu />
      </section>
    </main>
  );
}

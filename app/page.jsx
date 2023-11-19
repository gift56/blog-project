import { CardList, CategoryList, Featured, Menu } from "@/components";

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <section className="flex flex-col lg:flex-row items-start justify-between gap-10 py-8">
        <CardList />
        <Menu />
      </section>
    </main>
  );
}

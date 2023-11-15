import { CardList, CategoryList, Featured, Menu } from "@/components";

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <section className="flex items-start justify-between gap-6">
        <CardList />
        <Menu />
      </section>
    </main>
  );
}

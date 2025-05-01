import { categories } from "@/constants";
import { Container } from "@/components/layouts";
import { CategoryCard } from "@/components/category-card";

const colors = ["#fecdd3", "#fbcfe8", "#ddd6fe", "#e0e7ff", "#e9d5ff"];

export function Categories() {
  return (
    <section className="bg-rose-50 py-20">
      <Container className="flex flex-col gap-8 justify-center">
        <h3>Top Categories</h3>
        <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category, index: number) => {
            const bgColor = colors[index % colors.length];
            return (
              <CategoryCard
                key={category.name}
                category={category}
                bgColor={bgColor}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

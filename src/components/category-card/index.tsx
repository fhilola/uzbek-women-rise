import { ICategory } from "@/types";

export const CategoryCard = ({
  category,
  bgColor = "#e9d5ff",
}: {
  category: ICategory;
  bgColor: string;
}) => {
  return (
    <div
      className="flex flex-col items-center gap-4 p-6 rounded-3xl"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {category.icon}
      <p>{category.name}</p>
    </div>
  );
};

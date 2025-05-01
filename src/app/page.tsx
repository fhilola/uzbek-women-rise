import { AboutusSection, Categories, HeroSection } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutusSection />
      <Categories />
    </div>
  );
}

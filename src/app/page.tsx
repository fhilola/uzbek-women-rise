import {
  AboutusSection,
  Categories,
  FAQSection,
  HeroSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutusSection />
      <Categories />
      <FAQSection />
    </div>
  );
}

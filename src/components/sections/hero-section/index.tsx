import Image from "next/image";
import heroImage from "@public/jpg/hero-image.jpg";

import { Container } from "@layouts/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section>
      <div className="relative w-full h-[500px]">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <Container className="flex items-center justify-center flex-col h-full gap-5">
            <h2 className="text-center">Uzbek Women Rise</h2>
            <p className="text-center">
              Ermpowering women through education and support
            </p>
            <Button>Start Learning</Button>
          </Container>
        </div>
      </div>
    </section>
  );
}

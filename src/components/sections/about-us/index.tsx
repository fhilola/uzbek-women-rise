import { Container } from "@layouts/container";

export function AboutusSection() {
  return (
    <section className="my-20">
      <Container className="flex flex-col gap-4">
        <h3>About Us</h3>
        <p className="max-w-[900px] w-full">
          We provide women with the knowledge and skills they need to succeed in
          technology and digital fields. Through our courses, workshops, and
          communit support, we helo women achieve their goals.
        </p>
      </Container>
    </section>
  );
}

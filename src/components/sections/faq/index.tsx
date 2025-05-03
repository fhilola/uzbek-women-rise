import { Container } from "@layouts/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IFaq {
  question: string;
  answer: string;
}

const faqData: IFaq[] = [
  {
    question: "What is Uzbek Women Rise?",
    answer:
      "Uzbek Women Rise is a platform dedicated to empowering women in Uzbekistan through education, community, and personal development initiatives.",
  },
  {
    question: "When was Uzbek Women Rise founded?",
    answer:
      "Uzbek Women Rise began its journey in January 2023, and has been growing ever since to empower and uplift women in Uzbekistan.",
  },
  {
    question: "What kind of content do you share?",
    answer:
      "We offer offline and online events, workshops, book clubs, English lessons, career-focused classes, and access to free educational resources through our website and instagram channel.",
  },
  {
    question: "Is it free to join the community?",
    answer:
      "Yes! Our online community and most events are free. Some specialized workshops or mentorship programs may have limited spots or require registration",
  },
  {
    question: "Can i volunteer or contribute to the platform?",
    answer:
      "Yes! We welcome volunteers, content creators, and collaborators. Register or use the contact form on our website to get started.",
  },
  {
    question: "How can I access free resources?",
    answer:
      "Visit our website and head to the 'Resource' section for downloadable materials in education, career prep, and personal development.",
  },
];

export function FAQSection() {
  return (
    <section className="my-20">
      <Container className="flex flex-col gap-10">
        <h3 className="text-center">Frequently Asked Questions</h3>
        <Accordion type="multiple" className="max-w-[1000px] w-full mx-auto">
          {faqData.map((item: IFaq, index: number) => {
            return (
              <AccordionItem value={item.question} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
}

import { BookA, Brush, CodeXml, MessageCircleHeart, Tags } from "lucide-react";

export const navLinks = [
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Workshops",
    href: "/workshops",
  },
  {
    name: "Volunteer",
    href: "/volunteer",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const categories = [
  {
    icon: <CodeXml size={64} />,
    name: "Programming",
  },
  {
    icon: <Tags size={64} />,
    name: "Marketing",
  },
  {
    icon: <MessageCircleHeart size={64} />,
    name: "SMM",
  },
  {
    icon: <Brush size={64} />,
    name: "Designing",
  },
  {
    icon: <BookA size={64} />,
    name: "English",
  },
];

"use client";
import { useState } from "react";
import { Button } from "@ui/button";
import { Menu } from "lucide-react";
import { INavLink } from "@Itypes/index";
import { navLinks } from "@constants/index";
import { NavLink } from "@components/nav-link";
import { Container } from "@layouts/container";
import { NavMenuTablet } from "@/components/nav-menu-tablet";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="py-7">
      <Container>
        <div className="flex items-center  justify-between">
          <h1>Uzbek Women Rise</h1>
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link: INavLink) => {
              return <NavLink key={link.name} link={link} />;
            })}
          </nav>
          <div className="flex items-center gap-3">
            <Button>Join us</Button>
            <Button variant={"outline"} onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </Button>
          </div>
        </div>
        <NavMenuTablet isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </header>
  );
}

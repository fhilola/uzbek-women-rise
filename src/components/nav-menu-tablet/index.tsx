import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { INavLink } from "@/types";
import { NavLink } from "../nav-link";
import { Button } from "../ui/button";
import { navLinks } from "@/constants";

interface INavMenuTablet {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavMenuTablet({ isOpen, setIsOpen }: INavMenuTablet) {
  return (
    <div
      className={cn(
        "fixed flex items-start justify-between p-6 z-50 inset-y-0 w-full bg-white shadow-xs transition-all ease-in-out duration-300",
        isOpen ? "left-0" : "left-full"
      )}
    >
      <nav className="flex flex-col items-start gap-4">
        {navLinks.map((link: INavLink) => {
          return <NavLink key={link.name} link={link} />;
        })}
      </nav>
      <Button variant={"outline"} onClick={() => setIsOpen(!isOpen)}>
        <X />
      </Button>
    </div>
  );
}

"use client";
import { cn } from "@/lib/utils";
import { INavLink } from "@Itypes/index";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ link }: { link: INavLink }) {
  const pathname = usePathname();
  const isActive =
    pathname === link.href ||
    (link.href !== "/" && pathname?.startsWith(link.href));
  return (
    <Link
      href={link.href}
      className={cn(
        "text-[#1E293B] font-medium transition-colors duration-200 hover:text-rose-600",
        isActive && "text-rose-600"
      )}
    >
      {link.name}
    </Link>
  );
}

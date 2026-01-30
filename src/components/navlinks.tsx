"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface NavLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">, LinkProps {
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const isActive = typeof window !== "undefined" && window.location.pathname === href;
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };

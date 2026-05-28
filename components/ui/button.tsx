import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { ButtonProps } from "./button.props";
import { buttonVariants } from "./button.variants";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {props.children}
        </Link>
      );
    }

    const Comp = asChild ? Slot : "button";
    return <Comp className={classes} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps } from "./button.props";

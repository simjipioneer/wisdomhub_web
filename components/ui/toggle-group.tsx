"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";
import Check from "../shared/check";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants> & {
      checkType?: "circle" | "square";
      checkSize?: "sm" | "md";
      hasIcon?: boolean;
      "data-state"?: "on" | "off";
    }
>(
  (
    {
      className,
      children,
      hasIcon,
      checkType,
      checkSize,
      variant,
      size,
      ...props
    },
    ref,
  ) => {
    const context = React.useContext(ToggleGroupContext);

    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size,
          }),
          "w-full justify-start [&[data-state='on']_div_img:first-child]:hidden subtitle-2 flex gap-4 [&[data-state='on']_div]:bg-primary [&[data-state='on']_div]:border-none [&[data-state='on']_div_img:last-child]:block",
          className,
        )}
        {...props}
      >
        {hasIcon && checkType && checkSize && (
          <Check type={checkType} size={checkSize} />
        )}
        {children}
      </ToggleGroupPrimitive.Item>
    );
  },
);

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };

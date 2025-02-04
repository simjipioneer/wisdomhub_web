import * as React from "react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fullBorder?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, fullBorder, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[53px] web:h-[59px] w-full border-black/10 px-2 py-4 body-2 web:body-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black/40 focus-visible:border-black focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:text-black/40",
          fullBorder ? "border rounded-md" : "border-b",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

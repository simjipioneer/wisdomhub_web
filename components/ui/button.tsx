import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LoadIcon } from "../shared/loading/loading";

// eslint-disable-next-line tailwindcss/no-custom-classname
const buttonVariants = cva(
  "flex w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:text-black/40",
  {
    variants: {
      variant: {
        default: "bg-primary text-white disabled:bg-black/10 web:heading-4",
        destructive: "bg-destructive text-destructive-foreground",
        outline:
          "border border-primary bg-white text-primary disabled:border-black/40",
        "outline-gray":
          "border border-[#DEDEDE] bg-white text-black disabled:border-gray-100 disabled:bg-gray-100",
        "outline-circle-gray":
          "rounded-[50px] border border-black/40 text-[#0F0F0F] caption",
        "outline-circle":
          "rounded-[50px] border border-primary text-[#0F0F0F] caption",
        filter:
          "max-w-min rounded-[50px] border border-primary text-[#0F0F0F] body-2 [&[data-state=on]]:border-primary",
        ghost: "button-m",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3 heading-4",
        sm: "h-[26px] rounded-sm px-3 py-1 button-s-cta",
        md: "h-[37px] px-6 py-2 button-m-cta",
        lg: "h-10 rounded-md px-8",
        "outline-lg": "h-[49px] px-6 py-2 heading-5",
        "outline-md": "h-[38px] max-w-max px-6 py-2 button-m",
        "outline-sm":
          "h-[30px] rounded-sm px-3 py-1 button-s web:h-[41px] web:max-w-max web:rounded-md web:px-6 web:py-2 web:button-m",
        icon: "size-9",
        "filter-sm": "h-8 px-4 py-[5px] caption",
        "filter-md": "h-10 px-4 py-[9.5px] body-2",
        "outline-circle-sm":
          "h-[30px] max-w-max rounded-[50px] px-4 caption web:h-[37px] web:body-2",
        "ghost-sm": "px-3 py-1",
        "ghost-md": "px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isDeliveryIcon?: boolean; // 화물 아이콘 사용 여부
  isPencilIcon?: boolean; // 연필 아이콘 사용 여부
  isFilterIcon?: boolean; // 필터 아이콘 사용 여부
  isFilterSelected?: boolean; // 필터가 적용된 상태인지 여부
  loading?: boolean; // 로딩 중인지 여부
  "data-state"?: "on" | "off" | "closed";
  loadColor?: "red" | "white";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isPencilIcon,
      isFilterIcon,
      isDeliveryIcon,
      loading,
      loadColor,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // filter with icon button
    if (isFilterIcon) {
      const dataState = props["data-state"];
      return (
        <Comp
          className={cn(
            buttonVariants({ variant: "filter", size, className }),
            size === "filter-sm" ? "h-8 py-[5px]" : "h-10",
            "pl-3 pr-8 relative",
          )}
          ref={ref}
          {...props}
        >
          {props.children}
          <Image
            className="absolute right-0 mr-[5.5px]"
            src={`/svg/icon/chevron-down${dataState && dataState === "closed" ? "" : "-active"}.svg`}
            alt="펼쳐보기"
            width={24}
            height={24}
          />
        </Comp>
      );
    }

    // delivery icon button
    if (isDeliveryIcon) {
      return (
        <Comp
          className={cn(
            size === "sm" ? "size-9" : "w-12 h-[45px] border",
            "flex items-center justify-center border rounded-lg border-black/20",
          )}
          ref={ref}
          {...props}
        >
          <Image
            src={`/svg/icon/delivery${props.disabled ? "-gray" : ""}.svg`}
            alt="펼쳐보기"
            width={24}
            height={24}
          />
        </Comp>
      );
    }

    // pencil icon button
    if (isPencilIcon) {
      return (
        <Comp
          ref={ref}
          {...props}
          className={cn(
            "flex items-center min-w-12 justify-center border rounded-lg border-gray/20",
          )}
        >
          <Image
            src={`/svg/icon/pencil.svg`}
            alt="공지 작성하기"
            width={24}
            height={24}
          />
        </Comp>
      );
    }

    return (
      <>
        {loading ? (
          <Comp
            disabled={loading}
            className={cn(
              buttonVariants({ variant, size, className }),
              "relative",
              loadColor === "white" ? "disabled:border-primary/400" : "",
            )}
            ref={ref}
            {...props}
          >
            <LoadIcon type="button" color={loadColor ?? "red"} />
          </Comp>
        ) : (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        )}
      </>
    );
  },
);
Button.displayName = "Button";
export { Button, buttonVariants };

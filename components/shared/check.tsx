import Image from "next/image";

const Check = ({
  type,
  size,
  isAgree,
}: {
  type: "circle" | "square";
  size: "sm" | "md";
  isAgree?: boolean;
}) => {
  const rounded = type === "circle" ? "rounded-full" : "rounded-[2px]";
  const className = `${rounded}`;

  return (
    <div
      className={`${className} flex size-5 shrink-0 items-center justify-center ${isAgree ? "bg-primary" : "border bg-white"} web:size-6`}
    >
      {isAgree === undefined ? (
        <>
          <Image
            src={`/svg/icon/check.svg`}
            alt="체크 아이콘"
            width={size === "sm" ? 10 : 12}
            height={size === "sm" ? 10 : 12}
            className="size-[10px] web:size-3"
          />
          <Image
            className="hidden size-[10px] web:size-3"
            src={`/svg/icon/check-white.svg`}
            alt="체크 아이콘"
            width={size === "sm" ? 10 : 12}
            height={size === "sm" ? 10 : 12}
          />
        </>
      ) : isAgree ? (
        <Image
          className="size-[10px] web:size-3"
          src={`/svg/icon/check-white.svg`}
          alt="체크 아이콘"
          width={size === "sm" ? 10 : 12}
          height={size === "sm" ? 10 : 12}
        />
      ) : (
        <Image
          src={`/svg/icon/check.svg`}
          alt="체크 아이콘"
          width={size === "sm" ? 10 : 12}
          height={size === "sm" ? 10 : 12}
          className="size-[10px] web:size-3"
        />
      )}
    </div>
  );
};
export default Check;

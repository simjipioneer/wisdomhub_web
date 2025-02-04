import Image from "next/image";

interface AvatarProps {
  src: string;
  size: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "40px",
  md: "60px",
  lg: "80px",
};

const Avatar = ({ src, size }: AvatarProps) => {
  const imageSize = sizeMap[size];

  return (
    <Image
      src={src}
      alt="프로필 이미지"
      style={{ width: imageSize, height: imageSize }}
      width={40}
      height={40}
      className="size-[40px] rounded-full border border-gray-100 object-cover"
    />
  );
};

export default Avatar;

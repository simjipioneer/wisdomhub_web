interface BadgeProps {
  text: string;
}
const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="flex items-center justify-center rounded-[50px] border border-gray-400 px-3 py-1 text-gray-400 button-s-cta web:px-6 web:py-2 web:heading-4">
      {text}
    </div>
  );
};

export default Badge;

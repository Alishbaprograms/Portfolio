interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function GradientText({ children, className = "", as: Tag = "span" }: GradientTextProps) {
  return (
    <Tag
      className={`bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Tag>
  );
}

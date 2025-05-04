import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children, type, onClick, className } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg bg-blue-500 px-3 cursor-pointer py-2 font-semibold text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children } = props;
  return (
    <button className="rounded-lg bg-blue-500 px-3 py-2 font-semibold text-white ">
      {children}
    </button>
  );
};

export default Button;

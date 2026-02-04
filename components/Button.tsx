import React from "react";
import { CSSProperties } from "react";

interface ButtonProps {
  children?: React.ReactNode;
  style?: CSSProperties;
  variant?: "primary" | "light";
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  style,
  variant = "light",
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} ${className ?? ""}`}
      onClick={onClick}
      style={{ ...style, opacity: 1 }}
    >
      {children}
    </button>
  );
};

export default Button;

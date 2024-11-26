import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onClick?: () => void;
  type?: "primary" | "secondary";
  btnSize?: "s" | "m";
  img?: string;
}
const Button: React.FC<ButtonProps> = ({
  type = "primary",
  btnSize = "m",
  children,
  onClick,
}) => {
  return (
    <div
      className={classNames(styles.button, styles[type], styles[btnSize])}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;

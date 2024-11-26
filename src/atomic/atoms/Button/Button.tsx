import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  onClick?: () => void;
  type?: "primary" | "secondary";
  size?: "s" | "m";
  title: string;
  img?: string;
}
const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "primary",
  img,
  title,
  size = "m",
}) => {
  return (
    <div
      className={classNames(styles.button, styles[type], styles[size])}
      onClick={onClick}
    >
      {img && <img src={img} alt="title" />}
      {title}
    </div>
  );
};

export default Button;

import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  width?: string;
  isActive?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  width = "314px",
  isActive = false,
}) => {
  return (
    <div
      className={classNames(styles.button, isActive ? styles.active : null)}
      onClick={onClick}
      style={{ width: width }}
    >
      {title}
    </div>
  );
};

export default Button;

import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  btnType?: "primary" | "secondary" | "submit" | "reset" | "button";
  btnSize?: "s" | "m";
  img?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { btnType = "primary", btnSize = "m", children, onClick, className, ...rest } = props;

  return (
      <button
          className={classNames(styles.button, styles[btnType], styles[btnSize], className)} // className уже включён
          onClick={onClick}
          {...rest}
      >
        {children}
      </button>
  );
};

export default Button;

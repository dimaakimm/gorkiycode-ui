import React from "react";
import styles from "./HeaderButton.module.scss";
import classNames from "classnames";

interface HeaderButtonProps {
  onClick: () => void;
  isActive: boolean;
  title: string;
  img: string;
}
const HeaderButton: React.FC<HeaderButtonProps> = ({
  onClick,
  isActive,
  title,
  img,
}) => {
  return (
    <div
      className={classNames(styles.button, isActive ? styles.active : null)}
      onClick={onClick}
    >
      <img src={img} alt={title} height="24px" />
      {title}
    </div>
  );
};

export default HeaderButton;

import React from "react";
import styles from "./Header.module.scss";
import HeaderButton from "../../molecules/HeaderButton/HeaderButton.tsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src="src/assets/logo.svg" alt="logo" />
      </div>
      <div className={styles.headerRight}>
        <HeaderButton
          img="src/assets/map.svg"
          title="карта"
          onClick={() => {}}
          isActive={false}
        />
        <HeaderButton
          img="src/assets/profile.svg"
          title="профиль"
          onClick={() => {}}
          isActive={false}
        />
      </div>
    </header>
  );
};

export default Header;

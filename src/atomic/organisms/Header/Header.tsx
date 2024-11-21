import React from "react";
import styles from "./Header.module.scss";
import HeaderButton from "../../molecules/HeaderButton/HeaderButton.tsx";
import { Link } from "react-router-dom";

interface HeaderProps {
  activeTabId?: number;
}
const Header: React.FC<HeaderProps> = ({ activeTabId }) => {
  const pages = [
    {
      id: 1,
      img: activeTabId === 1 ? "src/assets/map-dark.svg" : "src/assets/map.svg",
      title: "карта",
      link: "/map",
    },
    {
      id: 2,
      img:
        activeTabId === 2
          ? "src/assets/profile-dark.svg"
          : "src/assets/profile.svg",
      title: "профиль",
      link: "/profile",
    },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <img src="src/assets/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.headerRight}>
        {pages.map((page) => (
          <Link to={page.link}>
            <HeaderButton
              img={page.img}
              title={page.title}
              key={page.id}
              isActive={activeTabId === page.id}
            />
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;

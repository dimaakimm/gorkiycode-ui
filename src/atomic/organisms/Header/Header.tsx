import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import Button from "../../atoms/Button/Button.tsx";

const Header = () => {
  const location = useLocation();
  const pages = [
    {
      id: 1,
      img:
        location.pathname === "/map"
          ? "src/assets/map-dark.svg"
          : "src/assets/map.svg",
      title: "карта",
      link: "/map",
    },
    {
      id: 2,
      img:
        location.pathname === "/profile"
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
            <Button
              img={page.img}
              title={page.title}
              key={page.id}
              size="s"
              type={location.pathname === page.link ? "secondary" : "primary"}
            />
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;

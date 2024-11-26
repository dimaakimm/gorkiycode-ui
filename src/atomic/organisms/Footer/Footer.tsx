import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.footerLeft}>
          <img
            width="310px"
            height="40px"
            src="src/assets/logo.svg"
            alt="logo"
          />
        </div>
        <div className={styles.footerMiddle}>
          <div className={styles.pagesText}>Политика конфиденциальности</div>
          <div className={styles.pagesText}>Правовая информация</div>
          <Link to="/map">
            <div className={styles.pagesText}>Карта</div>
          </Link>
          <Link to="/news">
            <div className={styles.pagesText}>Новости</div>
          </Link>
        </div>
        <div className={styles.footerRight}>
          <img width="60px" height="60px" src="src/assets/tg.svg" alt="tg" />
          <img width="60px" height="60px" src="src/assets/vk.svg" alt="vk" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

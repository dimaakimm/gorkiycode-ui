import Header from "../../organisms/Header/Header.tsx";
import styles from "./HomePage.module.scss";
import Footer from "../../organisms/Footer/Footer.tsx";
import Button from "../../atoms/Button/Button.tsx";
import LatestEvents from "../../organisms/LatestEvents/LatestEvents.tsx";
import CommandRequests from "../../organisms/CommandsRequests/CommandRequests.tsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.mainContentLeft}>
              <div className={styles.mainText}>
                СОБЕРИ КОМАНДУ, ВЫБЕРИ ПЛОЩАДКУ – ИГРА НАЧИНАЕТСЯ!
              </div>
              <div className={styles.tabs}>
                <Link to="/map">
                  <Button btnType="secondary" title="НАЙТИ КОМАНДУ">
                    найти команду
                  </Button>
                </Link>
                <Link to="/map">
                  <Button>поиск площадки</Button>
                </Link>
              </div>
            </div>
            <div className={styles.mainContentRight}>
              <img
                width="800px"
                src="src/assets/rockets.png"
                alt="rockets"
              />
            </div>
          </div>
          <div className={styles.emptyBlock} />
          <CommandRequests />
          <div className={styles.emptyBlock} />
          <LatestEvents />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

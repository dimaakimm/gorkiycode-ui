import Header from "../../organisms/Header/Header.tsx";
import styles from "./HomePage.module.scss";
import Footer from "../../organisms/Footer/Footer.tsx";
import Button from "../../atoms/Button/Button.tsx";
import LatestEvents from "../../organisms/LatestEvents/LatestEvents.tsx";
import CommandRequests from "../../organisms/CommandsRequests/CommandRequests.tsx";

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.mainContentLeft}>
              <div className={styles.mainText}>
                СОБЕРИ КОМАНДУ, ВЫБЕРИ ПЛОЩАДКУ - ИГРА НАЧНЕТСЯ!
              </div>
              <div className={styles.tabs}>
                <Button type="secondary" title="НАЙТИ КОМАНДУ">
                  НАЙТИ КОМАНДУ
                </Button>
                <Button>ПОИСК ПЛОЩАДКИ</Button>
              </div>
            </div>
            <div className={styles.mainContentRight}>
              <img
                width="855px"
                height="855px"
                src="src/assets/rockets.svg"
                alt="rockets"
              />
            </div>
          </div>
          <CommandRequests />
          <LatestEvents />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

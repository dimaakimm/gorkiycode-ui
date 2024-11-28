import styles from "./MapPage.module.scss";
import Header from "../../organisms/Header/Header.tsx";
import Footer from "../../organisms/Footer/Footer.tsx";
import YandexMap from "../../organisms/YandexMap/YandexMap.tsx";



const MapPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
          <Header />
          <YandexMap/>
      </div>
    </>
  );
};

export default MapPage;

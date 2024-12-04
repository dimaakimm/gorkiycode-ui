import styles from "./MapPage.module.scss";
import Header from "../../organisms/Header/Header.tsx";
import Footer from "../../organisms/Footer/Footer.tsx";
import YandexMap from "../../organisms/YandexMap/YandexMap.tsx";
import {useLocation, useParams} from "react-router-dom";



const MapPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    console.log(id)

    return (
    <>
      <div className={styles.wrapper}>
          <Header />
          {id ? <YandexMap defaultActive={Number(id)}/> : <YandexMap />}
      </div>
    </>
  );
};

export default MapPage;

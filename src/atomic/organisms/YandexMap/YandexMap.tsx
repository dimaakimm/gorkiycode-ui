import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from "./YandexMap.module.scss"
import ModalMapFilters from "../Modals/ModalMapFilters/ModalMapFilters.tsx";
import {useState} from "react";

const YandexMap = () => {
    const [filtersIsActive, setFiltersIsActive] = useState<boolean>(false)
    const mapCenter = [55.751574, 37.573856];
    const placemarkCoords = [55.751574, 37.573856];

    const handlePlacemarkClick = () => {
        alert('Метка нажата!');
    };

    return (
        <>
        <div  className={styles.map}>
            <div>
                <YMaps>
                    <Map
                        defaultState={{
                            center: mapCenter,
                            zoom: 10,
                        }}
                        width="100%"
                        height="calc(100vh - 128px)"
                    >
                        <Placemark
                            geometry={placemarkCoords}
                            onClick={handlePlacemarkClick}
                        />
                    </Map>
                </YMaps>
            </div>
            <div onClick={() => setFiltersIsActive(true)} className={styles.modals__button}>
                <p>Фильтры</p>
            </div>
        </div>

            <ModalMapFilters active={filtersIsActive} onClose={() => setFiltersIsActive(false)} />


        </>
    );
};

export default YandexMap;

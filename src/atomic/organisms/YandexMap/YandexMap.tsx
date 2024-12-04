import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from "./YandexMap.module.scss"
import ModalMapFilters from "../Modals/ModalMapFilters/ModalMapFilters.tsx";
import {useEffect, useState} from "react";
import ModalMeets from "../Modals/ModalMeets/ModalMeets.tsx";
import ModalPlayground from "../Modals/ModalPlayground/ModalPlayground.tsx";
import {IPlayground} from "../../../api/playground/types.ts";
import {getAllPlaygrounds} from "../../../api/playground";

const YandexMap = ({defaultActive}:{defaultActive?: number}) => {
    const [filtersIsActive, setFiltersIsActive] = useState<boolean>(false)
    const [meetsIsActive, setMeetsIsActive] = useState<boolean>(false)
    const [playgroundId, setPlaygroundId] = useState<number | undefined>(defaultActive)
    const mapCenter = [56.338382, 43.943282];
    const [playgrounds, setPlaygrounds] = useState<IPlayground[]>([]);

    const handlePlacemarkClick = (id:number) => {
        setPlaygroundId(undefined)
        setPlaygroundId(id)
    };

    useEffect(() => {
        const fetchPlaygrounds = async () => {
            try {
                const temp = await getAllPlaygrounds();
                console.log(temp)
                setPlaygrounds([...temp.data]);
            } catch (error) {
                console.error("Error fetching playgrounds:", error);
            }
        };
        fetchPlaygrounds();
    }, []);

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
                        height="calc(100vh - 114px)"
                    >
                        {playgrounds.map((el, index) =>
                            <Placemark
                                key={index}
                                geometry={[el.latitude, el.longitude]}
                                onClick={() => handlePlacemarkClick(el.id)}
                            />
                        )}
                    </Map>
                </YMaps>
            </div>
            <div className={[styles.modals__button, filtersIsActive || meetsIsActive ? styles.active : ""].join(" ")}>
                <div onClick={() => {setFiltersIsActive(true); setMeetsIsActive(false)}} className={styles.modal__button}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.0031 33.1333C25.0698 33.6333 24.9031 34.1667 24.5198 34.5167C24.3656 34.6712 24.1825 34.7938 23.9809 34.8774C23.7792 34.961 23.5631 35.0041 23.3448 35.0041C23.1265 35.0041 22.9104 34.961 22.7088 34.8774C22.5072 34.7938 22.324 34.6712 22.1698 34.5167L15.4865 27.8333C15.3048 27.6556 15.1667 27.4382 15.0828 27.1983C14.999 26.9583 14.9717 26.7022 15.0031 26.45V17.9167L7.01981 7.7C6.74916 7.35255 6.62704 6.9121 6.68013 6.47488C6.73322 6.03767 6.95721 5.63924 7.30315 5.36667C7.61981 5.13333 7.96981 5 8.33648 5H31.6698C32.0365 5 32.3865 5.13333 32.7031 5.36667C33.0491 5.63924 33.2731 6.03767 33.3262 6.47488C33.3793 6.9121 33.2571 7.35255 32.9865 7.7L25.0031 17.9167V33.1333ZM11.7365 8.33333L18.3365 16.7667V25.9667L21.6698 29.3V16.75L28.2698 8.33333H11.7365Z"
                            fill="#D4FC07"/>
                    </svg>
                </div>
                <div onClick={() => {setMeetsIsActive(true); setFiltersIsActive(false)}} className={styles.modal__button}>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M27.4793 11.4844C27.279 14.2646 25.2166 16.4062 22.9675 16.4062C20.7185 16.4062 18.6527 14.2652 18.4558 11.4844C18.2507 8.59209 20.2585 6.5625 22.9675 6.5625C25.6766 6.5625 27.6843 8.64473 27.4793 11.4844Z"
                            stroke="#DCFF2C" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M22.9685 20.7812C18.5135 20.7812 14.2294 22.994 13.1562 27.3034C13.014 27.8735 13.3715 28.4375 13.9573 28.4375H31.9803C32.5661 28.4375 32.9216 27.8735 32.7815 27.3034C31.7082 22.925 27.4241 20.7812 22.9685 20.7812Z"
                            stroke="#DCFF2C" stroke-width="2.1875" stroke-miterlimit="10"/>
                        <path
                            d="M13.6754 12.7107C13.5154 14.9311 11.8488 16.6797 10.0523 16.6797C8.25587 16.6797 6.58653 14.9317 6.4293 12.7107C6.26592 10.4009 7.88809 8.75 10.0523 8.75C12.2166 8.75 13.8388 10.4433 13.6754 12.7107Z"
                            stroke="#DCFF2C" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M14.0827 20.9155C12.8488 20.3502 11.4898 20.1328 10.0495 20.1328C6.49481 20.1328 3.07 21.8999 2.21209 25.3418C2.0993 25.7971 2.38504 26.2476 2.85262 26.2476H10.528"
                            stroke="#DCFF2C" stroke-width="2.1875" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                </div>
                <div onClick={() => {setMeetsIsActive(true); setFiltersIsActive(false)}} className={styles.modal__button}>
                    <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.1111 26.1H2.88889V10.15H23.1111M18.7778 0V2.9H7.22222V0H4.33333V2.9H2.88889C1.28556 2.9 0 4.1905 0 5.8V26.1C0 26.8691 0.304364 27.6068 0.846136 28.1506C1.38791 28.6945 2.12271 29 2.88889 29H23.1111C23.8773 29 24.6121 28.6945 25.1539 28.1506C25.6956 27.6068 26 26.8691 26 26.1V5.8C26 5.03087 25.6956 4.29325 25.1539 3.74939C24.6121 3.20553 23.8773 2.9 23.1111 2.9H21.6667V0M20.2222 15.95H13V23.2H20.2222V15.95Z"
                            fill="#D4FC07"/>
                    </svg>
                </div>
            </div>
        </div>

            <ModalMapFilters active={filtersIsActive} onClose={() => setFiltersIsActive(false)}/>
            <ModalMeets active={meetsIsActive} onClose={() => setMeetsIsActive(false)}/>
            {playgroundId != undefined && <ModalPlayground key={playgroundId} id={playgroundId} active={!!playgroundId} onClose={() => setPlaygroundId(undefined)}/>}
        </>
    );
};

export default YandexMap;

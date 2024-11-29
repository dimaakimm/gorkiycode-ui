import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.scss";
import React, {useEffect, useState} from 'react';
import {ModalMap, ModalMapProps} from "../../../molecules/ModalMap/ModalMap.tsx";
import baseStyles from "../../../molecules/ModalMap/ModalMap.module.scss";
import icon from "../../../../assets/playground-icon.svg";
import LoadChart from "../../../molecules/LoadChart/LoadChart.tsx";
import TeamList from "../../../molecules/TeamList/TeamList.tsx";
import Input from "../../../atoms/Input/Input.tsx";
import Button from "../../../atoms/Button/Button.tsx";
import {getFullPlayground} from "../../../../api/playground";
import {IPlaygroundFull} from "../../../../api/playground/types.ts";
import {putICome} from "../../../../api/event";
type ModalPlaygroundProps = Omit<ModalMapProps, "children"> & {
    id: number
};

const ModalPlayground: React.FC<ModalPlaygroundProps> = (props: ModalPlaygroundProps) => {
    const {active, onClose, id} = props;
    const [nowPlayers, setNowPlayers] = useState(0);
    const [playground, setPlayground] = useState<IPlaygroundFull>()
    const [cancelCome, setCancelCome] = useState<boolean>(false);

    function round(date: Date) {
        const newDate = new Date(date);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        newDate.setMilliseconds(0);
        return newDate;
    }

    useEffect(() => {
        const fetchPlayground = async () => {
            try {
                const temp = await getFullPlayground(id);
                console.log(temp)
                setPlayground(temp.data);
            } catch (error) {
                console.error("Error fetching playground:", error);
            }
        };
        fetchPlayground();
        console.log(playground)
    }, []);

    function iCome(){
        setCancelCome(true)
        putICome(id, round(new Date()))
    }


    return (
        <ModalMap active={active} onClose={onClose}>
            <div className={baseStyles.modal_content}
                 onMouseDown={(e) => e.stopPropagation()}>
                <div className={baseStyles.modal__header} onClick={onClose}>
                    <img src={icon}/>
                    <h2>Площадка</h2>
                </div>
                <div className={baseStyles.imgSwiper}>
                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="src/assets/mocked/event1.svg" alt="event1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/mocked/event2.svg" alt="event1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/assets/mocked/event3.svg" alt="event1"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={baseStyles.playground__status}>
                    <h2 className={baseStyles.playground__statusHeader}>
                        Состояние
                    </h2>
                    <p className={baseStyles.playground__statusValue}>
                        свободно
                    </p>
                </div>
                <LoadChart setNowPlayers={setNowPlayers} states={playground?.playgroundStateTimeDtoList}/>
                <TeamList teamMembersTotal={new Array(nowPlayers).fill(0)}/>
                <div className={baseStyles.inputsRow}>
                    <Input placeholder={"Время сбора"}/>
                    <Input placeholder={"Кол-во людей"}/>
                </div>
                <div>
                    {
                        cancelCome
                            ? <Button onClick={() => iCome()}
                                      className={[baseStyles.iWillCumBtn, baseStyles.iWillCumBtnCancel].join(" ")}
                                      type={"secondary"}>не приду :(</Button>
                            : <Button onClick={() => iCome()} className={baseStyles.iWillCumBtn} type={"secondary"}>я
                                приду!</Button>
                    }
                </div>
            </div>
        </ModalMap>

    );
};

export default ModalPlayground;

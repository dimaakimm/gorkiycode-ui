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
import {putCall, putICome} from "../../../../api/event";
import goodStar from "../../../../assets/good-star.png";
import badStar from "../../../../assets/bad-star.png";
import {passedHours} from "./mocks.ts";
import restoreIcon from "../../../../assets/restore-filter.svg"

type ModalPlaygroundProps = Omit<ModalMapProps, "children"> & {
    id: number
};

const ModalPlayground: React.FC<ModalPlaygroundProps> = (props: ModalPlaygroundProps) => {
    const {active, onClose, id} = props;
    const [nowPlayers, setNowPlayers] = useState(0);
    const [playground, setPlayground] = useState<IPlaygroundFull>()
    const [cancelCome, setCancelCome] = useState<boolean>(false);
    const [maxPeople, setMaxPeople] = useState<number>();
    const [createActive, setCreateActive] = useState<boolean>(false);
    const [peopleActive, setPeopleActive] = useState<boolean>(false);
    const [cancelActive, setCancelActive] = useState<boolean>(false);
    const [activeHour, setActiveHour] = useState<number>(0);

    const [time, setTime] = useState<number>();
    const [people, setPeople] = useState();

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
        const now = new Date()
        setCancelCome(true)

        now.setHours(activeHour, 0, 0, 0)
        putICome(id, now)
    }

    const [curMaxPlayers, setCurMaxPlayers] = useState<number>();

    function callPeople(){
        const now = new Date();
        console.log(now)
        now.setHours(time, 0, 0, 0)
        console.log(now)

        // putCall(id, now, maxPeople);
        setMaxPeople(undefined);
        setTime(undefined);
    }

    function isTimeFree(hours: number){
        if(!playground){
            return false;
        }
        return playground.playgroundStateTimeDtoList.filter(el => el.isGeneral).filter((el) =>passedHours(new Date(el.startTime)) == hours).length > 0
        // return playground.playgroundStateTimeDtoList.filter(el => el.isGeneral).filter(el =>passedHours(el.startTime) == hours).length > 0
    }

    useEffect(() => {
        if(time == undefined){
            setCancelActive(false);
            setCreateActive(false);
            setPeopleActive(false);
        } else if(!isTimeFree(time)){
            setCancelActive(false)
            setPeopleActive(true)
            if(maxPeople != undefined){
                setCreateActive(true);
            } else {
                setCreateActive(false);
            }
        } else {
            setCancelActive(true)
            setCreateActive(false)
        }
    }, [time, maxPeople]);

    return (
        <ModalMap active={active} onClose={onClose}>
            <div className={baseStyles.modal_content}
                 onMouseDown={(e) => e.stopPropagation()}>
                <div className={baseStyles.modal__header} onClick={onClose}>
                    <img width={"33px"} src={restoreIcon}/>
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
                <div className={baseStyles.info}>
                    <div className={baseStyles.infoRow__base}>
                        <div className={[baseStyles.infoRow__place, baseStyles.infoRow__el].join(" ")}>
                            Ул. Карла Маркса, 21
                        </div>
                        <div className={[baseStyles.infoRow__mark, baseStyles.infoRow__el].join(" ")}>
                            <img width="18px" src={goodStar}/>
                            <img width="18px" src={goodStar}/>
                            <img width="18px" src={goodStar}/>
                            <img width="18px" src={badStar}/>
                            <img width="18px" src={badStar}/>
                        </div>
                    </div>
                    <div className={baseStyles.infoRow__dop}>
                        {playground && playground.playgroundStateTimeDtoList.filter(el => el.isGeneral && passedHours(new Date(el.startTime))==activeHour).length==0 &&
                            <>
                                <div className={[baseStyles.infoRow__time, baseStyles.infoRow__el].join(" ")}>{activeHour}:00
                                </div>
                                <div className={[baseStyles.infoRow__people, baseStyles.infoRow__el].join(" ")}>{nowPlayers || 0}/12
                                </div>
                                <div
                                    className={[baseStyles.infoRow__sport, baseStyles.infoRow__el].join(" ")}>{playground.type}
                                </div>
                            </>}
                            </div>
                    </div>
                    <div className={baseStyles.playground__status}>
                        <h2 className={baseStyles.playground__statusHeader}>
                            Загруженность
                        </h2>
                        <p className={baseStyles.playground__statusValue}>

                        </p>
                </div>
                <LoadChart setCurMax={setCurMaxPlayers} setNowPlayers={setNowPlayers} setNowHour={setActiveHour} states={playground?.playgroundStateTimeDtoList}/>
                <TeamList hasList={nowPlayers > 0} teamMembersTotal={new Array(nowPlayers).fill(0)}/>
                <div className={baseStyles.inputsRow}>
                    <Input value={time} onChange={(e) => setTime(e.target.value ? Number(e.target.value) : undefined)} placeholder={"Время сбора"}/>
                    <Input disabled={!peopleActive} value={maxPeople} onChange={(e) => {setMaxPeople(e.target.value ? Number(e.target.value) : undefined)}} placeholder={"Кол-во людей"}/>
                </div>
                <div className={baseStyles.inputsRow}>
                    <Button disabled={!createActive} onClick={() => callPeople() } btnType={"primary"} className={baseStyles.callBtn}>объявить сбор</Button>
                    <Button disabled={!cancelActive} onClick={() => callPeople() } btnType={"primary"} className={baseStyles.cancelBtn}>отменить</Button>
                </div>
                <div>
                    {
                        cancelCome
                            ? <Button onClick={() => iCome()}
                                      className={[baseStyles.iWillCumBtn, baseStyles.iWillCumBtnCancel].join(" ")}
                                      btnType={"secondary"}>не приду :(</Button>
                            : <Button onClick={() => iCome()} className={baseStyles.iWillCumBtn} btnType={"secondary"}>я
                                приду!</Button>
                    }
                </div>
            </div>
        </ModalMap>

    );
};

export default ModalPlayground;

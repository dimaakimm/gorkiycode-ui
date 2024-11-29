import React from 'react';
import {ModalMap, ModalMapProps} from "../../../molecules/ModalMap/ModalMap.tsx";
import baseStyles from "../../../molecules/ModalMap/ModalMap.module.scss";
import icon from "../../../../assets/playground-icon.svg";
import LoadChart from "../../../molecules/LoadChart/LoadChart.tsx";
import {data} from "./mocks.ts";
import TeamList from "../../../molecules/TeamList/TeamList.tsx";
import Input from "../../../atoms/Input/Input.tsx";
import Button from "../../../atoms/Button/Button.tsx";
type ModalPlaygroundProps = Omit<ModalMapProps, "children"> & {

};

const ModalPlayground: React.FC<ModalPlaygroundProps> = (props: ModalPlaygroundProps) => {
    const {active, onClose} = props;


    return (
        <ModalMap active={active} onClose={onClose}>
            <div className={baseStyles.modal_content}
                 onMouseDown={(e) => e.stopPropagation()}>
                <div className={baseStyles.modal__header} onClick={onClose}>
                    <img src={icon}/>
                    <h2>Площадка</h2>
                </div>
                <div className={baseStyles.playground__status}>
                    <h2 className={baseStyles.playground__statusHeader}>
                        Состояние
                    </h2>
                    <p className={baseStyles.playground__statusValue}>
                        свободно
                    </p>
                </div>
                <LoadChart data={data}/>
                <TeamList teamMembersTotal={[1, 1, 1, 1, 1, 1]}/>
                <div className={baseStyles.inputsRow}>
                    <Input placeholder={"Время сбора"}/>
                    <Input placeholder={"Кол-во людей"}/>
                </div>
                <div>
                    <Button className={baseStyles.iWillCumBtn} type={"secondary"}>я приду!</Button>
                </div>
            </div>
        </ModalMap>

    );
};

export default ModalPlayground;

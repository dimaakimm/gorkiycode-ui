import React from 'react';
import {ModalMap, ModalMapProps} from "../../../molecules/ModalMap/ModalMap.tsx";
import baseStyles from "../../../molecules/ModalMap/ModalMap.module.scss";
import icon from "../../../../assets/playground-icon.svg";
import LoadChart from "../../../molecules/LoadChart/LoadChart.tsx";
import {data} from "./mocks.ts";
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
                <LoadChart data={data}/>
            </div>
        </ModalMap>

    );
};

export default ModalPlayground;


import baseStyles from "../../../molecules/ModalMap/ModalMap.module.scss";
import {ModalMapProps, ModalMap} from "../../../molecules/ModalMap/ModalMap.tsx";
import icon from "../../../../assets/filter-icon.svg"

type ModalMapFiltersProps = Omit<ModalMapProps, "children"> & {

};

const ModalMapFilters: React.FC<ModalMapFiltersProps> = (props: ModalMapFiltersProps) => {
    const {active, onClose} = props;
    return (
        <ModalMap active={active} onClose={onClose}>
            <div className={baseStyles.modal_content}
                 onMouseDown={(e) => e.stopPropagation()}>
                <div className={baseStyles.modal__header} onClick={onClose}>
                    <img src={icon}/>
                    <h2>Фильтры карты</h2>
                </div>
                <div>

                </div>
            </div>
        </ModalMap>
    );
};

export default ModalMapFilters;
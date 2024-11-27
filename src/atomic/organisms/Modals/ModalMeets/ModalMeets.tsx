import baseStyles from "../../../molecules/ModalMap/ModalMap.module.scss";
import {ModalMapProps, ModalMap} from "../../../molecules/ModalMap/ModalMap.tsx";
import icon from "../../../../assets/meets-icon.svg"
import Select from "../../../molecules/Select/Select.tsx";

type ModalMeetsProps = Omit<ModalMapProps, "children"> & {

};

const ModalMeets: React.FC<ModalMeetsProps> = (props: ModalMeetsProps) => {
    const {active, onClose} = props;
    return (
        <ModalMap active={active} onClose={onClose}>
            <div className={baseStyles.modal_content}
                 onMouseDown={(e) => e.stopPropagation()}>
                <div className={baseStyles.modal__header} onClick={onClose}>
                    <img src={icon}/>
                    <h2>Сборы</h2>
                </div>
                <div className={baseStyles.filtersRow}>
                    <Select>
                        <option>Вид спорта</option>
                        <option>Футбол</option>
                        <option>Баскетбол</option>
                        <option>Волейбол</option>
                    </Select>

                    <Select>
                        <option>Дата и время</option>
                        <option>Низкая</option>
                        <option>Средняя</option>
                        <option>Высокая</option>
                    </Select>
                </div>
                <div className={baseStyles.filtersRow}>
                    <Select>
                        <option>Уровень &#8195; подготовки</option>
                        <option>Низкий</option>
                        <option>Средний</option>
                        <option>Высокий</option>
                    </Select>

                    <Select>
                        <option>Расположение</option>
                        <option>Нижегородский район</option>
                        <option>Ленинский район</option>
                        <option>Сормовский район</option>
                    </Select>
                </div>
            </div>
        </ModalMap>
    );
};

export default ModalMeets;
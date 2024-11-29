import baseStyles from "../../../molecules/ModalMap/ModalMap.module.scss";
import {ModalMapProps, ModalMap} from "../../../molecules/ModalMap/ModalMap.tsx";
import icon from "../../../../assets/filter-icon.svg"
import Select from "../../../molecules/Select/Select.tsx";
import Button from "../../../atoms/Button/Button.tsx";
import restoreIcon from "../../../../assets/restore-filter.svg"

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
                        <option>Загруженность площадки</option>
                        <option>Низкая</option>
                        <option>Средняя</option>
                        <option>Высокая</option>
                    </Select>

                    <Select>
                        <option>Состояние площадки</option>
                        <option>Плохое</option>
                        <option>Среднее</option>
                        <option>Хорошее</option>
                    </Select>
                </div>
                <div className={baseStyles.filtersBtns}>
                    <Button type={"secondary"} className={baseStyles.filtersApplyBtn}>сохранить фильтры</Button>
                    <Button type={"primary"} className={baseStyles.filtersRestoreBtn}><img src={restoreIcon}/></Button>
                </div>
            </div>
        </ModalMap>
    );
};

export default ModalMapFilters;
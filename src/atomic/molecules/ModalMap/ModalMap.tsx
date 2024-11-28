import { CSSTransition } from "react-transition-group";
import styles from "./ModalMap.module.scss";

export interface ModalMapProps {
    active: boolean;
    onClose: () => void;
    children: string | React.JSX.Element | React.JSX.Element[];
    filesName?: string;
    guidFile?: string;
}

export function ModalMap(props: ModalMapProps) {
    const { active, onClose, children } = props;

    return (
        <CSSTransition
            in={active}
            timeout={300}
            unmountOnExit
            classNames={{
                enterActive: styles.modalEnterActive,
                enterDone: styles.modalEnterDone,
                exit: styles.modalExit,
                exitActive: styles.modalExitActive,
            }}
        >
            <div className={styles.modal} onMouseDown={onClose}>
                {children}
            </div>
        </CSSTransition>
    );
}

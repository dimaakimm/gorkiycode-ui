import React from "react";
import styles from "./Select.module.scss"
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<SelectProps> = ({ children, ...props }) => {
    return (
        <div className={styles.customSelect}>
            <select className={styles.select} {...props}>{children}</select>
        </div>
    );
};

export default Select;

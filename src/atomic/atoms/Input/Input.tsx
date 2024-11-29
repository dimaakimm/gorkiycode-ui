import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onClick?: () => void;
    type?: "primary" | "secondary";
    btnSize?: "s" | "m";
    img?: string;
}
const Input: React.FC<InputProps> = (props: InputProps) => {
    return (
        <input  {...props} className={styles.input}/>
    );
};

export default Input;

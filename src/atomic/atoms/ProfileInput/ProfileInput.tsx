import React, { useState } from "react";
import styles from "./ProfileInput.module.scss";

interface ProfileInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  defaultValue?: string;
}
const ProfileInput: React.FC<ProfileInputProps> = ({
  placeholder,
  defaultValue,
  children,
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <input
      className={styles.wrapper}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {children}
    </input>
  );
};

export default ProfileInput;

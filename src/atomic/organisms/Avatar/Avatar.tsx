import React from "react";
import styles from "./Avatar.module.scss";
interface AvatarProps {
  img?: string;
}

const Avatar: React.FC<AvatarProps> = ({ img }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src={img || "src/assets/avatar.svg"} alt="avatar" />
        </div>

        <div className={styles.downloadBtn}>
          <img src="src/assets/download.svg" alt="download" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;

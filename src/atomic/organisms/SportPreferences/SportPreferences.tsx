import React from "react";
import styles from "./SportPreferences.module.scss";
import SkillLevelCard from "../../molecules/SkillLevelCard/SkillLevelCard.tsx";

const SportPreferences = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.img}>
            <img src="src/assets/profile-green.svg" alt="profile" />
          </div>
          <div className={styles.title}>Уровень навыков</div>
        </div>
        <div className={styles.mainContent}></div>
      </div>
    </div>
  );
};

export default SportPreferences;

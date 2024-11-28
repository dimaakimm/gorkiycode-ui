import styles from "./SkillLevels.module.scss";
import SkillLevelCard from "../../molecules/SkillLevelCard/SkillLevelCard.tsx";
import React from "react";

interface SkillLevelsProps {
  activeSports: {
    sportName: string;
    level: number;
  }[];
}
const SkillLevels: React.FC<SkillLevelsProps> = ({ activeSports }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.img}>
            <img src="src/assets/profile-green.svg" alt="profile" />
          </div>
          <div className={styles.title}>Уровень навыков</div>
        </div>
        <div className={styles.mainContent}>
          {activeSports.map((sport) => (
            <SkillLevelCard key={sport.sportName} data={sport} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillLevels;

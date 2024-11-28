import React from "react";
import styles from "./SkillLevelCard.module.scss";
import classNames from "classnames";

interface SkillLevelCardProps {
  data: {
    level: number;
    img: string;
  };
}
const SkillLevelCard: React.FC<SkillLevelCardProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img
            src={data.img || "src/assets/achievement.svg"}
            alt="achievemnt"
          />
        </div>
        <div className={styles.level}>
          <div className={styles.levelBox}>
            <div
              className={classNames(
                styles.firstLevel,
                data.level > 0 ? styles.activeLevel : null,
              )}
            />
          </div>
          <div className={styles.levelBox}>
            <div
              className={classNames(
                styles.secondLevel,
                data.level > 1 ? styles.activeLevel : null,
              )}
            />
          </div>
          <div className={styles.levelBox}>
            <div
              className={classNames(
                styles.thirdLevel,
                data.level > 2 ? styles.activeLevel : null,
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillLevelCard;

import React from "react";
import styles from "./SkillLevelCard.module.scss";
import classNames from "classnames";
import { sports } from "../../../data/mockedData.ts";
interface SkillLevelCardProps {
  data: {
    sportName: string;
    level: number;
  };
}
const SkillLevelCard: React.FC<SkillLevelCardProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img
            src={sports.find((sport) => sport.title === data.sportName)?.img}
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

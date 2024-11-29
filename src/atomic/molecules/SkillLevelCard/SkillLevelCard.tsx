import React, { useState } from "react";
import styles from "./SkillLevelCard.module.scss";
import classNames from "classnames";
import { sports } from "../../../data/mockedData.ts";
import { updateSportData } from "../../../api/user";
interface SkillLevelCardProps {
  data: {
    sportName: string;
    level: number;
  };
}
const SkillLevelCard: React.FC<SkillLevelCardProps> = ({ data }) => {
  const [level, setLevel] = useState(data.level);
  const onClick = async (currentLevel: number) => {
    try {
      if (level === currentLevel) {
        return;
      }
      await updateSportData({
        sportLevel: currentLevel,
        sportName: data.sportName,
      });
      setLevel(currentLevel);
    } catch (error) {
      console.error(error);
    }
  };
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
          <div className={styles.levelBox} onClick={() => onClick(1)}>
            <div
              className={classNames(
                styles.firstLevel,
                level > 0 ? styles.activeLevel : null,
              )}
            />
          </div>
          <div className={styles.levelBox} onClick={() => onClick(2)}>
            <div
              className={classNames(
                styles.secondLevel,
                level > 1 ? styles.activeLevel : null,
              )}
            />
          </div>
          <div className={styles.levelBox} onClick={() => onClick(3)}>
            <div
              className={classNames(
                styles.thirdLevel,
                level > 2 ? styles.activeLevel : null,
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillLevelCard;

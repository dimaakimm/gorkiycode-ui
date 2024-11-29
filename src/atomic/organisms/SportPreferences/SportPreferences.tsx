import React from "react";
import styles from "./SportPreferences.module.scss";
import { sports } from "../../../data/mockedData.ts";
import { addSportData, deleteSportData } from "../../../api/user";

interface SportPreferencesProps {
  activeSports:
    | {
        sportName: string;
        level: number;
      }[]
    | undefined;
}
const SportPreferences: React.FC<SportPreferencesProps> = ({
  activeSports,
}) => {
  const checkIsActive = (sportName: string) => {
    if (!activeSports) {
      return null;
    }
    return !activeSports
      .map((activeSport) => activeSport.sportName)
      .includes(sportName);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.img}>
            <img src="src/assets/preferences.svg" alt="profile" />
          </div>
          <div className={styles.title}>Предпочтения в спорте</div>
        </div>
        <div className={styles.mainContent}>
          {sports.map((sport) => (
            <div
              className={styles.circle}
              onClick={() => {
                console.log(sport.title);
                if (!checkIsActive(sport.title)) {
                  deleteSportData({ sportName: sport.title });
                } else {
                  addSportData({ newSportName: sport.title });
                }
              }}
            >
              <img
                key={sport.title}
                src={checkIsActive(sport.title) ? sport.img : sport.activeImg}
                alt={sport.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportPreferences;

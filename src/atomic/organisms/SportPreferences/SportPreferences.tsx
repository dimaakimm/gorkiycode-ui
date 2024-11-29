import React from "react";
import styles from "./SportPreferences.module.scss";
import { sports } from "../../../data/mockedData.ts";

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
            <div className={styles.circle}>
              <img
                key={sport.title}
                src={
                  activeSports &&
                  activeSports
                    .map((activeSport) => activeSport.sportName)
                    .includes(sport.title)
                    ? sport.activeImg
                    : sport.img
                }
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

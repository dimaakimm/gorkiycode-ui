import React, { useState } from "react";
import styles from "./SportPreferences.module.scss";
import { addSportData, deleteSportData } from "../../../api/user";
import { sports } from "../../../data/mockedData.ts";

interface SportPreferencesProps {
  activeSports: ActiveArrayProps[] | [];
}

interface ActiveArrayProps {
  sportName: string;
  level: number;
}

const SportPreferences: React.FC<SportPreferencesProps> = ({
  activeSports,
}) => {
  const [activeArray, setActiveArray] = useState<ActiveArrayProps[] | []>(
    activeSports,
  );
  console.log(activeArray);

  const checkIsActive = (sportName: string) => {
    console.log(
      sportName,
      activeArray
        ? activeArray.some((sport) => sport.sportName === sportName)
        : false,
    );
    return activeArray
      ? activeArray.some((sport) => sport.sportName === sportName)
      : false;
  };
  /*const checkIsActive = (sportName: string) => {
    return activeArray ? activeArray.some((sport) => sport.sportName === sportName) : false;
  };*/

  const onClick = async (title: string) => {
    console.log(title, activeArray);
    try {
      if (checkIsActive(title)) {
        await deleteSportData({ sportName: title });
      } else {
        await addSportData({ newSportName: title });
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
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
          {sports?.map((sport) => (
            <div
              className={styles.circle}
              key={sport.title}
              onClick={() => onClick(sport.title)}
            >
              <img
                src={checkIsActive(sport.title) ? sport.activeImg : sport.img}
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

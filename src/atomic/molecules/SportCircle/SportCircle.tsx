/*
import React, { useState } from "react";
import styles from "./SportCircle.module.scss";
import { sports } from "../../../data/mockedData.ts";

const SportCircle = () => {
  const checkIsActive = (sportName: string) => {
      sportName,
      activeArray
        ? activeArray.some((sport) => sport.sportName === sportName)
        : false,
    );
    return activeArray
      ? activeArray.some((sport) => sport.sportName === sportName)
      : false;
  };
  const [isActive, setIsActive] = useState(true);
  return (
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
  );
};

export default SportCircle;
*/

import React from "react";
import styles from "./ClosestGameCard.module.scss";

interface ClosestGameCardProps {
  data: {
    date: {
      day: number | string;
      weekday: string;
    };
    game: string;
    time: string;
  };
}
const ClosestGameCard: React.FC<ClosestGameCardProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.date}>
          <div className={styles.day}>{data.date.day}</div>
          <div className={styles.weekday}>{data.date.weekday}</div>
        </div>
        <div className={styles.game}>{data.game}</div>
        <div className={styles.time}>{data.time}</div>
      </div>
    </div>
  );
};

export default ClosestGameCard;

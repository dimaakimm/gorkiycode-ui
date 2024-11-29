import React from "react";
import styles from "./EventCard.module.scss";
import { EventCardProps } from "../../../models";

const EventCard: React.FC<EventCardProps> = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
          <div className={styles.title}>ФОК «Мещерский» <br/> объявляет соревнования<br/> по футболу</div>
          <div className={styles.date}>12.02.23</div>
      </div>
    </div>
  );
};

export default EventCard;

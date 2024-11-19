import React from "react";
import styles from "./EventCard.module.scss";

interface EventCardProps {
  img: string;
  title: string;
  date: string;
}
const EventCard: React.FC<EventCardProps> = ({ img, title, date }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};

export default EventCard;

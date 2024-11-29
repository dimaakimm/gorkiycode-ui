import styles from "./CommandRequestCard.module.scss";
import { IEventData } from "../../../api/events";

interface CommandRequestCardProps {
  data: IEventData;
}
const CommandRequestCard: React.FC<CommandRequestCardProps> = ({ data }) => {
  console.log(data);
  const fullDate = data.playgroundEventInfoDto.startTime;
  const date = fullDate.slice(0, 10);
  const time = fullDate.slice(11, 16);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <img src={"src/assets/profileCircle.svg"} alt="avatar" />
            Алексей
          </div>
          <div className={styles.headerRight}>
            {data?.playgroundEventInfoDto.type}
          </div>
        </div>
        <div className={styles.mainInfo}>
          <div className={styles.dataSector}>
            <img src="src/assets/calendar-dark.svg" alt="calendar" />
            {date}
          </div>
          <div className={styles.dataSector}>
            <img src="src/assets/participants.svg" alt="participants" />
            {data?.userCount}/12
          </div>
          <div className={styles.dataSector}>
            <img src="src/assets/clock.svg" alt="time" />
            {time}
          </div>
          <div className={styles.dataSector}>
            <img src="src/assets/level.svg" alt="level" />
            {data?.level}
          </div>
        </div>
        <div className={[styles.dataSector, styles.dataPlace].join(" ")}>
          <img src="src/assets/placemark.svg" alt="location" />
          ул. {data?.playgroundEventInfoDto.street}
        </div>
      </div>
    </div>
  );
};

export default CommandRequestCard;

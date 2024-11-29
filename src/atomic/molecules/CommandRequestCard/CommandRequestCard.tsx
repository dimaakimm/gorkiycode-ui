import styles from "./CommandRequestCard.module.scss";
import { IEventData } from "../../../api/events";

const CommandRequestCard: React.FC<IEventData> = ({
  userCount,
  level,
  playgroundEventInfoDto,
}) => {
  const dateObject = new Date(playgroundEventInfoDto.startTime);
  const dayOfMonth = dateObject.getUTCDate();
  const hours = dateObject.getUTCHours();
  const minutes =
    (dateObject.getUTCMinutes() < 10 ? "0" : "") + dateObject.getUTCMinutes();
  const date = `${dayOfMonth}`;
  const time = `${hours}:${minutes}`;
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <img src={"src/assets/profileCircle.svg"} alt="avatar" />
          </div>
          <div className={styles.headerRight}>
            {playgroundEventInfoDto.type}
          </div>
        </div>
        <div className={styles.mainInfo}>
          <div className={styles.dataSector}>
            <img src="src/assets/calendar-dark.svg" alt="calendar" />
            {date}
          </div>
          <div className={styles.dataSector}>
            <img src="src/assets/clock.svg" alt="time" />
            {time}-???
          </div>
          <div className={styles.dataSector}>
            <img src="src/assets/participants.svg" alt="participants" />
            {userCount}/12
          </div>
          <div className={styles.dataSector}>
            <img src="src/assets/level.svg" alt="level" />
            {level}
          </div>
        </div>
        <div className={styles.dataSector}>
          <img src="src/assets/location.svg" alt="location" />
          {playgroundEventInfoDto.playgroundId}
        </div>
      </div>
    </div>
  );
};

export default CommandRequestCard;

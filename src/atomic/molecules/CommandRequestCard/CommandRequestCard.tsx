import styles from "./CommandRequestCard.module.scss";

interface CommandRequestCardProps {
  request: {
    owner: {
      name: string;
      img: null | string;
    };
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    participantsNumber: number;
    maxParticipantsNumber: number;
    sportType: string;
    level: string;
  };
}
const CommandRequestCard: React.FC<CommandRequestCardProps> = ({ request }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <img
              src={request.owner.img || "src/assets/profileCircle.svg"}
              alt="avatar"
            />
            {request.owner.name}
          </div>
          <div className={styles.headerRight}>{request.sportType}</div>
        </div>
        <div className={styles.mainInfo}>
          <div className={styles.date}>
            <img src="src/assets/calendar.svg" alt="calendar" />
            {request.date}
          </div>
          <div className={styles.time}>
            <img src="src/assets/clock.svg" alt="time" />
            {request.startTime}-{request.endTime}
          </div>
          <div className={styles.participants}>
            <img src="src/assets/participants.svg" alt="participants" />
            {request.participantsNumber}/{request.maxParticipantsNumber}
          </div>
          <div className={styles.level}>
            <img src="src/assets/level.svg" alt="level" />
            {request.level}
          </div>
        </div>
        <div className={styles.address}>
          <img src="src/assets/location.svg" alt="location" />
          {request.location}
        </div>
      </div>
    </div>
  );
};

export default CommandRequestCard;

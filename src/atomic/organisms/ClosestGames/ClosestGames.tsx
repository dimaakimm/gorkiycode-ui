import styles from "./ClosestGames.module.scss";
import ClosestGameCard from "../../molecules/ClosestGameCard/ClosestGameCard.tsx";

interface ClosestGamesProps {
  events: {
    type: string;
    startTime: string;
  }[];
}
const weekdays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const ClosestGames: React.FC<ClosestGamesProps> = ({ events }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.img}></div>
          <div className={styles.title}>Твои ближайшие игры</div>
        </div>
        <div className={styles.mainContent}>
          {events.map((event) => {
            const dateObject = new Date(event.startTime);
            const dayOfMonth = dateObject.getUTCDate();
            const weekdayIndex = dateObject.getUTCDay();
            const weekday = weekdays[weekdayIndex];
            const hours = dateObject.getUTCHours();
            const minutes =
              (dateObject.getUTCMinutes() < 10 ? "0" : "") +
              dateObject.getUTCMinutes();
            const time = `${hours}:${minutes}`;
            const propsObject = {
              date: {
                day: dayOfMonth,
                weekday: weekday,
              },
              game: event.type,
              time: time,
            };
            return <ClosestGameCard key={event.startTime} data={propsObject} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ClosestGames;

import styles from "./LatestEvents.module.scss";
import EventCard from "../../molecules/EventCard/EventCard.tsx";
import Button from "../../atoms/Button/Button.tsx";
import { latestEvents } from "../../../data/mockedData.ts";

const LatestEvents = () => {
  return (
    <div className={styles.events}>
      <div className={styles.header}>ПОСЛЕДНИЕ СОБЫТИЯ</div>
      <div className={styles.emptyBlock} />
      <div className={styles.container}>
        {latestEvents.map((event, i) => (
          <EventCard
            key={i}
            img={event.img}
            title={event.title}
            date={event.date}
          />
        ))}
      </div>
      <div className={styles.button}>
        <Button>смотреть больше</Button>
      </div>
    </div>
  );
};

export default LatestEvents;

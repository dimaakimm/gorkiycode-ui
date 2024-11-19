import styles from "./LatestEvents.module.scss";
import EventCard from "../../molecules/EventCard/EventCard.tsx";
import Button from "../../molecules/Button/Button.tsx";

const LatestEvents = () => {
  const latestEvents = [
    {
      img: "src/assets/mocked/event1.svg",
      title: "Latest Events",
      date: "20.11.2024",
    },
    {
      img: "src/assets/mocked/event1.svg",
      title: "Latest Events",
      date: "20.11.2024",
    },
    {
      img: "src/assets/mocked/event1.svg",
      title: "Latest Events",
      date: "20.11.2024",
    },
  ];
  return (
    <div className={styles.events}>
      <div className={styles.header}>
        <h1>Последние события</h1>
      </div>
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
        {" "}
        <Button title="смотреть больше" />
      </div>
    </div>
  );
};

export default LatestEvents;

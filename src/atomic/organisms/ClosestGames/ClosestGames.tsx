import styles from "./ClosestGames.module.scss";
import ClosestGameCard from "../../molecules/ClosestGameCard/ClosestGameCard.tsx";

const ClosestGames = () => {
  const games = [
    {
      date: {
        day: 3,
        weekday: "sn",
      },
      game: "volleyball",
      time: "12:30",
    },
    {
      date: {
        day: 3,
        weekday: "sn",
      },
      game: "volleyball",
      time: "12:30",
    },
    {
      date: {
        day: 3,
        weekday: "sn",
      },
      game: "volleyball",
      time: "12:30",
    },
    {
      date: {
        day: 3,
        weekday: "sn",
      },
      game: "volleyball",
      time: "12:30",
    },
    {
      date: {
        day: 3,
        weekday: "sn",
      },
      game: "volleyball",
      time: "12:30",
    },
    {
      date: {
        day: 3,
        weekday: "sn",
      },
      game: "volleyball",
      time: "12:30",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.img}></div>
          <div className={styles.title}>Твои ближайшие игры</div>
        </div>
        <div className={styles.mainContent}>
          {games.map((game) => (
            <ClosestGameCard data={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClosestGames;

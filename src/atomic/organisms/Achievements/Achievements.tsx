import styles from "./Achievements.module.scss";
import AchievementCard from "../../molecules/AchievementCard/AchievementCard.tsx";

const Achievements = () => {
  const achievemnts = [
    {
      title: "Занял 1-ое место по бегу",
    },
    {
      title: "Выиграл соревнование по армрестлингу",
    },
    {
      title: "Занял 1-ое место по бегу",
    },
    {
      title: "Выиграл соревнование по армрестлингу",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.img}>
            <img src="src/assets/achievements.svg" alt="achievemnts" />
          </div>
          <div className={styles.title}>Достижения</div>
        </div>
        <div className={styles.mainContent}>
          {achievemnts.map((achievemnt) => (
            <AchievementCard data={achievemnt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

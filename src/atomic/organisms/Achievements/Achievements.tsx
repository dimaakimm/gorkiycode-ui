import styles from "./Achievements.module.scss";
import AchievementCard from "../../molecules/AchievementCard/AchievementCard.tsx";
import React from "react";

interface AchievementsProps {
  achievements: string[] | undefined;
}
const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
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
          {achievements?.map((achievemnt) => (
            <AchievementCard key={achievemnt} title={achievemnt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

import React from "react";
import styles from "./AchievementCard.module.scss";
interface AchievementCardProps {
  title: string;
}
const AchievementCard: React.FC<AchievementCardProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src="src/assets/achievement.svg" alt="achievemnt" />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default AchievementCard;

import React from "react";
import styles from "./AchievementCard.module.scss";
interface AchievementCardProps {
  data: {
    title: string;
  };
}
const AchievementCard: React.FC<AchievementCardProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src="src/assets/achievement.svg" alt="achievemnt" />
        </div>
        <div className={styles.title}>{data.title}</div>
      </div>
    </div>
  );
};

export default AchievementCard;

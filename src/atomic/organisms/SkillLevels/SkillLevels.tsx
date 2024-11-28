import styles from "./SkillLevels.module.scss";
import SkillLevelCard from "../../molecules/SkillLevelCard/SkillLevelCard.tsx";

const SkillLevels = () => {
  const skillLevels = [
    {
      img: "src/assets/sports/fighting.svg",
      level: 0,
    },
    {
      img: "src/assets/sports/fighting.svg",
      level: 2,
    },
    {
      img: "src/assets/sports/tableTennis.svg",
      level: 3,
    },
    {
      img: "src/assets/sports/fighting.svg",
      level: 0,
    },
    {
      img: "src/assets/sports/fighting.svg",
      level: 2,
    },
    {
      img: "src/assets/sports/tableTennis.svg",
      level: 3,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.img}>
            <img src="src/assets/profile-green.svg" alt="profile" />
          </div>
          <div className={styles.title}>Уровень навыков</div>
        </div>
        <div className={styles.mainContent}>
          {skillLevels.map((skillLevel) => (
            <SkillLevelCard data={skillLevel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillLevels;

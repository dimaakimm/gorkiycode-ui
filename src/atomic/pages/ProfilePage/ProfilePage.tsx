import styles from "./ProfilePage.module.scss";
import Header from "../../organisms/Header/Header.tsx";
import ProfileCalendar from "../../organisms/ProfileCalendar/ProfileCalendar.tsx";
import ClosestGames from "../../organisms/ClosestGames/ClosestGames.tsx";
import Achievements from "../../organisms/Achievements/Achievements.tsx";
import Avatar from "../../organisms/Avatar/Avatar.tsx";
import ProfileInfo from "../../organisms/ProfileInfo/ProfileInfo.tsx";

const ProfilePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <div className={styles.column}>
            <Avatar />
            <ProfileInfo />
          </div>
          <div className={styles.column}>
            <Achievements />
          </div>
          <div className={styles.column}>
            <ClosestGames />
            <ProfileCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

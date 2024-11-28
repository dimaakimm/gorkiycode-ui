import styles from "./ProfileInfo.module.scss";
import ProfileInput from "../../atoms/ProfileInput/ProfileInput.tsx";
import React from "react";

interface ProfileInfoProps {
  name?: string;
  nickname?: string;
  priorityArea?: string;
}
const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, nickname }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.img}>
            <img src="src/assets/profile-green.svg" alt="profile" />
          </div>
          <div className={styles.title}>Профиль</div>
        </div>
        <div className={styles.mainContent}>
          <ProfileInput placeholder="Имя" defaultValue={name} />
          <ProfileInput placeholder="Никнейм" defaultValue={nickname} />
          <ProfileInput placeholder="Пароль"></ProfileInput>
          <ProfileInput placeholder="Приоритетный район"></ProfileInput>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

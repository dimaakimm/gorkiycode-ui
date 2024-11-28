import styles from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.img}>
            <img src="src/assets/profile-green.svg" alt="profile" />
          </div>
          <div className={styles.title}>Профиль</div>
        </div>
        <div className={styles.mainContent}></div>
      </div>
    </div>
  );
};

export default ProfileInfo;

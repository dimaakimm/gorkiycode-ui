import styles from "./ProfilePage.module.scss";
import Header from "../../organisms/Header/Header.tsx";
import Footer from "../../organisms/Footer/Footer.tsx";

const ProfilePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>profile</div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;

import React from "react";
import styles from "./ProfilePage.module.scss";
import Header from "../../organisms/Header/Header.tsx";
import Button from "../../molecules/Button/Button.tsx";
import CommandRequests from "../../organisms/CommandsRequests/CommandRequests.tsx";
import LatestEvents from "../../organisms/LatestEvents/LatestEvents.tsx";
import Footer from "../../organisms/Footer/Footer.tsx";

const ProfilePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header activeTabId={2} />
        <div className={styles.content}>content</div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;

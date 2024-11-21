import React from "react";
import styles from "./MapPage.module.scss";
import Header from "../../organisms/Header/Header.tsx";
import Footer from "../../organisms/Footer/Footer.tsx";

const MapPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header activeTabId={1} />
        <div className={styles.content}>content</div>
      </div>
      <Footer />
    </>
  );
};

export default MapPage;
import styles from "./CommandRequestsFilters.module.scss";
const CommandRequestsFilters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filterBox}>
        <div className={styles.filterTitle}>Дата</div>
        <img src="src/assets/calendar.svg" alt="calendar" />
      </div>
      <div className={styles.filterBox}>
        <div className={styles.filterTitle}>Вид спорта</div>
        <img src="src/assets/arrow-down.svg" alt="calendar" />
      </div>
    </div>
  );
};

export default CommandRequestsFilters;

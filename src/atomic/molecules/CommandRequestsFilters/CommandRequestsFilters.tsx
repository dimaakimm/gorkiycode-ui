import styles from "./CommandRequestsFilters.module.scss";
const CommandRequestsFilters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.dateFilter}>
        Дата <img src="src/assets/calendar.svg" alt="calendar" />
      </div>
      <div className={styles.sportTypeFilter}>
        {" "}
        Вид спорта <img src="src/assets/arrow-down.svg" alt="calendar" />
      </div>
    </div>
  );
};

export default CommandRequestsFilters;

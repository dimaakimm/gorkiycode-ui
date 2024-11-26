import styles from "./CommandRequests.module.scss";
import CommandRequestsFilters from "../../molecules/CommandRequestsFilters/CommandRequestsFilters.tsx";
import CommandRequestCard from "../../molecules/CommandRequestCard/CommandRequestCard.tsx";
import { commandRequests } from "../../../data/mockedData.ts";

const CommandRequests = () => {
  return (
    <div className={styles.events}>
      <div className={styles.header}>КОМАНДУ ИЩУТ</div>
      <div className={styles.emptyBlock} />

      <CommandRequestsFilters />
      <div className={styles.container}>
        {commandRequests.map((request, i) => (
          <CommandRequestCard request={request} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CommandRequests;

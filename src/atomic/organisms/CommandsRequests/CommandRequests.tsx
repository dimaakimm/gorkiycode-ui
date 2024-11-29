import styles from "./CommandRequests.module.scss";
import CommandRequestsFilters from "../../molecules/CommandRequestsFilters/CommandRequestsFilters.tsx";
import CommandRequestCard from "../../molecules/CommandRequestCard/CommandRequestCard.tsx";
import { useEffect, useState } from "react";
import { getEventData, IEventData } from "../../../api/events";

const CommandRequests = () => {
  const [eventsData, setEventsData] = useState<[] | IEventData[]>([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getEventData();
        setEventsData(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className={styles.events}>
      <div className={styles.header}>КОМАНДУ ИЩУТ</div>
      <div className={styles.emptyBlock} />

      <CommandRequestsFilters />
      <div className={styles.container}>
        {eventsData.map((request, i) => (
          <CommandRequestCard data={request} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CommandRequests;

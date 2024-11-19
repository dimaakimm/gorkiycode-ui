import styles from "./CommandRequests.module.scss";
import Button from "../../molecules/Button/Button.tsx";
import CommandRequestsFilters from "../../molecules/CommandRequestsFilters/CommandRequestsFilters.tsx";
import CommandRequestCard from "../../molecules/CommandRequestCard/CommandRequestCard.tsx";

const CommandRequests = () => {
  const commandRequests = [
    {
      owner: {
        name: "Алексей",
        img: null,
      },
      date: "22.11.2024",
      startTime: "11:00",
      endTime: "14:00",
      location: "ул. Новикова Прибоя, 4",
      participantsNumber: 2,
      maxParticipantsNumber: 12,
      sportType: "Волейбол",
      level: "Высокий",
    },
    {
      owner: {
        name: "Алексей",
        img: null,
      },
      date: "22.11.2024",
      startTime: "11:00",
      endTime: "14:00",
      location: "ул. Новикова Прибоя, 4",
      participantsNumber: 2,
      maxParticipantsNumber: 12,
      sportType: "Волейбол",
      level: "Высокий",
    },
    {
      owner: {
        name: "Алексей",
        img: null,
      },
      date: "22.11.2024",
      startTime: "11:00",
      endTime: "14:00",
      location: "ул. Новикова Прибоя, 4",
      participantsNumber: 2,
      maxParticipantsNumber: 12,
      sportType: "Волейбол",
      level: "Высокий",
    },
    {
      owner: {
        name: "Алексей",
        img: null,
      },
      date: "22.11.2024",
      startTime: "11:00",
      endTime: "14:00",
      location: "ул. Новикова Прибоя, 4",
      participantsNumber: 2,
      maxParticipantsNumber: 12,
      sportType: "Волейбол",
      level: "Высокий",
    },
    {
      owner: {
        name: "Алексей",
        img: null,
      },
      date: "22.11.2024",
      startTime: "11:00",
      endTime: "14:00",
      location: "ул. Новикова Прибоя, 4",
      participantsNumber: 2,
      maxParticipantsNumber: 12,
      sportType: "Волейбол",
      level: "Высокий",
    },
    {
      owner: {
        name: "Алексей",
        img: null,
      },
      date: "22.11.2024",
      startTime: "11:00",
      endTime: "14:00",
      location: "ул. Новикова Прибоя, 4",
      participantsNumber: 2,
      maxParticipantsNumber: 12,
      sportType: "Волейбол",
      level: "Высокий",
    },
  ];
  return (
    <div className={styles.events}>
      <div className={styles.header}>
        <h1>КОМАНДУ ИЩУТ</h1>
      </div>

      <CommandRequestsFilters />
      <div className={styles.container}>
        {commandRequests.map((request, i) => (
          <CommandRequestCard request={request} />
        ))}
      </div>
    </div>
  );
};

export default CommandRequests;

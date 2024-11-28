import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ProfileCalendar.scss";

const ProfileCalendar = () => {
  const specialDates = ["2024-11-25", "2024-11-26"]; // Определенные даты, которые нужно пометить

  const tileContent = ({ date, view }) => {
    if (specialDates.includes(date.toISOString().slice(0, 10))) {
      // Проверяем, является ли текущая дата специальной
      return (
        <div
          style={{
            backgroundColor: "yellow",
            borderRadius: "50%",
            padding: "2px",
          }}
        ></div>
      ); // Желтый круг для специальных дат
    }
    return null; // Если текущая дата не является специальной
  };
  return (
    <div className="calendar">
      <Calendar
        className="react-calendar"
        tileContent={tileContent} // Передаем функцию для отображения контента в ячейке календаря
      />
    </div>
  );
};

export default ProfileCalendar;

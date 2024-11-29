import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ProfileCalendar.scss";
import React from "react";

interface ProfileCalendarProps {
  specialDates: string[] | undefined;
}
interface DateProps {
  date: Date;
}
const ProfileCalendar: React.FC<ProfileCalendarProps> = ({ specialDates }) => {
  const tileContent: React.FC<DateProps> = ({ date }) => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);
    if (specialDates?.includes(currentDate.toISOString().slice(0, 10))) {
      return (
        <div
          style={{
            backgroundColor: "#dcff2c",
            borderRadius: "50%",
            padding: "2px",
          }}
        ></div>
      );
    }
    return null;
  };
  return (
    <div className="calendar">
      <Calendar className="react-calendar" tileContent={tileContent} />
    </div>
  );
};

export default ProfileCalendar;

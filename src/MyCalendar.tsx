import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

const events = [{ title: "Jasurbek", date: "2025-02-26" }];

const MyCalendar = () => {
  const [difference, setDifference] = useState<number>();
  const handleDateClick = (info: any) => {
    const today = new Date();
    const clickedDate = new Date(info.dateStr);
    const differenceInTime = clickedDate.getTime() - today.getTime();
    const differenceInDayes = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    setDifference(differenceInDayes);
  };
  return (
    <div className="p-5">
      <h3 className="text-center">Kunlar orasidagi farq: {difference}</h3>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventBackgroundColor="#27ae60"
      />
    </div>
  );
};

export default MyCalendar;

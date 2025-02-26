import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

const events = [{ title: "Jasurbek", date: "2025-02-26" }];

const MyCalendar = () => {
  const [difference, setDifference] = useState<number>();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const handleDateClick = (info: any) => {
    const today = new Date();
    const clickedDate = new Date(info.dateStr);
    const differenceInTime = clickedDate.getTime() - today.getTime();
    const differenceInDayes = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    setDifference(differenceInDayes);
    setSelectedDate(info.dateStr);
  };

  function selectDay(date: any) {
    let myDate = new Date(date.date);

    return myDate.toLocaleDateString("en-CA") === selectedDate ? "my-date" : "";
  }

  return (
    <div>
      <h3 className="text-center">Kunlar orasidagi farq: {difference}</h3>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventBackgroundColor="#27ae60"
        dayCellClassNames={selectDay}
      />
    </div>
  );
};

export default MyCalendar;

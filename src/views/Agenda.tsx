import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    "pt-BR": require("date-fns/locale/pt-BR"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});



function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
   

    return (
        <div className="card p-4">
            <h1>Calendar</h1>
            {/* events={allEvents} */}
            <Calendar localizer={localizer}   style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default App;
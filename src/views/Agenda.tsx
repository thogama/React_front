import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CardPesquisa from "../components/CardPesquisa";
import pt from "date-fns/locale/pt"



const locales = {
  "pt-BR": pt
}


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});



const events = [
  {
    title:"teste",
    start: new Date("2022/07/27"),
    end: new Date("2022/07/27")

  }
]






function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });


  return (
    <>
      <CardPesquisa />
      <div className="card p-4">
        <h1>Agenda de Consultas</h1>
        {/* events={allEvents} */}
        <Calendar startAccessor={"start"} endAccessor={"end"}
         events={events} culture="pt-BR" localizer={localizer} style={{ height: 500, margin: "50px" }} />
      </div>


    </>

  );
}

export default App;
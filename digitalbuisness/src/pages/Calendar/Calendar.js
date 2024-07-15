import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import useCalender from '../../store/Calendar';

const Calendar = () => {
const {currentEvents}=useCalender;

  return (
    <div className="calendar-container">
  <FullCalendar   plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin]} 
  headerToolbar={{
    left:'orev,next today',
    center:"title",
    right:"dayGridMonth,timeGridMonth,timeGridDay"
  }}
  allDaySlot={false}
  initialView="timeGridWeek"
  slotDuration={"01:00:00"}
  editable={true}
  selectable={true}
  selectMirror={true}
  dayMaxEvents={true}
  weekends={true}
  nowIndicator={true}
  initialEvents={[currentEvents]}
  />
</div>

  )

}

export default Calendar;
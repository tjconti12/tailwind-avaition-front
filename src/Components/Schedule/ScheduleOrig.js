import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import * as scheduleStyles from './Schedule.module.css';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);


const Schedule = () => {

    const [events, setEvents] = useState([
        {
            start: moment().toDate(),
            end: moment().add(1, 'days').toDate(),
            title: 'testing'
        }
    ])


    return (
        <div className={scheduleStyles.calendarContainer}>
            <Calendar 
                localizer={localizer}
                events={events}
                startAccessors="start"
                endAccessors="end"
            />
            
        </div>
    )
}

export default Schedule

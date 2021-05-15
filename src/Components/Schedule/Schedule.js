import {useState} from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import Modal from './Modal';

const groups = [{ id: 1, title: "N373AF" }, { id: 2, title: "N3285R" }, { id: 3, title: "N116EP" }, { id: 4, title: "N172L" }, { id: 5, title: "N325YZ" }]



const itemsTest = [
   
    {
        id: 1,
        group: 3,
        title: 'Unix',
        start_time: 1621058340 * 1000,
        end_time: 1621079940 * 1000
    }
]
 


const Schedule = () => {

    const [items, setItems] = useState(itemsTest);
    const [showAddEvent, setShowAddEvent] = useState(false)

    const handleAdd = () => {
        setShowAddEvent(true)
    }

    const handleClose = () => {
        setShowAddEvent(false)
    }

    return (
        <div>
            <button onClick={handleAdd}>ADD</button>
            {showAddEvent ? <Modal handleClose={handleClose} items={items} setItems={setItems}/> : <></>}
            <Timeline
                groups={groups}
                items={items}
                defaultTimeStart={moment().add(-12, 'hour')}
                defaultTimeEnd={moment().add(12, 'hour')}
                sidebarWidth={100}
                onCanvasClick={(groupId, time, e) => console.log(groupId, time), handleAdd}
            />
        </div>
    )
}

export default Schedule

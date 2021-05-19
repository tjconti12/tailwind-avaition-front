import { useState } from 'react';

import { TimePicker, DatePicker } from '@material-ui/pickers';

const Modal = ({ handleClose, items, setItems, getEvents }) => {



    const [time, setTime] = useState('');
    const [eventForm, setEventForm] = useState({
        group: '1',
        block: '1'
    })

    

    const handleEventUpdate = (e) => {
        setEventForm({...eventForm, [e.target.id]: e.target.value})
    };

    // For checking to see if current time slot is already booked
    const checkIfBetween = (start, end, min, max) => {
        return ((start >= min && start <= max) || (end >= min && end <= max))
    }

    const checkIfEventExists = (e) => {
        e.preventDefault()
        let startTime = time.unix() * 1000;
        let endTime = ((time.unix()) + (parseFloat(eventForm.block) * 3600)) * 1000;
        let currentEvents = items.filter(obj => obj.group == eventForm.group)
        let timeToCheck = [];
        currentEvents.forEach(event => timeToCheck.push([event.start_time, event.end_time]));
        
        if(timeToCheck.length === 0) {
            addEvent(startTime, endTime)
        }

        for(let i = 0; i < timeToCheck.length; i++) {
            if(checkIfBetween(startTime, endTime, timeToCheck[i][0], timeToCheck[i][1])) {
                alert('Already Booked');
                i = timeToCheck.length
            }
            if(i === timeToCheck.length - 1) {
                addEvent(startTime, endTime)
            }
        }
    }

    const addEvent = async (startTime, endTime) => {
        let previousId = items.length === 0 ? 0 : items[items.length - 1].id;
        try {
            const response = await fetch('http://localhost:8080/Events', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    "id": previousId + 1,
                    "group": parseInt(eventForm.group),
                    "title": localStorage.getItem('firstName'),
                    "start_time": startTime,
                    "end_time": endTime,
                    "username": localStorage.getItem('username')
                })
            });
            const data = await response.json();
            getEvents();
            handleClose();
        } catch (error) {
            console.error(error)
        }
        // let groupNum = null;
        // if(event.plane === 'N373AF') groupNum = 1
        // else if (event.plane === 'N3285R') groupNum = 2
        // else if (event.plane === 'N116EP') groupNum = 3
        // else if (event.plane === 'N172L') groupNum = 4
        // else if (event.plane === 'N325YZ') groupNum = 5
            
        // let newItems = items;
        // let lastId = items[items.length - 1].id;
        // newItems.push({
        //     //group, title, start, end
        //     id: lastId + 1,
        //     group: groupNum,
        //     title: "NEW",
        //     start_time: time.unix() * 1000,
        //     end_time: ((time.unix()) + (parseFloat(event.block) * 3600)) * 1000
        //     // Had to multiple by 1000 because moment returns the unix in seconds, but the scheduler takes the time in milliseconds
        // })
        // setItems(newItems)
        // handleClose()
        // console.log(items)
        // console.log(time.unix())
    }
    
    

    return (
        <div className="absolute w-9/12 h-4/6 shadow-xl border-2 border-black inset-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-white z-1000 flex flex-col justify-start items-center">
            
            <h2 className="text-6xl text-center my-10" >Reserve a Plane</h2>
            <form className="" onSubmit={(e) => checkIfEventExists(e)}>
                <div className="my-8 text-3xl">
                    <label htmlFor="plane" className="mx-4">Choose Plane</label>
                    <select name="plane" id="group" onChange={handleEventUpdate} className="border-2 border-black">
                        <option value="1">N373AF</option>
                        <option value="2">N3285R</option>
                        <option value="3">N116EP</option>
                        <option value="4">N172L</option>
                        <option value="5">N325YZ</option>
                    </select>
                </div>
                <div className="my-6 text-3xl">
                    <label htmlFor="date" className="mx-4">Date</label>
                    <DatePicker value={time} onChange={setTime} name="date" id="date" className="border-2 border-black"/>
                </div>
                <div className="my-6 text-3xl">
                    <label htmlFor="time" className="mx-4">Start Time</label>
                    <TimePicker name="time" id="time" value={time} onChange={setTime} />
                </div>
                <div className="my-6 text-3xl">
                    <label htmlFor="block" className="mx-4">Block Time</label>
                    <select name="block" id="block" className="border-2 border-black" onChange={handleEventUpdate} >
                        <option value="1">1 Hour</option>
                        <option value="1.5">1.5 Hours</option>
                        <option value="2">2 Hours</option>
                        <option value="2.5">2.5 Hours</option>
                        <option value="3">3 Hours</option>
                        <option value="3.5">3.5 Hours</option>
                        <option value="4">4 Hours</option>
                        <option value="4.5">4.5 Hours</option>
                        <option value="5">5 Hours</option>
                        <option value="5.5">5.5 Hours</option>
                        <option value="6">6 Hours</option>
                        <option value="12">Half Day</option>
                        <option value="24">Full Day</option>
                    </select>
                </div>
                <div className="flex items-center justify-center">
                    <input type="submit" className="text-3xl p-2 border-2 border-black" />
                </div>
            </form>

            <button className="absolute top-1 right-3 text-4xl w-10 h-10 flex items-center justify-center pb-2" onClick={handleClose}>x</button>
        </div>
    )
}

export default Modal

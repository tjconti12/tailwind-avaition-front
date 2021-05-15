import { useState } from 'react';
import moment from 'moment';
import { TimePicker, DatePicker } from '@material-ui/pickers';

const Modal = ({ handleClose, items, setItems }) => {



    const [time, setTime] = useState(new Date());
    const [event, setEvent] = useState({
        plane: 'N373AF',
        time: '',
        block: ''
    })

    

    const handleEventUpdate = (e) => {
        let newEvent = event
        event[e.target.name] = e.target.value
        setEvent(newEvent)
        console.log(event)
    }

    const addEvent = (e) => {
        e.preventDefault()
        let groupNum = null;
        if(event.plane === 'N373AF') groupNum = 1
        else if (event.plane === 'N3285R') groupNum = 2
        else if (event.plane === 'N116EP') groupNum = 3
        else if (event.plane === 'N172L') groupNum = 4
        else if (event.plane === 'N325YZ') groupNum = 5
            
        let newItems = items;
        let lastId = items[items.length - 1].id;
        newItems.push({
            //group, title, start, end
            id: lastId + 1,
            group: groupNum,
            title: "NEW",
            start_time: time.unix() * 1000,
            end_time: ((time.unix()) + (parseFloat(event.block) * 3600)) * 1000
            // Had to multiple by 1000 because moment returns the unix in seconds, but the scheduler takes the time in milliseconds
        })
        setItems(newItems)
        handleClose()
        console.log(items)
        console.log(time.unix())
    }
    
    

    return (
        <div className="absolute w-9/12 h-4/6 shadow-xl border-2 border-black inset-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-white z-1000 flex flex-col justify-start items-center">
            
            <h2 className="text-6xl text-center my-10" >Reserve a Plane</h2>
            <form className="" onSubmit={(e) => addEvent(e)}>
                <div className="my-8 text-3xl">
                    <label htmlFor="plane" className="mx-4">Choose Plane</label>
                    <select name="plane" id="plane" onChange={(e) => handleEventUpdate(e)} className="border-2 border-black">
                        <option value="N373AF">N373AF</option>
                        <option value="N3285R">N3285R</option>
                        <option value="N116EP">N116EP</option>
                        <option value="N172L">N172L</option>
                        <option value="N325YZ">N325YZ</option>
                    </select>
                </div>
                <div className="my-6 text-3xl">
                    <label htmlFor="date" className="mx-4">Date</label>
                    <DatePicker value={time} onChange={setTime} name="date" className="border-2 border-black"/>
                </div>
                <div className="my-6 text-3xl">
                    <label htmlFor="time" className="mx-4">Start Time</label>
                    <TimePicker name="time" value={time} onChange={setTime} />
                </div>
                <div className="my-6 text-3xl">
                    <label htmlFor="block" className="mx-4">Block Time</label>
                    <select name="block" id="block" className="border-2 border-black" onChange={(e)=> handleEventUpdate(e)} >
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

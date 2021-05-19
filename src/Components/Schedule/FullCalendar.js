import Calendar from 'react-calendar';
import './FullCalendar.css';


const FullCalendar = ({ setDateToView, handleDayClick }) => {

    

    return (
        <div className="w-screen">
            <Calendar className="m-auto mt-10" onClickDay={(value) => handleDayClick(value)}/>
        </div>
    )
}

export default FullCalendar

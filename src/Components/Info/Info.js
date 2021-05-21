import { Link } from 'react-router-dom';
import cirrus from '../../Images/N172L/N172L-Outside.png';

const Info = () => {
    return (
        <div className="flex items-center h-600">
        <div className="grid grid-cols-2">
            <div className="col-start-1 col-end-2 overflow-hidden w-11/12 flex items-center">
                <img src={cirrus} alt="" />
            </div>
            <div className="col-start-2 col-end-3 text-center">
                <h2 className="text-4xl">RENTALS MADE EASY!</h2>
                <p className="text-2xl mt-2">For a wide variety of different needs.</p>
                <p className="text-2xl">Time Building | Flight Training | Short Trips</p>
                <ul className="list-disc text-left mt-10">
                    <li className="text-2xl my-2">With such an easy scheduling system, book a plane and be in sky in no time!</li>
                    <li className="text-2xl my-2">Full day rentals available, with overnights</li>
                    <li className="text-2xl my-2">Cheaper than ownership</li>
                    <li className="text-2xl my-2">Aircraft available 24 hours a day | 7 days a week</li>
                    <li className="text-2xl my-2">Trips to grass fields and the Bahamas approved</li>
                    <li className="text-2xl my-2">Convenient online scheduling. See availability in real time</li>
                </ul>
                <Link to="/schedule"><button className="bg-black text-white w-full text-3xl py-1 mt-16">BOOK NOW</button></Link>
            </div>
        </div>
        </div>
    )
}

export default Info

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
                <h2 className="text-4xl">EASY AIRPLANE RENTAL!</h2>
                <p className="text-2xl mt-2">Airplane rental made easy for your everyday airplane needs.</p>
                <p className="text-2xl">Time Building | Flight Training | Short Trips</p>
                <ul className="list-disc text-left mt-10">
                    <li className="text-2xl my-2">Aircraft rental so easy, you will feel like you own them</li>
                    <li className="text-2xl my-2">We allow overnights, with very low minimum fee's</li>
                    <li className="text-2xl my-2">Cost efficient airplane rental</li>
                    <li className="text-2xl my-2">Airplays available 24 hours a day | 7 days a week</li>
                    <li className="text-2xl my-2">We allow and support trips to the Bahamas</li>
                    <li className="text-2xl my-2">Convenient online scheduling, payment and account management</li>
                </ul>
                <Link to="/schedule"><button className="bg-black text-white w-full text-3xl py-1 mt-16">BOOK NOW</button></Link>
            </div>
        </div>
        </div>
    )
}

export default Info

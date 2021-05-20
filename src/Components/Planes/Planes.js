import { Link } from 'react-router-dom';
import N116EP from '../../Images/N116EP/N116EP-Outside.png';
import N172L from '../../Images/N172L/N172L-Outside.png';
import N325YZ from '../../Images/N325YZ/N325YZ-Outside.png';
import N373AF from '../../Images/N373AF/N373AF-Outside.png';
import N3285R from '../../Images/N3285R/N3285R-Outside.png';

const Planes = () => {
    return (
        <div>
            <h2 className="text-6xl text-center mb-10">Our Aircraft</h2>
            <div className="flex flex-wrap justify-evenly content-evenly">
                <Link to="/Planes/N116EP">
                    <div className="relative my-10 cursor-pointer">
                        <div className="absolute top-0 bg-gray-500 bg-opacity-50 hover:bg-opacity-0 w-full h-full">
                            <h3 className="text-6xl text-center pt-36 text-white w-full h-full hover:text-opacity-0">N116EP</h3>
                        </div>
                        <div className="max-w-4xl">
                            <img className="w-full" src={N116EP} alt="Airplane N116EP" />
                        </div>
                    </div>
                </Link>
                <Link to="/Planes/N172L">
                    <div className="relative my-10 cursor-pointer">
                        <div className="absolute top-0 bg-gray-500 bg-opacity-50 hover:bg-opacity-0 w-full h-full">
                            <h3 className="text-6xl text-center pt-36 text-white w-full h-full hover:text-opacity-0">N172L</h3>
                        </div>
                        <div className="max-w-4xl">
                            <img className="w-full" src={N172L} alt="Airplane N172L" />
                        </div>
                    </div>
                </Link>
                <Link to="/Planes/N325YZ">
                    <div className="relative my-10">
                        <div className="absolute top-0 bg-gray-500 bg-opacity-50 hover:bg-opacity-0 w-full h-full">
                            <h3 className="text-6xl text-center pt-36 text-white w-full h-full hover:text-opacity-0">N325YZ</h3>
                        </div>
                        <div className="max-w-4xl">
                            <img className="w-full" src={N325YZ} alt="Airplane N325YZ" />
                        </div>
                    </div>
                </Link>
                <Link to="/Planes/N373AF">
                    <div className="relative my-10">
                        <div className="absolute top-0 bg-gray-500 bg-opacity-50 hover:bg-opacity-0 w-full h-full">
                            <h3 className="text-6xl text-center pt-36 text-white w-full h-full hover:text-opacity-0">N373AF</h3>
                        </div>
                        <div className="max-w-4xl">
                            <img className="w-full" src={N373AF} alt="Airplane N373AF" />
                        </div>
                    </div>
                </Link>
                <Link to="/Planes/N3285R">
                    <div className="relative my-10">
                        <div className="absolute top-0 bg-gray-500 bg-opacity-50 hover:bg-opacity-0 w-full h-full">
                            <h3 className="text-6xl text-center pt-36 text-white w-full h-full hover:text-opacity-0">N3285R</h3>
                        </div>
                        <div className="max-w-4xl">
                            <img className="w-full" src={N3285R} alt="Airplane N3285R" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Planes

import { useState } from 'react';
import mapImg from '../../Images/MapWMarkers.png';

import LocationDetail from "./LocationDetail"

const Locations = () => {

    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedAirport, setSelectedAirport] = useState(0);

    const showDetail = () => {
        setDetailOpen(true)
    }

    const hideDetail = () => {
        setDetailOpen(false)
    }


    return (
        <div>
            <h1 className="text-center text-8xl">Locations</h1>
            <div>
                <ul className="w-screen h-14 flex justify-evenly mt-14 border-b-4 border-black">
                    <li className="text-4xl"><button onClick={() => {
                        showDetail();
                        setSelectedAirport(0)
                    }}>KORL</button></li>
                    <li className="text-4xl"><button onClick={() => {
                        showDetail();
                        setSelectedAirport(1)
                    }}>KSFB</button></li>
                    <li className="text-4xl"><button onClick={() => {
                        showDetail();
                        setSelectedAirport(2)
                    }}>KVDF</button></li>
                    <li className="text-4xl"><button onClick={() => {
                        showDetail();
                        setSelectedAirport(3)
                    }}>KSPG</button></li>
                </ul>
                <div className="m-auto mt-8 w-10/12">
                    <img className="max-w-full" src={mapImg} alt="map showing locations" /> 
                </div>
            </div>
            {detailOpen ? 
            <LocationDetail selectedAirport={selectedAirport} hideDetail={hideDetail}/>
            : <></>
            }
        </div>
    )
}

export default Locations

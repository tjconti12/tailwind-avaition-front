import airportInfo from './airports.json';
import { useState, useEffect} from 'react';

const LocationDetail = ({ selectedAirport, hideDetail }) => {
    
    const [weather, setWeather] = useState(null);
    const [flightCondition, setFlightCondition] = useState('IFR');

    let airport = airportInfo[selectedAirport];

    const getWeather = async () => {
        try {
            const response = await fetch(`https://avwx.rest/api/metar/${airport.code}`, {
                method: "GET",
                headers: {
                    "Authorization": `Token ${process.env.REACT_APP_AVWX_KEY}`
                }
            })
            const data = await response.json();
            setWeather(data)
            setFlightCondition(data.flight_rules)
            console.log(weather)
        } catch (error) {
            console.error(error)
        }
    }
    
    let weatherColors = {
        "backgroundColor": "red"
    }
    if(flightCondition === 'VFR') {
        weatherColors["backgroundColor"] = "green"
    } else if (flightCondition === "MVFR") {
        weatherColors["backgroundColor"] = "blue"
    } else if (flightCondition === "IFR") {
        weatherColors["backgroundColor"] = "red"
    } else if (flightCondition === "LIFR") {
        weatherColors["backgroundColor"] = "purple"
    } else {
        weatherColors["backgroundColor"] = "gray"
    }



    useEffect(() => {
        getWeather()
    }, [])

    if(weather === null) {
        return <h2>Loading</h2>
    }

    return (
        <div className="absolute w-9/12 h-4/6 shadow-xl border-2 border-black inset-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-white z-1000 overflow-y-scroll">
            <div className="flex w-full justify-center items-center">
                <h2 className="text-7xl text-center mb-10">{`${airportInfo[selectedAirport].name} (${airportInfo[selectedAirport].code})`}</h2>
                <div className="w-8 h-8 bg-green-600 rounded-full ml-10" style={weatherColors}></div>
            </div>
            <p className="text-4xl mb-6 text-center">{airportInfo[selectedAirport].address}</p>
            <div className="h-1 w-full bg-black mb-4"></div>
            <h2 className="text-6xl my-16 text-center">Current Weather at {airport.code}</h2>
            <table className="table-auto border-separate border-gray-500 border-2 m-auto">
                <tbody>
                    <tr>
                        <td className="text-2xl px-2 py-1 border border-gray-400">Airport Condition</td>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{weather.flight_rules}</td>
                    </tr>
                    <tr>
                        <td className="text-2xl px-2 py-1 border border-gray-400">Winds</td>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{weather.wind_direction.repr} @ {weather.wind_speed.repr}</td>
                    </tr>
                    <tr>
                        <td className="text-2xl px-2 py-1 border border-gray-400">Ceiling</td>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{weather.clouds.map(layer => layer.repr)}</td>
                    </tr>
                    <tr>
                        <td className="text-2xl px-2 py-1 border border-gray-400">Altimeter</td>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{weather.altimeter.repr}</td>
                    </tr>
                    <tr>
                        <td className="text-2xl px-2 py-1 border border-gray-400">Time Issued</td>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{weather.time.repr[0]}{weather.time.repr[1]}th day at {weather.time.repr[2]}{weather.time.repr[3]}{weather.time.repr[4]}{weather.time.repr[5]} zulu</td>
                    </tr>
                </tbody>
            </table>
            
            <h2 className="text-6xl text-center mt-16 mb-8">Available Aircraft</h2>
            <table className="border-separate border-gray-500 border-2 m-auto mb-24">
                <thead>
                    <tr>
                        <th className="text-3xl px-2 py-1 border border-gray-400">Tail</th>
                        <th className="text-3xl px-2 py-1 border border-gray-400">Type</th>
                        <th className="text-3xl px-2 py-1 border border-gray-400">Equipment</th>
                        <th className="text-3xl px-2 py-1 border border-gray-400">Cost</th>
                    </tr>
                </thead>
                <tbody>
                {airportInfo[selectedAirport].planes.map(plane => {
                    return(
                        <tr>
                            <td className="text-2xl px-2 py-1 border border-gray-400">{plane.tail}</td>
                            <td className="text-2xl px-2 py-1 border border-gray-400">{plane.type}</td>
                            <td className="text-2xl px-2 py-1 border border-gray-400">{plane.equipment}</td>
                            <td className="text-2xl px-2 py-1 border border-gray-400">${plane.cost}</td>
                        </tr>
                        )   
                    })}
                </tbody>
            </table>
            
            <div className="max-w-full p-4">
                <img className="w-full" src={airportInfo[selectedAirport].photo} />
            </div>
            <button className="fixed top-2 right-2 text-2xl" onClick={hideDetail}>X</button>
        </div>
    )
}

export default LocationDetail


// flex flex-col justify-start items-center



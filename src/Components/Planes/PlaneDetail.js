import { Link } from "react-router-dom";
import { useParams } from "react-router";
import planeData from './Planes.json';

const PlaneDetail = () => {
    let id = useParams();
    console.log(id.Tail)
    let chosenPlane = planeData.find(plane => plane.tail === id.Tail);
    
    return (
        <div>
            <Link to="/Planes"><button className="text-3xl bg-blue-500 text-white px-3 rounded-2xl">BACK</button></Link>
            <table class="table-auto m-auto">
                <thead>
                    <tr>
                        <th className="text-3xl px-2 py-1 border border-gray-400">Tail</th>
                        <th className="text-3xl px-2 py-1 border border-gray-400">Type</th>
                        <th className="text-3xl px-2 py-1 border border-gray-400">Location</th>
                        <th className="text-3xl px-2 py-1 border border-gray-400">Equipment</th>
                        <th className="text-3xl px-2 py-1 border border-gray-400">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{chosenPlane.tail}</td>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{chosenPlane.type}</td>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{chosenPlane.airport}</td>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{chosenPlane.equipment}</td>
                        <td className="text-2xl px-2 py-1 border border-gray-400">{chosenPlane.cost}</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="text-6xl text-center mt-24">Photos</h2>
            {chosenPlane.photos.map(photo => {
                return (
                    <div className="w-2/4 m-auto my-10">
                        <img className="w-full" src={photo} alt="example of plane" />
                    </div>
                )
            })}
            
        </div>
    )
}

export default PlaneDetail

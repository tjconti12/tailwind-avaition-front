
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-screen flex justify-between">
            <ul className="flex">
                <li className="m-5"><Link to="/">Home</Link></li>
                <li className="m-5">About</li>
                <li className="m-5">Locations</li>
                <li className="m-5"><Link to="/schedule" >Schedule</Link></li>
                <li className="m-5">Reviews</li>
                <li className="m-5">Contact Us</li>
            </ul>
            <div className="flex">
                <i class="far fa-envelope m-5"></i>
                <i class="fab fa-facebook-f m-5"></i>
                <i class="fas fa-phone-alt m-5"></i>
                <i class="fas fa-search m-5"></i>
            </div>
        </nav>
    )
}

export default Navbar

import { Link, useHistory } from 'react-router-dom';


const Navbar = ({ loggedIn, setLoggedIn }) => {
    const history = useHistory();

    const handleLogout = () => {
        window.localStorage.clear();
        setLoggedIn(false);
        history.push('/LogIn')
    }

    return (
        <nav className="w-screen flex justify-between w-screen">
            <ul className="flex ml-5">
                <li className="m-5"><Link to="/">Home</Link></li>
                <li className="m-5"><Link to="/Planes">Planes</Link></li>
                <li className="m-5"><Link to="/locations">Locations</Link></li>
                <li className="m-5"><Link to="/schedule" >Schedule</Link></li>
                <li className="m-5">Reviews</li>
                <li className="m-5">Contact Us</li>
            </ul>
            <div className="flex items-center mr-24">
                <i class="far fa-envelope m-5"></i>
                <i class="fab fa-facebook-f m-5"></i>
                <i class="fas fa-phone-alt m-5"></i>
                <i class="fas fa-search m-5"></i>
                {loggedIn ? 
                    <button onClick={handleLogout} className="m-5 w-24 text-2xl border-gray-400 border-2 hover:bg-gray-200"><Link to="/LogIn">Log Out</Link></button>
                :
                    <button className="m-5 w-24 text-2xl border-gray-400 border-2 hover:bg-gray-200"><Link to="/LogIn">Sign In</Link></button>
                }
            </div>
        </nav>
    )
}

export default Navbar

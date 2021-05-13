import * as navStyles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.ul}>
                <li className={navStyles.li}>Home</li>
                <li className={navStyles.li}>About</li>
                <li className={navStyles.li}>Locations</li>
                <li className={navStyles.li}><Link to="/schedule" >Schedule</Link></li>
                <li className={navStyles.li}>Reviews</li>
                <li className={navStyles.li}>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navbar

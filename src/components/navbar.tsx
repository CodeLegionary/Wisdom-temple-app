import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NavBarProps {
    setHomeOpen: (open: boolean) => void; // Define a function type for the prop
}

const NavBar: React.FC<NavBarProps> = ({ setHomeOpen }) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        const newOpenState = !open;
        setOpen(newOpenState); // Update Navbar state
        setHomeOpen(newOpenState); // Pass the new state to Home via prop
    };

    return (
        <div>
            <nav>
                <div className="logo">
                <h1>WISDOM Temple&nbsp;🏛️</h1>
                </div>
                {/* Dropdown menu */}
                <div>
                <ul className={open ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/reflection">Reflection</Link>
                    </li>
                    <li>
                        <Link to="/meditation">Meditation</Link>
                    </li>
                    <li>
                        <Link to="/rumination">Rumination</Link>
                    </li>
                </ul>
                </div>
                {/* Hamburger menu button */}
                <div>
                <button type="button" className="nav-btn" onClick={handleToggle}>
                    <FaAlignRight className="nav-icon" />
                </button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

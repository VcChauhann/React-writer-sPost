import { NavLink, Link } from 'react-router-dom';
import './navbar.css';
function navbar() {

    let activeStyle = {
        color: "yellow",
    };

    let activeClassName = "underline";

    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    NavBar
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <NavLink
                    to="dashBoard"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    DashBoard
                </NavLink>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                    Home
                </NavLink>
            </div>
        </div>
    )
}

export default navbar;
import { NavLink } from "react-router-dom";
import "../css/PageNav.css";
import Logo from "./header/Logo";
import GetStarter from "./header/GetStarter";

function PageNav() {
    return (
        <nav className="header">
            <Logo />
            <ul className="main-nav-list">
                <li className="main-nav">
                    <NavLink className="main-nav-list" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="main-nav">
                    <NavLink className="main-nav-list" to="/Portfolio">
                        Portfolio
                    </NavLink>
                </li>
                <li className="main-nav">
                    <NavLink className="main-nav-list" to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li className="main-nav">
                    <NavLink className="main-nav-list" to="/pages">
                        Pages
                    </NavLink>
                </li>
            </ul>

            <GetStarter />
        </nav>
    );
}

export default PageNav;

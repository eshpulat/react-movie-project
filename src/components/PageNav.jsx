import { NavLink } from "react-router-dom";
import "../css/PageNav.css";
import Logo from "./header/Logo";

function PageNav() {
    return (
        <nav className="header">
            <Logo />
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/pages">Pages</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;

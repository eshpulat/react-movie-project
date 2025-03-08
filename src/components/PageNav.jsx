import { NavLink } from "react-router-dom";

function PageNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/logo">Logo</NavLink>
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

import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/">
            <img src="./Logo.png" alt="Movie-logo" />
        </Link>
    );
}

export default Logo;

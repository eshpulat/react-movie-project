import { Link } from "react-router-dom";
import "../../css/GetStarter.css";
import "../../css/PageNav.css";

function GetStarter() {
    return (
        <Link className="btn-nav main-nav-list" to="/login">
            Get Starter
        </Link>
    );
}

export default GetStarter;

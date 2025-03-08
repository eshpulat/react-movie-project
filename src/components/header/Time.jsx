import "../css/header.css";

return (
    <header>
        <nav className="header">
            <a href="#">
                <img
                    src="/assats/logo/downlode.png"
                    alt="Move logo"
                    class="logo"
                />
            </a>
            <nav>
                <ul className="main-nav-list">
                    <li className="main-nav">
                        <a className="main-nav-list" href="#">
                            Home
                        </a>
                        <ion-icon
                            className="nav-icon"
                            name="chevron-down-outline"
                        ></ion-icon>
                    </li>
                    <li className="main-nav">
                        <a class="main-nav-list" href="#">
                            Pages
                        </a>
                        <ion-icon
                            className="nav-icon"
                            name="chevron-down-outline"
                        ></ion-icon>
                    </li>
                    <li className="main-nav">
                        <a className="main-nav-list" href="#">
                            Blog
                        </a>
                        <ion-icon
                            className="nav-icon"
                            name="chevron-down-outline"
                        ></ion-icon>
                    </li>
                    <li className="main-nav">
                        <a class="main-nav-list" href="#">
                            Portfolio
                        </a>
                        <ion-icon
                            className="nav-icon"
                            name="chevron-down-outline"
                        ></ion-icon>
                    </li>
                    <li className="main-nav">
                        <a className="main-nav-list btn-nav" href="#">
                            Get Started
                        </a>
                    </li>
                </ul>
            </nav>
        </nav>
    </header>
);

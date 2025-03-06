// import styles from "../css/Header.module.css";
// className={styles.header}

function Header() {
    return (
        <header>
            <nav>
                <a href="#">
                    <img src="img/Logo.svg" alt="Move logo" class="logo" />
                </a>
                <nav>
                    <ul class="main-nav-list">
                        <li class="main-nav">
                            <a class="main-nav-list" href="#">
                                Home
                            </a>
                            <ion-icon
                                class="nav-icon"
                                name="chevron-down-outline"
                            ></ion-icon>
                        </li>
                        <li class="main-nav">
                            <a class="main-nav-list" href="#">
                                Pages
                            </a>
                            <ion-icon
                                class="nav-icon"
                                name="chevron-down-outline"
                            ></ion-icon>
                        </li>
                        <li class="main-nav">
                            <a class="main-nav-list" href="#">
                                Blog
                            </a>
                            <ion-icon
                                class="nav-icon"
                                name="chevron-down-outline"
                            ></ion-icon>
                        </li>
                        <li class="main-nav">
                            <a class="main-nav-list" href="#">
                                Portfolio
                            </a>
                            <ion-icon
                                class="nav-icon"
                                name="chevron-down-outline"
                            ></ion-icon>
                        </li>
                        <li class="main-nav">
                            <a class="main-nav-list btn-nav" href="#">
                                Get Started
                            </a>
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
    );
}

export default Header;

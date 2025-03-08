import "./css/Hero.css";

function Hero() {
    return (
        <section className="section-hero">
            <div className="hero">
                <div className="hero-text-box">
                    <h1 className="hero-text">Quick payments with Move!</h1>
                    <p className="hero-dexcription">
                        Try the new fast payment system with no Commission and
                        no time to authorize payments. It is designed to help
                        you conquer new horizons!
                    </p>
                    <a href="#" className="hero-btn">
                        Get Started
                    </a>
                    <a href="#" className="hero-btn-second">
                        Get Started
                    </a>
                    <div className="hero-pay">
                        <div className="hero-pay-icon">
                            <ion-icon
                                className="hero-icon"
                                name="logo-apple"
                            ></ion-icon>
                            <ion-icon
                                className="hero-icon"
                                name="logo-google"
                            ></ion-icon>
                        </div>
                        <p className="icon-text">
                            Compatible with Google Pay and Apple Pay.
                        </p>
                    </div>
                </div>
                <div className="hero-img-box">
                    <img
                        className="hero-img"
                        src="./Image-32.png"
                        alt="women pictures"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;

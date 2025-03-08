import "./css/Transaction.css";

function Transation() {
    return (
        <section className="section-transation">
            <div className="main-transaction">
                <div className="step-img-box">
                    <img
                        src="./Image-13.png"
                        alt="Phone pictures"
                        className="transaction-img"
                    />
                </div>
                <div className="step-text-box">
                    <h2 className="transaction-title">
                        All transactions are at hand!
                    </h2>
                    <p className="transaction-text">
                        Try to control your expenses directly from our app! You
                        will see that it is very easy and convenient!
                    </p>
                    <div className="icon-text">
                        <div>
                            <img
                                src="./chart-pie.png"
                                alt="Chart pie icon"
                                className="transaction-icon"
                            />
                        </div>
                        <div>
                            <p className="icon-title">
                                Set limits on spending per month
                            </p>
                            <p className="icon-text">
                                Don't want to spend a lot and calculate your
                                budget? Don't worry, you can limit your monthly
                                expenses in our app!
                            </p>
                        </div>
                    </div>
                    <div className="icon-text">
                        <div>
                            <img
                                src="./sale-1.png"
                                alt="Sale icon"
                                className="transaction-icon second"
                            />
                        </div>
                        <div>
                            <p className="icon-title">
                                Close cooperation with Payonpie
                            </p>
                            <p className="icon-text">
                                You can get profitable applications from the
                                global payment system Payonpie and receive
                                increased cashback from purchases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-transaction">
                <div className="step-text-box">
                    <h2 className="transaction-title">
                        Transfer as much as you want!
                    </h2>
                    <p className="transaction-text">
                        When using our banking service you can transfer money to
                        your loved ones without commission and without
                        restrictions.
                    </p>
                    <div className="icon-text-second">
                        <div>
                            <img
                                src="./american-express.png"
                                alt="Chart pie icon"
                                className="payment-typ"
                            />
                        </div>
                        <div>
                            <img
                                src="./paypal.png"
                                alt="Chart pie icon"
                                className="payment-typ"
                            />
                        </div>
                    </div>
                    <div className="icon-text-second">
                        <div className="logo-box">
                            <img
                                src="./visa.png"
                                alt="Chart pie icon"
                                className="payment-typ"
                            />
                        </div>
                        <div className="logo-box">
                            <img
                                src="./mastercard.png"
                                alt="Chart pie icon"
                                className="payment-typ"
                            />
                        </div>
                    </div>
                    <div className="all-futures">
                        <a href="#" class="link">
                            See all features &rarr;
                        </a>
                    </div>
                </div>
                <div className="step-img-box">
                    <img
                        src="./man-in-brown-jacket-standing-near-table-3184408.png"
                        alt="Phone pictures"
                        className="transaction-img"
                    />
                </div>
            </div>
            <div className="main-transaction">
                <div className="step-img-box">
                    <img
                        src="./Card-12.png"
                        alt="Phone pictures"
                        className="transaction-img"
                    />
                </div>
                <div className="step-text-box">
                    <h2 className="transaction-title">
                        Nothing will be hidden from you!
                    </h2>
                    <p className="transaction-text">
                        You can track all transactions in special statistics
                        that will show the ratio of spending to your account
                        balance.
                    </p>
                    <div className="icon-text">
                        <div>
                            <img
                                src="./chart-bar-1.png"
                                alt="Chart pie icon"
                                className="transaction-icon icon--3"
                            />
                        </div>
                        <div>
                            <p className="icon-title">
                                Take control of your spending
                            </p>
                            <p className="icon-text">
                                All operations that you perform through the
                                selected card are automatically entered in
                                statistics.
                            </p>
                        </div>
                    </div>
                    <div className="icon-text">
                        <div>
                            <img
                                src="./shield-check.png"
                                alt="Sale icon"
                                className="transaction-icon icon--4"
                            />
                        </div>
                        <div>
                            <p className="icon-title">
                                Set goals and achieve them
                            </p>
                            <p className="icon-text">
                                In the app, you can set priority goals for
                                yourself or save for something by saving a
                                little bit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Transation;

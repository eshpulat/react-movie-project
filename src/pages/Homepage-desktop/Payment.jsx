import "./css/Payment.css";

function Payment() {
    return (
        <section className="section-payment">
            <div className="payment-container">
                <div className="payment-itams--1">
                    <div className="payment-itam">
                        <img
                            src="./credit-card.png"
                            alt="Credit Card"
                            className="credit-card-icon icon--1"
                        />
                        <p className="payment-title">Transfers without a fee</p>
                        <p className="payment-text">
                            You can transfer money to your relatives and friends
                            to accounts in other banks without сommission.
                        </p>
                    </div>
                    <div className="payment-itam">
                        <img
                            src="./bag-2.png"
                            alt="Bag Icon"
                            className="credit-card-icon icon--2"
                        />
                        <p className="payment-title">Pay anywhere</p>
                        <p className="payment-text">
                            Our payment system cooperates with many services and
                            stores so we you can safely use our payment system.
                        </p>
                    </div>
                </div>
                <div className="payment-itams--1">
                    <div className="payment-itam secont-itom">
                        <img
                            src="./wallet-3.png"
                            alt="Wallet Icon"
                            className="credit-card-icon icon--3"
                        />
                        <p className="payment-title">Increased cashback</p>
                        <p className="payment-text">
                            Each month you are presented with a choice of 3
                            categories of products with increased cashback
                            choose wisely.
                        </p>
                    </div>
                    <div className="payment-itam secont-itom">
                        <img
                            src="./settings (1).png"
                            alt="Path Icon"
                            className="credit-card-icon icon--4"
                        />
                        <p className="payment-title">Free debit card service</p>
                        <p className="payment-text">
                            If you have more than $500 on your card, the card
                            service will cost you free of charge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Payment;

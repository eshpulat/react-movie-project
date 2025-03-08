import PageNav from "../../components/PageNav";
import Future from "./Future";
import Hero from "./Hero";
import Payment from "./Payment";
import Transation from "./Transation";

function HomepageDesktop() {
    return (
        <div>
            <PageNav />
            <Hero />
            <Future />
            <Payment />
            <Transation />
        </div>
    );
}

export default HomepageDesktop;

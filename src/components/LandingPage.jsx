import React from "react";
import {
    Banner,
    Partners,
    Footer,
    Nav,
    EventListItem,
    EventList
} from "./index.js";
import "./styles/mainStyles.scss";


export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landingPage">
                <Nav />
                <Banner />
                <EventList />
                <Partners />
                <Footer />
            </div>
        );
    }
}

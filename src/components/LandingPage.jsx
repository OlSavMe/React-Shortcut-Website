import React from "react";
import {
    Banner,
    Partners,
    Footer,
    Nav
} from "./index.js";
import "./styles/mainStyles.scss";

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="landingPage">
                <Nav />
                <Banner />

                <Partners />
                <Footer />
            </div>
        );
    }
}

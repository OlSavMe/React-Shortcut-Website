import React from 'react';
import {
    Banner,
    Calendar,
    CalendarItem,
    IconFlex,
    Footer,
    Nav,
} from './index.js'


export default class LandingPage extends React.Component {
    render() {
        return (
            <div style={{ margin: '70px' }}>
                <Nav />
                <Banner />
                <Calendar />

                <IconFlex />
                <Footer />

            </div >
        )
    }
}
import React, { useState, useEffect } from 'react';

import EventListItem from './EventListItem';
import './styles/EventListStyle.scss';

export default function EventList(props) {
    const [list, setList] = useState([1, 2, 3]);





    return (

        <div className="event-list">
            <h1>Our Events</h1>

            {list.map(item => (
                <div key={item}>{
                    <EventListItem
                        count={item}
                    />
                }</div>))}

        </div>
    )
}

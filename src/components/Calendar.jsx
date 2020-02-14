import React, { useState, useEffect } from 'react';

import CalendarItem from './CalendarItem';

export default function Calendar(props) {
    const [list, setList] = useState([1, 2, 3]);





    return (

        <div className="calendarbox">
            <h1 id="calendarheader">Calendar</h1>
            <article className="maincontainer">
                {list.map(item => (
                    <div key={item}>{
                        <CalendarItem

                            count={item}
                        />
                    }</div>))}

            </article>
        </div >
    )
}


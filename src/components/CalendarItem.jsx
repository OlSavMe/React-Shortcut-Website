import React, { useState, useEffect } from 'react';
import './styles/mainStyles.scss';



export default function CalendarItem(props) {
    const [count, setCount] = useState();


    return (
        <div>
            <article className="container">
                <div className="image">
                    <img src={require('.././assets/placeholderimage.jpg')} />
                </div>
                <div className="description">
                    <h2>Activity {count}</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                aspernatur! Ad recusandae consequatur quia itaque similique. Iure
                iusto ipsam optio tenetur nemo, odio doloribus, est tempora, neque
                    adipisci nulla voluptatem.</p>
                    <button className="activitybutton">Register</button>
                </div>
            </article>
            <hr />
        </div >
    )
}


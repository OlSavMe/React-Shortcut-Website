import React, { useState, useEffect } from 'react';
import './styles/EventListItemStyle.scss';



export default function EventListItem(props) {
    const [count, setCount] = useState();


    return (
        <div className="event-list-item">
            <article>
                <div className="image">
                    <img src={require('.././assets/placeholder-image.jpg')} />
                </div>
                <div className="description">
                    <h2>Activity {count}</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                aspernatur! Ad recusandae consequatur quia itaque similique. Iure
                iusto ipsam optio tenetur nemo, odio doloribus, est tempora,  </p>
                    <button>Register</button>
                </div>
            </article>
            <hr />
        </div>
    )
}

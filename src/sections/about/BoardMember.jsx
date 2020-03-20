import React, { useEffect } from 'react';

// Stylesheets
import "./stylesheets/OurTeamStyles.scss";
import Axios from 'axios';

export default function Boardmember() {
    const [boardmembers, setBoardmembers] = React.useState([]);
    const URL =
        "https://theshortcut.org/wp-json/wp/v2/board/?per_page=100";



    useEffect(() => {
        getBoardmember(); // eslint-disable-next-line
    }, []);

    const getBoardmember = async () => {
        await Axios.get(URL)
            .then(response => {
                setBoardmembers(response.data);

            });
    };



    const reversed = [];
    const length = boardmembers.length;
    for (let i = length - 1; i >= 0; i--) {
        reversed.push(boardmembers[i]);
    }



    return (
        <div className="container">
            {reversed.map((boardmember, i) => (
                <div key={i} className="card">
                    <img src={boardmember.acf.image} alt="teammate" />
                    <div className="text">
                        <h4>{boardmember.acf.name}</h4>
                        <p>{boardmember.acf.position}</p>
                    </div>
                    <div className="social-links">
                        <a href='link'>
                            <img
                                src="https://theshortcut.org/wp-content/uploads/2019/10/email-icon-01.png"
                                alt="mail-icon"
                            ></img>
                        </a>
                        <a href={boardmember.acf.linkedin}>
                            {" "}
                            <img
                                src="https://theshortcut.org/wp-content/uploads/2019/10/linkedin-2.png"
                                alt="linkedin-icon"
                            />
                        </a>
                    </div>
                </div>))}
        </div>

    );

};

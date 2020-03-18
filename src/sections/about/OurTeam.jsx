import React, { useEffect } from 'react';
// Reusable components
import { Nav, Footer, Header } from "../../components/index.jsx";


// Stylesheets
import "./stylesheets/OurTeamStyles.scss";
import Axios from 'axios';


export default function OurTeam() {
  const [teammates, setTeammates] = React.useState([]);
  const URL =
    "https://theshortcut.org/wp-json/wp/v2/team";



  useEffect(() => {
    getTeammates(); // eslint-disable-next-line
  }, []);

  const getTeammates = async () => {
    await Axios.get(URL)
      .then(response => {
        setTeammates(response.data);

      });
  };



  const reversed = [];
  const length = teammates.length;
  for (let i = length - 1; i >= 0; i--) {
    reversed.push(teammates[i]);
  }



  return (
    <>
      <Nav />
      <main className="our-team">
        <Header
          title="Our team"
          subtitle="To get in touch with us: firstname (at) theshortcut.org"
        />
        <div className="container">
          {reversed.map((teammate, i) => (
            <div key={i} className="card">
              <img src={teammate.acf.image} alt="teammate" />
              <div className="text">
                <h4>{teammate.acf.name}</h4>
                <p>{teammate.acf.position}</p>
              </div>
              <div className="social-links">
                <a href={`mailto:${teammate.acf.email}`}>
                  <img
                    src="https://theshortcut.org/wp-content/uploads/2019/10/email-icon-01.png"
                    alt="mail-icon"
                  ></img>
                </a>
                <a href={teammate.acf.linkedin}>
                  {" "}
                  <img
                    src="https://theshortcut.org/wp-content/uploads/2019/10/linkedin-2.png"
                    alt="linkedin-icon"
                  />
                </a>
              </div>
            </div>))}
        </div>
      </main>
      <Footer />
    </>

  );

};

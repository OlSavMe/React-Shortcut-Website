import React, { useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Nav, Footer } from "../../components/index.jsx";
import css from "./FAQ.module.scss";

import Axios from "axios";

export default function FAQ() {
  const [faq, setFaq] = React.useState([]);
  const URL = "https://theshortcut.org/wp-json/wp/v2/faq/?per_page=100";

  useEffect(() => {
    getFaq();
  }, []);

  const getFaq = async () => {
    await Axios.get(URL).then((response) => {
      setFaq(response.data);
    });
  };
  console.log(faq);
  // const colors = ["F0FAF9", "F7FBFD", "FFF5F1", "FFFBF4"];
  return (
    <>
      <Nav />

      <div className={css.container}>
        <header>
          <h2>
            Frequently Asked Questions
            <br />
            <span>How can we help?</span>
          </h2>

          <div>
            <img
              src={require("../../assets/illustrations/1.png")}
              alt="illustration"
            />
          </div>
        </header>
        <Accordion className={css.accordion}>
          {faq.map((qna, i) => (
            <Card key={i} className={css.qna}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={i}
                className={css.question}
              >
                <h4>{qna.acf.question}</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={i} className={css.answer}>
                <Card.Body>
                  <p>{qna.acf.answer}</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
      <Footer />
    </>
  );
}

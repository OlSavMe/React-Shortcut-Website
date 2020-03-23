import React, { useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Nav, Header } from "../../components/index.jsx";
// Stylesheets
import "./stylesheets/FAQStyles.scss";

import Axios from "axios";

export default function FAQ() {
  const [faq, setFaq] = React.useState([]);
  const URL = "https://theshortcut.org/wp-json/wp/v2/faq/?per_page=100";

  useEffect(() => {
    getFaq();
  }, []);

  const getFaq = async () => {
    await Axios.get(URL).then(response => {
      setFaq(response.data);
    });
  };

  // const colors = ["F0FAF9", "F7FBFD", "FFF5F1", "FFFBF4"];

  return (
    <>
      <Nav />
      <main>
        <Header
          title="Frequently Asked Questions"
          subtitle="How can we help?"
        />

        <Accordion>
          {faq.map((qna, i) => (
            <Card key={i} className="qna">
              <Accordion.Toggle
                as={Card.Header}
                eventKey={i}
                className="question"
              >
                <h4>{qna.acf.question}</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={i} className="answer">
                <Card.Body>
                  <p>{qna.acf.answer}</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </main>
    </>
  );
}

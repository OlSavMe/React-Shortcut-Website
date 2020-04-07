import React, { Component } from "react";
import { Nav, Footer } from "../../components/index.jsx";
import Map from "./Map";
import css from "./Contact.module.scss";

export class Contact extends Component {
  render() {
    return (
      <>
        <Nav />
        <section className={css.form}>
          <aside>
            <h2>Get in touch</h2>
            <img
              src={require("../../assets/illustrations/form-illustration.png")}
              alt="illustration"
            />
          </aside>
          <form>
            <label for="name">Name: </label>
            <input type="text" name="name" />

            <label for="email"> Email:</label>
            <input type="email" name="email" />

            <label for="subjects">Choose subject:</label>
            <select name="subjects">
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option selected value="Three">
                Three
              </option>
              <option value="Four">Four</option>
            </select>

            <label for="message">Message:</label>
            <textarea type="message"></textarea>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </section>

        <h3 className={css.heading}>Where to find us</h3>

        <section className={css.location}>
          <div className={css.address}>
            <div className={css.inner}>
              <h4>The Shortcut Lab</h4>
              <p>
                <span>Address:</span> Maria01 (entrance 15B), Lapinlahdenkatu
                16, 00180 Helsinki
              </p>
              <p>
                <span>Phone:</span> +358 46 640 3900
              </p>
              <p>
                <span>Email:</span> info@theshortcut.org
              </p>
              <p>
                <span>Open:</span> Monday to Friday 9am - 5pm, or until the last
                event of the day is over
              </p>
            </div>
          </div>
          <div className={css.map}>
            <Map />
          </div>
        </section>

        <section className={css.icon}>
          <div>
            <img
              src={require("../../assets/icons/join-icon.png")}
              alt="illustration"
            />
          </div>
          <h3>Join our team</h3>
          <p>
            Are you smart, beautiful, sexy dare devil? <br></br>
            Come join us!{" "}
          </p>
          <a className={css.link} href="/#">
            Learn more
          </a>
        </section>

        <Footer />
      </>
    );
  }
}

export default Contact;

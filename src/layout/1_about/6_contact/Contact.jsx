import React from "react";

// Styles
import css from "./styles.module.scss";

// Children
import Map from "./Map";

const Contact = () => {
  return (
    <div className={css.container}>
      <section className={css.form}>
        <header>
          <h2>Get in touch</h2>
          <div>
            <img
              src={require("../../../assets/illustrations/7.png")}
              alt="illustration"
            />
          </div>
        </header>
        <aside>
          <div>
            <div>
              <img
                src={require("../../../assets/illustrations/7.png")}
                alt="illustration"
              />
            </div>
            <div>
              <img
                src={require("../../../assets/illustrations/5.png")}
                alt="illustration"
              />
            </div>
          </div>
        </aside>

        <form>
          <label for="name">Name: </label>
          <input type="text" name="name" />

          <label for="email"> Email:</label>
          <input type="email" name="email" />

          <label for="subjects">Choose subject:</label>
          <select name="subjects">
            <option value="One">Trainings and clubs</option>
            <option selected value="Two">
              Events and workshops
            </option>
            <option value="Three">Sales and partnerships</option>
            <option value="Four">Becoming a part of the community </option>
          </select>

          <label for="message">Message:</label>
          <textarea type="message"></textarea>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>

      <section className={css.location}>
        <div>
          <h3>Where to find us:</h3>

          <div>
            <p> The Shortcut Lab</p>
            <p>+358 46 640 3900</p>
            <p>info@theshortcut.org</p>
            <p> Maria01 (entrance 15B), Lapinlahdenkatu 16, 00180, Helsinki</p>
            <p>Open Monday &mdash; Friday, 9am &mdash; 5pm </p>{" "}
            <p>(or until the last event of the day is over)</p>
          </div>
        </div>
      </section>

      <section className={css.map}>
        <Map />
      </section>
    </div>
  );
};

export default Contact;

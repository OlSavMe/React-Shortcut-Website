import React from "react";
//import { Link } from "react-router-dom";

// Styles
import css from "./styles.module.scss";

const ForPartners = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>For partners</h2>
      </header>
      <p>
        With a robust set of Acquisition, Skill-stacking and community services,
        The Shortcut’s main objective is to scale our offering to allow partners
        to acquire the right talent, retain the best people, and expand
        employees’ skill sets to facilitate entrepreneurship, growth and
        innovation. If you are intrested in partnering with us, get in touch
        with Piia Kuosmanen.
      </p>

      <main>
        <ul>
          <li>
            <a href="#talentpool" onClick="preventDefault()">
              Talent Pool / Recruitment Service
            </a>
          </li>
          <li>
            <a href="#talentheist">Talent Heist</a>
          </li>
          <li>
            {" "}
            <a href="#startupdoers">
              Skills training, workshops <br />& webinars by Startup Doers
            </a>
          </li>
          <li>
            <a href="#techtraining">Tech Training</a>
          </li>
          <li>
            {" "}
            <a href="#mindset"> Entrepreneurial Mindset</a>
          </li>
          <li>
            <a href="#retention">Integration Success Program</a>
          </li>
        </ul>

        <div className={css.sections}>
          <section id="talentpool">
            <h3>Talent Pool / Recruitment Service</h3>
            <p>Are you recruiting? Look no further.</p>
            <p>
              The Shortcut is the largest Talent Accelerator in the Nordics. Our
              Talent Pool is made up of highly skilled professionals ranging
              from Software Developers, to Project Managers, to Digital
              Marketers (and everything in between). We’ve successfully placed
              our alumni in exciting companies like Holvi, Kodit.io, Sievo and
              many more. “[Candidate| has been an amazing asset to our team”,
              Juho Makkonen, CEO of Sharetribe.
            </p>
            <blockquote>
              [Candidate] has been an amazing asset to our team,
              <cite>Juho Makkonen, CEO of Sharetribe.</cite>
            </blockquote>
          </section>

          <section id="talentheist">
            <h3>Talent Heist</h3>
            <p>
              Are you looking for an innovative and disruptive recruitment
              solution?{" "}
            </p>
            <p>
              Talent Heist is our holistic matchmaking event that connects
              highly skilled talent to companies. It is a unique opportunity to
              diversify, bring innovative ideas to your company, and tap into
              Talent in a cost-effective way. In 2019, among others, Smartly,
              Sievo, Hoxhunt and Supermetrics successfully screened & hired
              candidates.{" "}
            </p>
            <blockquote>
              “The Talent Heist was exactly the type of creative recruitment
              event we had been looking for. We met a wide range of skilled
              candidates in a relaxed setting on day 1, and on day 2 were able
              to continue some of these conversations in a more professional
              setting. We’re considering building this event into our future
              talent pipeline!”,
              <cite> Päivi Järvenpää, Partnerships Lead, OP Labs</cite>
            </blockquote>
            <p>
              {" "}
              Are you convinced? <a href="/">Get in touch with us!</a>
            </p>
          </section>

          <section id="startupdoers">
            <h3>Skills training, workshops & webinars by Startup Doers</h3>
            <p>
              We are strong believers that knowledge is not only exchanged at
              universities or schools but also through communities. All our
              workshops and webinars are held by startup doers, highly
              successful individuals who have walked the entrepreneurial
              journey, who run startups that have turned into scale-ups.
            </p>
            <p>
              Are you looking for a creative solution to brush up your skills in
              the thematics of tech, talent and entrepreneurship?{" "}
              <a href="/">Get in touch with us!</a>{" "}
            </p>
            <blockquote>
              {" "}
              “We were co-organizer in The Shortcut’s School of Startups event.
              One of our teachers gave a workshop.[…] The Shortcut Team was well
              organised and available to answer any questions that we had. Thank
              you.”{" "}
              <cite>
                Myunggi Suh, Head of Brand & Marketing. AVP (Aalto Venture
                Program)
              </cite>
            </blockquote>
          </section>
          <section id="techtraining">
            <h3>Tech Training</h3>
            <p>
              At The Shortcut, we believe in fast hands-on learning, building
              our skills, and adaptation. We are not a school, but we do take
              learning very seriously and have been providing training since
              2016. Our goal is to provide people with the skills which are
              needed in today and in the future. From data science to full-stack
              and docker, we have usefully built training programs with
              companies such as Mozilla, Microsoft, Amazon Webservices and
              Eficode.
            </p>
          </section>

          <section id="mindset">
            <h3>Entrepreneurial Mindset</h3>
            <p>
              From Idea Development to Digital Prototyping, an entrepreneurial
              mindset is an innovation asset that each company fosters in their
              organisation. As a sister organisation to Junction & Slush, we are
              deeply rooted in the Finnish startup ecosystem. We have been
              innovative, thinking lean and disruptive since our inception. With
              our well-curated programs, we immerse our participants in the
              entrepreneurial mindset, to think big, to work for hands-on & to
              be lean!
            </p>
            <blockquote>
              At Icebreaker we understand the importance of running events like
              Digital Prototyping Week and were pleased to partner with The
              Shortcut to deliver it. Not only did we get to support some great
              business ideas but the workshop helped increase our company’s
              visibility amongst Finland’s future founders. Would highly
              recommend it.{" "}
              <cite>Mari Luukkainen, Head of Marketing. Icebreaker.vc</cite>
            </blockquote>
          </section>
          <section id="retention">
            <h3>Integration Success Program</h3>

            <p>
              When it comes to the realities of the job market, there is a very
              serious and real shortage of high-skilled workers, especially in
              the tech sector. However attraction is not the only problem,
              retention is. This is why the Shortcut started to build the
              integration success Program (ISP). The Shortcut Integration
              Success Program connects international talent, including the
              spouses of international knowledge workers, with their new, local,
              social and professional environment in a community-driven way.
            </p>
            <p>
              For the local business community, The Shortcut Integration Success
              Program improves talent retention and bridges the gap between
              businesses that need talented, skilled employees and
              highly-skilled international talent who are driven, resilient and
              ready to contribute to the Finnish labour market. The Shortcut
              Community is made up of 120 nationalities: We understand the
              social and professional integration needs of your international
              employees and their partners.
            </p>

            <p>
              “The Shortcut conceptualised and delivered a two-day workshop to
              empower participants from Supercell’s talented spouse group into
              their own entrepreneurial projects. It was a great success. The
              Team were approachable, professional and client orientated. They
              took the time to listen and accommodate all of our requests. We’re
              looking forward to collaborating with them again in the future.”
              Melanie Downer, Relocation & Onboarding, Supercell
            </p>
            <p>
              Are you looking to enhance your relocation experience & increase
              your ROI with employee retention? Get in touch with us!
            </p>
          </section>
        </div>
      </main>

      <div className={css.item}>
        <h3> Interested in partnering with us? </h3>
        <p>
          The Shortcut can benefit companies in many different ways. Piia would
          be happy to discuss about your company's needs, just send her an email
          or use our contact form below!
        </p>

        <div className={css.form}>
          <div>
            <img
              src="https://theshortcut.org/wp-content/uploads/2019/09/Our-Team-aug19_Piia-Kuosmanen.png"
              alt=""
            />
          </div>
          <form>
            <div>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
            </div>
            <select>
              <option selected value="0">
                Choose subject
              </option>
              <option value="1">Talent Pool / Recruitment Service</option>
              <option value="2">Talent Heist</option>
              <option value="3">Skills training, workshops & webinars</option>
              <option value="4">Tech Training</option>
              <option value="5">Entrepreneurial Mindset</option>
              <option value="5">Integration Success Program</option>
            </select>
            <div>
              <label for="message">
                Message:<textarea type="message"></textarea>
              </label>
            </div>
            <div>
              <div></div> <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForPartners;

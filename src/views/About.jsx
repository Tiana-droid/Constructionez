import React from "react";
import { NavBar,Footer } from "../components";
import Services from "./Services";
import { Banner, OuterNav, Content, Statement, Mission, Vision } from "./style";

const About = () => {
  return (
    <>
    <OuterNav>
      <NavBar />
    </OuterNav>

      <Banner>ABOUT US</Banner>

      <Content>
        <p>
          Welcome to our construction company! We are a team of experienced
          professionals who specialize in building and renovating high-quality
          residential and commercial properties. Our company was founded with a
          passion for delivering exceptional craftsmanship and unparalleled
          customer service.
        </p>
        <p>
          We believe that every project, no matter the size or complexity,
          deserves the utmost attention to detail and a personalized approach.
          With decades of combined experience in the construction industry, our
          team is dedicated to providing our clients with the highest quality
          workmanship and materials available. We work closely with our clients
          throughout the entire construction process, from design and planning
          to project completion, to ensure that their vision is brought to life.{" "}
        </p>
        <p>
          At our construction company, we understand that every project is
          unique, and we pride ourselves on our ability to customize our
          services to meet the specific needs and requirements of each client.
          Whether you're looking to build a new home, renovate an existing
          property, or construct a commercial building, we have the expertise
          and experience to get the job done right. We are committed to
          excellence in everything we do, and we strive to exceed our clients'
          expectations on every project. From start to finish, we provide open
          communication, transparent pricing, and a commitment to quality that
          is second to none.
        </p>

        <p>
          Thank you for considering our construction company for your next
          project. We look forward to working with you and helping you bring
          your vision to life.
        </p>
      </Content>

      <Statement>
        <Mission>
          <p>
          Our mission is to deliver exceptional craftsmanship
          and unparalleled customer service to every client, no matter the size
          or complexity of their project. We believe in a personalized approach
          that prioritizes attention to detail and open communication throughout
          the entire construction process.
          </p>
          <div className="header">Mission statement</div>
        </Mission>

        <Vision>
          <div className="header">Vision statement</div>
          <p>
          Our vision is to be a leading construction company
          that is known for its commitment to excellence in everything we do. We
          strive to exceed our clients' expectations on every project by
          providing high-quality workmanship, transparent pricing, and a
          personalized approach that is tailored to meet their specific needs
          and requirements. We aim to build long-term relationships with our
          clients and be their go-to construction company for all of their
          building and renovation needs.
          </p>
        </Vision>
      </Statement>

      <div id="services">
        <Services />
      </div>

      <Footer/>
    </>
  );
};

export default About;

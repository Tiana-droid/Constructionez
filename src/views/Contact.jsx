import React from "react";
import { NavBar, Footer } from "../components";
import { OuterNav, Banner, Form, Input, Btn } from "./style";

const Contact = () => {
  return (
    <>
      <OuterNav>
        <NavBar />
      </OuterNav>
      <Banner>
        <h2>CONTACT US</h2>
        <p>Office: No 23, O.T Lo street, Lagos, Nigeria</p>
      </Banner>
      <Form>
        <form action="/">
          <Input className="f_name">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name=""
              id="first_name"
              placeholder="Doe"
              required
            />
          </Input>
          <Input className="l_name">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name=""
              id="last_name"
              placeholder="Jon"
              required
            />
          </Input>
          <Input className="p_no">
            <label htmlFor="">Phone Number</label>
            <input
              type="tel"
              name=""
              id="phone_no"
              placeholder="08161746948"
              required
            />
          </Input>
          <Input className="mail">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="jondoe@gmail.com"
              required
            />
          </Input>
          <Input className="message">
            <label htmlFor="">Your Message</label>
            <textarea
              name=""
              id=""
              placeholder="Enter your message here..."
              required
            ></textarea>
          </Input>

          <Btn>
            <button type="submit">Submit</button>
          </Btn>
        </form>
      </Form>

      <Footer />
    </>
  );
};

export default Contact;

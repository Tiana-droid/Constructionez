import React from "react";
import Button from "../Head/Button";
import { Wrapper, Top, Bottom, List } from "./style";

const SectionOne = () => {
  return (
    <>
      <Wrapper>
        <Top className="top">
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium eligendi at ducimus qui iusto excepturi nesciunt
              laudantium soluta unde aperiam.
            </p>
              <div className="btn">
                <Button />
              </div>
          </div>

          <div className="header">
            <h2>Why choose us for the best construction experience</h2>
          </div>
        </Top>
        <Bottom className="bottom">
          <div className="img"></div>
          <List className="us">
            <ul>
              <li>
                <h1>01</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis sequi similique maxime praesentium dolorem
                  doloribus optio nesciunt quasi, dolorum quo.
                </p>
              </li>
              <li>
              <h1>02</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis sequi similique maxime praesentium dolorem
                  doloribus optio nesciunt quasi, dolorum quo.
                </p>
              </li>
              <li>
              <h1>03</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis sequi similique maxime praesentium dolorem
                  doloribus optio nesciunt quasi, dolorum quo.
                </p>
              </li>
            </ul>
          </List>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default SectionOne;

import React, { useState } from "react";
import { Details } from "./details";
import { Mission, TabContainer, TabPanel } from "../../views/style";
import {
  Container,
  MainImage,
  Content,
  Backdrop,
  PopupImg,
  Popup,
} from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaTimes } from "react-icons/fa";

const Industrial = () => {
  const industrial = Details.slice(5, 8);

  const [popUp, setPopUp] = useState(false);

  const OnClick = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      <Container>
        <h1>Industial Building Projects</h1>
        {industrial.map((industry) => {
          return (
            <Mission style={{ marginTop: "40px" }} key={industry.id}>
              <Content>
                <h1>{industry.title}</h1>
                <span>{industry.content}</span> <br />
                <button onClick={OnClick}>View Gallery</button>
              </Content>
              <MainImage>
                <img src={industry.mainImage} alt="" />
              </MainImage>

              {popUp && (
                <Backdrop>
                  <Popup>
                    <PopupImg key={industry.id}>
                      <FaTimes className="close" onClick={OnClick} />
                      <Carousel
                        showArrows={true}
                        showIndicators={false}
                        showStatus={false}
                      >
                        {industry.images.map((image, index) => {
                          return (
                            <div key={index}>
                              <p>{industry.id}</p>
                              <img
                                src={image}
                                alt={industry.title}
                              />
                            </div>
                          );
                        })}
                      </Carousel>
                    </PopupImg>
                  </Popup>
                </Backdrop>
              )}
            </Mission>
          );
        })}{" "}
        <br /> <br />
        <TabContainer>
          <TabPanel>
            <a href="/projects/resident">Resident Projects</a>
          </TabPanel>
          <TabPanel>
            <a href="/projects/industrial">Industrial Projects</a>
          </TabPanel>
          <TabPanel>
            <a href="/projects/warehouse">Warehouse Projects</a>
          </TabPanel>
        </TabContainer>
      </Container>
    </>
  );
};

export default Industrial;

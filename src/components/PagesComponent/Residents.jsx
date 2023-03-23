import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Details } from "./details";
import { Mission } from "../../views/style";
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
import { TabContainer, TabPanel } from "../../views/style";

const Residents = () => {
  var residents = Details.slice(0, 5);

  const [popUp, setPopUp] = useState(false);

  const OnClick = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      <Container>
        <h1>Resident Building Projects</h1>
        {residents.map((resident) => {
          return (
            <Mission style={{ marginTop: "40px" }} key={resident.id}>
              <Content>
                {/* <p>{resident.id}</p> */}
                <h1>{resident.title}</h1>
                <span>{resident.content}</span> <br />
                <button id={resident.id} onClick={OnClick}>View Gallery</button>
              </Content>
              <MainImage>
                <img src={resident.mainImage} alt="" />
              </MainImage>
              {popUp && (
                <Backdrop>
                  <Popup>
                    <PopupImg>
                      <FaTimes className="close" onClick={OnClick}  />
                      <Carousel
                        showArrows={true}
                        showIndicators={false}
                        showStatus={false}
                        key={resident.id}
                      >
                        {/* <p>{resident.id}</p> */}
                        <div>
                          <img src={resident.images[0]} key={resident.id} alt="" />
                        </div>
                        <div>
                          <img src={resident.images[1]} key={resident.id} alt="" />
                        </div>
                        <div>
                          <img src={resident.images[2]} key={resident.id} alt="" />
                        </div>
                      </Carousel>
                    </PopupImg>
                  </Popup>
                </Backdrop>
              )}
            </Mission>
          );
        })}
        <br /> <br />
        <TabContainer>
          <TabPanel>
            <Link to="/projects/resident">Resident Projects</Link>
          </TabPanel>
          <TabPanel>
            <Link to="/projects/industrial">Industrial Projects</Link>
          </TabPanel>
          <TabPanel>
            <Link to="/projects/warehouse">Warehouse Projects</Link>
          </TabPanel>
        </TabContainer>
      </Container>
    </>
  );
};

export default Residents;

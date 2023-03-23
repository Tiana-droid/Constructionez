import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Warehouse = () => {
  let warehouses = Details.slice(8, 10);

  const [popUp, setPopUp] = useState(false);

  const OnClick = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      <Container>
        <h1>Warehouse Building Projects</h1>
        {warehouses.map((warehouse) => {
          return (
            <Mission style={{ marginTop: "40px" }} key={warehouse.id}>
              <Content>
                <h1>{warehouse.title}</h1>
                <span>{warehouse.content}</span> <br />
                <button onClick={OnClick}>View Gallery</button>
              </Content>
              <MainImage>
                <img src={warehouse.mainImage} alt="" />
              </MainImage>

              {popUp && (
                <Backdrop>
                  <Popup>
                    <PopupImg>
                      <FaTimes className="close" onClick={OnClick} />
                      <Carousel
                        showArrows={true}
                        showIndicators={false}
                        showStatus={false}
                      >
                        <img src={warehouse.images[0]} alt="" />
                        <img src={warehouse.images[1]} alt="" />
                        <img src={warehouse.images[2]} alt="" />
                      </Carousel>
                    </PopupImg>
                  </Popup>
                </Backdrop>
              )}
            </Mission>
          );
        })}
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

export default Warehouse;

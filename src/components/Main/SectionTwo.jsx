import React from "react";
import { Link } from "react-router-dom";
import { Container, Text, Grid, GridContainer, ToolTip } from "./style";
import { FiMoreVertical } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
const SectionTwo = () => {
  return (
    <>
      <Container>
        <Text>
          <h3>Our Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero atque
            consectetur commodi quis adipisci magni dolores nemo doloribus eos
            non.
          </p>
        </Text>
        <Grid>
          <GridContainer>
            <div className="top-marker">
              <FaStar style={{ color: "#f4d55e" }} />
              <ToolTip className="tooltip">
                <FiMoreVertical
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
                <span>View More</span>
              </ToolTip>
            </div>
            <div className="main">
              <div className="pic1"></div>
              <div className="profile">
                <h3>Residential Home</h3>
                <span>over 60 projects completed</span>
              </div>
            </div>
            <div className="footer">
                <Link to="/projects/resident">View Projects</Link>
            </div>
          </GridContainer>
          <GridContainer>
            <div className="top-marker">
              <FaStar style={{ color: "#f4d55e" }} />
              <ToolTip className="tooltip">
                <FiMoreVertical
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
                <span>View More</span>
              </ToolTip>
            </div>
            <div className="main">
              <div className="pic2"></div>
              <div className="profile">
                <h3>Industrial Building</h3>
                <span>over 60 projects completed</span>
              </div>
            </div>
            <div className="footer">
                <Link to="/projects/industrial">View Projects</Link>
            </div>
          </GridContainer>
          <GridContainer>
            <div className="top-marker">
              <FaStar style={{ color: "#f4d55e" }} />
              <ToolTip className="tooltip">
                <FiMoreVertical
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
                <span>View More</span>
              </ToolTip>
            </div>
            <div className="main">
              <div className="pic3"></div>
              <div className="profile">
                <h3>Warehouse</h3>
                <span>over 60 projects completed</span>
              </div>
            </div>
            <div className="footer">
                <Link to="/projects/warehouse">View Projects</Link>
            </div>
          </GridContainer>
        </Grid>
      </Container>
    </>
  );
};

export default SectionTwo;

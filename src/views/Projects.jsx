import React, { useState } from "react";
import {
  NavBar,
  Residents,
  Industrial,
  Warehouse,
  Footer,
} from "../components";
import { OuterNav, TabContainer, TabPanel } from "./style";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("tabA");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <OuterNav>
        <NavBar />
      </OuterNav>
      <TabContainer>
        <TabPanel
          onClick={() => handleTabChange("tabA")}
          style={{
            fontWeight: activeTab === "tabA" ? "300" : "100",
            color: activeTab === "tabA" ? "#292929" : "#d3d2d2",
            borderBottom: activeTab === "tabA" ? "2px solid #18a7b6" : "0",
            height: "50px",
          }}
        >
          Residential Buildng
        </TabPanel>
        <TabPanel
          onClick={() => handleTabChange("tabB")}
          style={{
            fontWeight: activeTab === "tabB" ? "300" : "100",
            color: activeTab === "tabB" ? "#292929" : "#8f919c",
            borderBottom: activeTab === "tabB" ? "2px solid #18a7b6" : "0",
            height: "50px",
          }}
        >
          Industrial Buidings
        </TabPanel>
        <TabPanel
          onClick={() => handleTabChange("tabC")}
          style={{
            fontWeight: activeTab === "tabC" ? "300" : "100",
            color: activeTab === "tabC" ? "#292929" : "#8f919c",
            borderBottom: activeTab === "tabC" ? "2px solid #18a7b6" : "0",
            height: "50px",
          }}
        >
          Warehouses
        </TabPanel>
      </TabContainer>
      {activeTab === "tabA" && <Residents />}
      {activeTab === "tabB" && <Industrial />}
      {activeTab === "tabC" && <Warehouse />}

      <Footer />
    </>
  );
};

export default Projects;

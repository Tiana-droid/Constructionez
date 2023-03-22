import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const NavBar = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  position: sticky;
  top: 0;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-content: space-between;
  margin: auto;
  background: transparent;
  display: flex;
  align-items: center;
`;
const NavBar2 = styled(NavBar)`
  width: 96%;
  margin: auto;
  padding: 0px 6.5px;
  transition: 0.8s;
  z-index: 1;
  background-color: #18a7b6;
  border: none;
  position: fixed;

  h3,
  a,
  & .menu {
    color: white !important;
  }
  li {
    a {
      color: white !important;

      &:hover {
        padding-bottom: 4px;
        border-bottom: 2px solid #000 !important;
      }
    }
  }
`;
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleSCroll = () => {
      if (window.scrollY > 2) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleSCroll);

    return () => window.removeEventListener("scroll", handleSCroll);
  }, []);
  return (
    <>
      {sticky ? (
        <NavBar2>
          <Logo />
          <Nav />
        </NavBar2>
      ) : (
        <NavBar>
          <Logo />
          <Nav />
        </NavBar>
      )}
    </>
  );
};

export default Navbar;

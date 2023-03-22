import {React, useEffect, useState} from 'react'
import styled from 'styled-components';

const CounterCss = styled.div`
  width: 70%;
  display: flex;
  // margin: auto;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  margin-top: 20%;
  flex-wrap: wrap;

  & h4 {
    margin-block-end: 8px;
    font-size: 20px;
    text-align: center;
  }

  & span {
    color: #a4a4a4;
    font-weight: 600;
  }
`;

const Counter = () => {
    const [pCounter, setCounter] = useState(24000)

useEffect(() => {
  if (pCounter > 0 && pCounter <= 25355) {
    const interval = setInterval(() => {
      setCounter((pCounter) => pCounter + 1);
    }, 1)
    return () => {
      clearInterval(interval)
    };
  }

}, [pCounter])

const [bCounter, setBCounter] = useState(14000)

useEffect(() => {
  if (bCounter > 0 && bCounter <= 15199) {
    const interval = setInterval(() => {
      setBCounter((bCounter) => bCounter + 1);
    }, 1)
    return () => {
      clearInterval(interval)
    };
  }

}, [bCounter])

const [eCounter, setECounter] = useState(0)

useEffect(() => {
  if (eCounter >= 0 && eCounter <= 349) {
    const interval = setInterval(() => {
      setECounter((eCounter) => eCounter + 1);
    }, 10)
    return () => {
      clearInterval(interval)
    };
  }

}, [eCounter])
  return (
    <>
    <CounterCss>
                <div className="project-done">
                  <h4 style={{ color: "#fb832e" }}>{pCounter}</h4>
                  <span>Project Done</span>
                </div>
                <div className="building-done">
                  <h4 style={{ color: "#18a7b6" }}>{bCounter}</h4>
                  <span>Building Done</span>
                </div>
                <div className="total">
                  <h4 style={{ color: "#4fae2a" }}>{eCounter}+</h4>
                  <span>Total Employees</span>
                </div>
              </CounterCss>
    </>
  )
}

export default Counter
import React from "react";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { testimonies } from "./testimonies";
import { TestWrapper, OuterDiv, TestContent } from "./style";

const Testimonies = () => {
  return (
    <TestWrapper>
      <Carousel 
      interval={6000} 
      autoPlay={true} 
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      showArrows={false}
      >
        {testimonies.map((testimony) => {
          return (
            <OuterDiv key={testimony.id}>
              <div className="profile-pic">
                <img src={testimony.profilePic} alt="" />
              </div>
              <TestContent>
                <p>{testimony.content}</p>
                <h2>{testimony.name}</h2>
              </TestContent>
                <img src={testimony.star} alt="" id="star"/>
            </OuterDiv>
          );
        })}
      </Carousel>
    </TestWrapper>
  );
};

export default Testimonies;

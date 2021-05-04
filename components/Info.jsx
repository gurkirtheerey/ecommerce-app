import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ImportantInfo = styled.p`
  color: #725cff;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  padding: 0;
`;

const SecondaryParagraph = styled.p`
  text-align: center;
  color: #72788d;
  font-weight: 600;
`;

export const Info = () => {
  return (
    <Container>
      <h1>Trusted by over 5000+ innovators</h1>
      <p>
        We look forward to seeing your art and creative design change the world.
        For the better.
      </p>
      <InfoContainer>
        <div>
          <ImportantInfo>$500k+</ImportantInfo>
          <SecondaryParagraph>Revenue</SecondaryParagraph>
        </div>
        <div>
          <ImportantInfo>200+</ImportantInfo>
          <SecondaryParagraph>Products</SecondaryParagraph>
        </div>
        <div>
          <ImportantInfo>15</ImportantInfo>
          <SecondaryParagraph>Categories</SecondaryParagraph>
        </div>
        <div>
          <ImportantInfo>1</ImportantInfo>
          <SecondaryParagraph>Employee</SecondaryParagraph>
        </div>
      </InfoContainer>
    </Container>
  );
};

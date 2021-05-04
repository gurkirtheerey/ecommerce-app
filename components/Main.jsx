import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import MainContainerSVG from "./SVG/MainContainerSVG";

const MainContainer = styled.div`
  height: 40rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  background: #d5daec;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const Header = styled.h1`
  font-size: 2.7rem;
`;

const Paragraph = styled.p`
  color: #72788d;
  margin: 0.5rem 0;
`;

export const Main = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Header>Create. Inspire. Grow</Header>
        <Paragraph>
          Upload your design, art, or creation and <strong>flourish</strong>.
        </Paragraph>
        <Paragraph>
          Small businesses like you need a middle ground. Here's where we come
          in.
        </Paragraph>
        <Button title="Start Your Free Trial" />
      </LeftContainer>
      <MainContainerSVG />
    </MainContainer>
  );
};

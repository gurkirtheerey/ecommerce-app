import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: #725cff;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  max-width: 16rem;
  margin: 2rem 0;
  &:hover {
    background: #7f6cfe;
  }
`;

export const Button = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

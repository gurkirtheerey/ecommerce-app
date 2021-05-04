import React from "react";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d5daec;
  padding: 1rem;
`;

const NavLinkContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
`;

const NavigationLink = styled.span`
  font-weight: 600;
  cursor: pointer;
  padding: 1rem 2rem;
  &:hover {
    color: #6200ff;
  }
`;

const NavigationButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: #725cff;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #7f6cfe;
  }
`;

export const Navigation = () => {
  return (
    <StyledNavigation>
      <h1>Starter</h1>

      <NavLinkContainer>
        <NavigationLink>Products</NavigationLink>
        <NavigationLink>Blog</NavigationLink>
        <NavigationLink>Contact</NavigationLink>
      </NavLinkContainer>
      <div>
        <NavigationLink>Login</NavigationLink>
        <NavigationButton>Sign up</NavigationButton>
      </div>
    </StyledNavigation>
  );
};

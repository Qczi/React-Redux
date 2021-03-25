import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: yellow;
  z-index: 9999;
`;

const StyledLinkList = styled.ul`
  display: flex;
  margin-right: 100px;
  padding: 0;
  list-style: none;
`;

const StyledButton = styled(Button)`
  margin-right: 50px;
  text-decoration: none;
  color: black;
`;

const NavBar = () => (
  <StyledWrapper>
    <StyledLinkList>
      <li>
        <StyledButton as={NavLink} to="/">
          Home
        </StyledButton>
      </li>
      <li>
        <StyledButton as={NavLink} to="/notes">
          Notes
        </StyledButton>
      </li>
      <li>
        <StyledButton as={NavLink} to="/login">
          Login
        </StyledButton>
      </li>
    </StyledLinkList>
  </StyledWrapper>
);

export default NavBar;

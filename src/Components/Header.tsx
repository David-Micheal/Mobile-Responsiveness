import React from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>CODELAB.</Logo>
          <Navigation>
            <Nav>Home</Nav>
            <Nav>About</Nav>
            <Nav>Contact</Nav>
            <Nav>Services</Nav>
          </Navigation>
          <ButtonHold>
            <Button cl="white" bd="black">
              Sign-up
            </Button>
            <Button cl="white" bd="lightgreen">
              Login
            </Button>
          </ButtonHold>
        </Wrapper>
        <Menu>
          <BiMenu />
        </Menu>
      </Container>
    </div>
  );
};

export default Header;

const Menu = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    font-size: 40px;
    color: white;
  }

  @media screen and (max-width: 425px) {
    display: block;
    font-size: 40px;
    color: white;
    /* margin-right: 20px; */
    width: 300px;
  }
`;
const Container = styled.div`
  height: 70px;
  display: flex;
  background-color: coral;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    width: 300px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  margin-left: 40px;
  font-size: 35px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 425px) {
    margin-left: 20px;
    margin-right: 120px;
    font-size: 20px;
  }
`;
const Navigation = styled.div`
  display: flex;
  margin-right: 250px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Nav = styled.div`
  margin-right: 50px;
  font-size: 20px;
  color: white;
`;
const ButtonHold = styled.div`
  display: flex;
  margin-right: 20px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Button = styled.button<{ bd: string; cl: string }>`
  width: 180px;
  height: 50px;
  background-color: ${(props) => props.bd};
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  color: ${(props) => props.cl};
  font-size: 20px;
  transition: all 360ms;

  :hover {
    cursor: pointer;
    transform: scale(0.95);
    border-radius: 25px;
  }
`;

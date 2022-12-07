import React from "react";
import styled from "styled-components";
import image from "../assets/section1.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <First>
          <Text>
            The B2C & B2B
            <br />
            Growth Marketing
            <br />
            Company
          </Text>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            consectetur quas iusto veritatis possimus. Ex nihil dolorum omnis
            iure corporis eligendi. Molestiae rem, debitis incidunt alias ad
            obcaecati at nisi.
          </Desc>
          <Button cl="coral" bd="white">
            Let's grow your Company
          </Button>
        </First>
        <Second>
          <Bgimag src={image} />
        </Second>
      </Container>
    </div>
  );
};

export default Hero;

const Bgimag = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;

  @media screen and (max-width: 425px) {
    width: 300px;
    margin: 0;
  }
`;
const Button = styled.button<{ bd: string; cl: string }>`
  width: 250px;
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
  }
`;
const Text = styled.h1`
  font-size: 50px;

  @media screen and (max-width: 425px) {
    font-size: 30px;
    margin: 0;
  }
`;
const Desc = styled.p`
  width: 500px;
  font-size: 30px;
  font-weight: lighter;

  @media screen and (max-width: 425px) {
    font-size: 20px;
    width: 300px;
  }
`;
const Container = styled.div`
  background-color: coral;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;
const First = styled.div`
  @media screen and (max-width: 425px) {
    width: 300px;
  }
`;
const Second = styled.div`
  height: 500px;
  width: 500px;
  /* background-color: red; */
  @media screen and (max-width: 425px) {
    width: 300px;
    margin: 0;
  }
`;

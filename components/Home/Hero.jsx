import styled from "styled-components";
import Image from "next/image";

const HeroImage = styled.div`
  width: 100vw;
  height: 450px;
  background-image: url("/img/bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;

  @media (min-width: 1200px) {
    height: 100vh;
  }
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 23, 48, 0.6);
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
  font-family: Poppins, sans-serif;
  color: var(--white);

  h1 {
    width: 90%;
    text-align: center;
    font-size: 25px;
    margin: 0;
    padding: 0px;
    font-family: Poppins, sans-serif;
    border-radius: 5px;
    letter-spacing: 10px;
  }
  span {
    font-size: 30px;
    text-align: center;
    width: 90%;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    color: var(--orange);
  }

  @media (min-width: 768px) {
    h1 {
      width: 45%;
    }
  }

  @media (min-width: 992px) {
    h1 {
      width: 45%;
    }
    span {
      font-size: 25px;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      width: auto;
      font-size: 85px;
      margin: 0;
      padding: 0px;
      font-family: Poppins, sans-serif;
      border: none;
      color: var(--white);
      border-radius: 5px;
    }
    span {
      width: auto;
      font-size: 100px;
      text-align: left;
      letter-spacing: 10px;
      text-transform: uppercase;
      margin: 0;
      margin-bottom: -40px;
      padding: 0px;
      color: transparent;
      -webkit-text-stroke: 2px white;
    }
  }
`;

const Hero = () => {
  return (
    <HeroImage>
      <Layer>
        <Text>
          <span>Proyectamos</span>
          <h1>TUS SUEÑOS</h1>
        </Text>
      </Layer>
    </HeroImage>
  );
};

export default Hero;

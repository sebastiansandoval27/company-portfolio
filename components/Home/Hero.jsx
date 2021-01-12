import styled from "styled-components";
import Image from "next/image";

const HeroImage = styled.div`
  width: 100vw;
  height: 500px;
  background-image: url("/img/bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

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
  background-color: rgba(23, 23, 48, 0.7);
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
  color: white;

  h1 {
    width: 90%;
    text-align: center;
    font-size: 30px;
    margin: 0;
    padding: 10px 0px;
    font-family: Poppins, sans-serif;
    border: 1px solid var(--white);
    color: var(--white);
    border-radius: 5px;
    margin-top: 15px;
  }
  span {
    font-size: 20px;
    text-align: center;
    width: 90%;
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
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
    align-items: flex-start;
    justify-content: center;
    padding-left: 100px;

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
      font-size: 35px;
      text-align: left;
      letter-spacing: 10px;
      text-transform: uppercase;
      margin: 0;
      padding: 0px;
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

import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const SectionMessage = styled.section`
  width: 100%;
  height: 450px;
  background-image: url("/img/bp.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  position: relative;
  color: white;
`;

const Layer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(39, 39, 82, 0.8);
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10%;

  h2.text-title {
    font-size: 40px;
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      content: "Hablemos...";
      width: auto;
      height: auto;
      color: rgba(255, 255, 255, 0.4);
      opacity: 0.2;
      position: absolute;
      top: -20px;
      left: -15px;
    }
  }

  @media (min-width: 992px) {
    h2.text-title {
      font-size: 100px;
      -webkit-text-stroke: 1px white;
      color: transparent;

      &::before {
        color: rgba(255, 255, 255, 0.3);
        opacity: 0.1;
      }
    }
  }
`;

const Message = () => {
  return (
    <SectionMessage>
      <Layer />
      <Text>
        <h2 className="text-title">Hablemos...</h2>
      </Text>
    </SectionMessage>
  );
};

export default Message;

import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin-top: 35px;

  @media (min-width: 992px) {
    margin-top: 150px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 15%;
  font-family: Poppins, sans-serif;
  font-size: 30px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 25px;
  color: var(--blue-dark);

  @media (min-width: 1200px) {
    width: 80%;
    font-size: 40px;
    justify-content: center;
    padding: 0;
  }
`;

export const Services = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 15px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-gap: 15px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 5px;
  }

  @media (min-width: 992px) {
    margin: 50px 0px;
    width: 85%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 5px;
  }
`;

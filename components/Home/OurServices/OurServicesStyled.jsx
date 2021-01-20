import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  margin-top: 35px;

  @media (min-width: 992px) {
    margin-top: 80px;
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
    margin: 100px 0px;
    width: 85%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 5px;
  }
`;

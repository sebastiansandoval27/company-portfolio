import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  padding: 15px 10px;
  background-color: var(--blue-dark-hover);
  display: grid;
  border-top: 4px solid var(--orange-dark);
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "logo"
    "quick"
    "contact"
    "map";
  align-items: center;
  justify-items: center;

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "logo quick contact map";
    align-items: flex-start;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 20%);
    grid-template-rows: auto;
    grid-template-areas: "logo quick contact map";
    align-items: flex-start;
    justify-content: center;
  }
`;

export const QuickLinks = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-area: quick;
  padding: 10px;
  color: white;
  margin-top: 10px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
  ul {
    margin-top: 10px;
  }

  ul li {
    margin: 10px 0px;
  }
  ul li a {
    color: gray;
  }

  @media (min-width: 992px) {
    margin-top: 0px;
  }
`;

export const LogoFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: logo;
  padding: 10px;
  color: white;

  i {
    font-size: 20px;
    color: var(--orange-dark);
  }
  span {
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const ContactFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  grid-area: contact;
  color: white;

  h2 {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }

  ul {
    margin-top: 10px;
  }
  ul li {
    margin: 15px 0px;
  }
  ul li {
    color: gray;
  }

  @media (min-width: 992px) {
    width: auto;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  grid-area: map;
  color: white;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 992px) {
    width: auto;
  }
`;

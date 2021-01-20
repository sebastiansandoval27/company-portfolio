import styled from "styled-components";

const Title = styled.h3`
  width: auto;
  height: 15%;
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 30px;
  color: var(--blue-dark);

  &::after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: var(--orange-dark);
    margin-top: 5px;
  }

  @media (min-width: 1200px) {
    font-size: 50px;
    justify-content: flex-start;
    padding: 0;
  }
`;

const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default SectionTitle;

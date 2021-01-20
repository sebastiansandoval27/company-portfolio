import styled from "styled-components";

const ServiceCard = styled.div`
  width: 300px;
  height: 320px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 2px solid var(--orange-dark);
  transition: all 0.4s ease;

  @media (min-width: 1200px) {
    width: 350px;
    height: 370px;
    border-bottom: 3px solid var(--orange-dark);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 75%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.4s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Text = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;

  h3 {
    width: calc(100% - 50px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    color: var(--blue-dark);
    font-size: 18px;
  }
`;

const ReadMoreBtn = styled.button`
  width: 40px;
  height: 40px;
  color: var(--blue-dark);
  outline: none;
  border: none;
  margin-right: 5px;
  color: var(--blue-dark);

  i {
    font-size: 30px;
    transition: all 0.3s ease;
  }

  @media (min-width: 1200px) {
    i {
      cursor: pointer;
    }
    i:hover {
      color: var(--orange);
      transform: rotate(180deg);
    }
  }
`;

const Service = () => {
  return (
    <ServiceCard>
      <Image>
        <img src="/img/bg.jpg" alt="" />
      </Image>
      <Text>
        <h3>Texto</h3>
        <ReadMoreBtn>
          <i className="far fa-plus-square"></i>
        </ReadMoreBtn>
      </Text>
    </ServiceCard>
  );
};

export default Service;

import { Container, Services, Title } from "./OurServicesStyled";
import Service from "./Service";

const OurServices = () => {
  return (
    <Container>
      <Title>
        <h3>Servicios</h3>
      </Title>
      <Services>
        <Service />
        <Service />
        <Service />
      </Services>
    </Container>
  );
};

export default OurServices;

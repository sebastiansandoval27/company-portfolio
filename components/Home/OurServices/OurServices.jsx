import SectionTitle from "../SectionTitle/SectionTitle";
import { Container, Services } from "./OurServicesStyled";

import Service from "./Service";

const OurServices = () => {
  return (
    <Container>
      <SectionTitle title="Servicios" />
      <Services>
        <Service />
        <Service />
        <Service />
      </Services>
    </Container>
  );
};

export default OurServices;

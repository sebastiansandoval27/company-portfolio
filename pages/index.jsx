import { Container } from "../styles/Pages/IndexStyled";
import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";
import OurServices from "../components/Home/OurServices/OurServices";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Hero />
        <OurServices />
      </Container>
    </Layout>
  );
}

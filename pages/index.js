import { Container } from "../styles/Pages/IndexStyled";
import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Hero />
      </Container>
    </Layout>
  );
}

import { Container } from "../styles/Pages/IndexStyled";
import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";
import OurServices from "../components/Home/OurServices/OurServices";
import Message from "../components/Home/Message/Message";
import ProjectsIndex from "../components/Home/ProjectsIndex/ProjectsIndex";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Hero />
        <OurServices />
        <Message />
        <ProjectsIndex />
      </Container>
    </Layout>
  );
}

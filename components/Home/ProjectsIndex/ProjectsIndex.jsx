import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectsComponent = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const GridProjects = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  padding: 15px 0px;
  margin-top: 25px;

  @media (min-width: 768px) {
    width: auto;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    width: auto;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }

  @media (min-width: 1200px) {
    grid-gap: 20px;
  }
`;

const Project = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);

  .img {
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .title {
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 10px;
  }
`;

const ProjectsIndex = () => {
  return (
    <ProjectsComponent>
      <SectionTitle title="Proyectos" />
      <GridProjects>
        <Project>
          <div className="img">
            <img src="/img/bp.jpg" alt="" />
          </div>
          <h2 className="title">Hola</h2>
        </Project>
        <Project>
          <div className="img">
            <img src="/img/bp.jpg" alt="" />
          </div>
          <h2 className="title">Hola</h2>
        </Project>
        <Project>
          <div className="img">
            <img src="/img/bp.jpg" alt="" />
          </div>
          <h2 className="title">Hola</h2>
        </Project>
      </GridProjects>
    </ProjectsComponent>
  );
};

export default ProjectsIndex;

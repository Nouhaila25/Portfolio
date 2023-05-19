import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./project.js";
import { projetos } from "../../Data/data.js";
import InfoProject from "../../Components/InfoProject/InfoProject.jsx";

const Project = ({ theme }) => {
  const url = `/assets/img/BGAbout-${theme ? "light" : "dark"}.svg`;
  const { name } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    const [currentProject] = projetos.filter(
      (project) => project.name === name
    );
    setProject(currentProject);
  }, [name]);
  return (
    <S.Container
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h1>{project.name}</h1>
      <S.divInfo>
        <div className="imgProject">
          <img src={project.img} alt="" />
        </div>
        <InfoProject
          key={project.id}
          description={project.description}
          github={project.github}
          
        />
      </S.divInfo>
    </S.Container>
  );
};

export default Project;

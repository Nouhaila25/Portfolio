import React from "react";
import { skills } from "../../Data/skills.js";
import ProgressBar from "../../Components/ProgressBar/ProgressBar.jsx";
import * as S from "./about.js";

const About = ({ theme }) => {
  const urlAbout = `/assets/img/BGAbout-${theme ? "light" : "dark"}.svg`;
  return (
    <S.Container
      style={{
        backgroundImage: `url(${urlAbout})`,
      }}
    >
      <S.About>
        <h1>About me</h1>
        <S.Text>
        Bonjour, Je suis KHABBACHI Nouhaila, une étudiante à l'ENSA El jadida.
        <br/>Je suis spécialisée dans le domaine d'informatique.
        <br/>Sur ce site, vous pouvez découvrir mes formations, mes expériences, mes projets réalisés et mes certificats pour toute demande ou opportunité.
          
        </S.Text>
      </S.About>
      <S.Skills>
        <h1>Competences</h1>
        {skills.map((skill) => {
          return (
            <ProgressBar
              key={skill.id}
              skill={skill.skill}
              progress={skill.progress}
            />
          );
        })}
      </S.Skills>
    </S.Container>
  );
};

export default About;

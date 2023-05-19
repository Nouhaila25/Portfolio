import React from "react";
import * as S from "./portfolio.js";
import Project from "../../Components/Project/Project.jsx";
import { projetos } from "../../Data/data.js";

const Portfolio = ({ theme }) => {
  const url = `/assets/img/BGPortfolio-${theme ? "light" : "dark"}.svg`;
  return (
    <S.Container
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h1>Portfolio</h1>
      <div className="divProjetos">
        <S.Highlighted>
          <h3>Projets</h3>
          <div>
            {projetos.map((projeto) => {
              if (projeto.highlighted === true) {
                return (
                  <Project
                    key={projeto.name}
                    highlighted={true}
                    name={projeto.name}
                    img={projeto.img}
                  />
                );
              }
            })}
          </div>
        </S.Highlighted>
        <S.Projects>
          
          <div>
            {projetos.map((projeto) => {
              if (projeto.highlighted === false) {
                return (
                  <Project
                    key={projeto.name}
                    highlighted={false}
                    name={projeto.name}
                    img={projeto.img}
                  />
                );
              }
            })}
          </div>
        </S.Projects>
        {/* <S.Back>
          <h3>Back End</h3>
          <div>
            {projetos.map((projeto) => {
              if (
                projeto.highlighted === false &&
                projeto.category === "back end"
              ) {
                return (
                  <Project
                    key={projeto.name}
                    highlighted={false}
                    name={projeto.name}
                    img={projeto.img}
                  />
                );
              }
            })}
          </div>
        </S.Back>
        <S.Dados>
          <h3>Banco de dados</h3>
          <div>
            {projetos.map((projeto) => {
              if (
                projeto.highlighted === false &&
                projeto.category === "data"
              ) {
                return (
                  <Project
                    key={projeto.name}
                    highlighted={false}
                    name={projeto.name}
                    img={projeto.img}
                  />
                );
              }
            })}
          </div>
        </S.Dados> */}
      </div>
    </S.Container>
  );
};

export default Portfolio;

import React from "react";
import * as S from "./infoproject.js";

const InfoProject = (props) => {
  return (
    <S.Info>
      <p>{props.description}</p>
      <p>
        Github: <a href={props.github}>Link to github</a>.
      </p>
     
    </S.Info>
  );
};

export default InfoProject;

import React from "react";
import * as S from "./home.js";

const Home = ({ theme }) => {
  const url = `/assets/img/BGHome-${theme ? "light" : "dark"}.svg`;
  return (
    <S.Container style={{ backgroundImage: `url(${url})` }}>
      <S.Infos>
        <h1>KHABBACHI Nouhaila</h1>
        <p>Etudiante en ingénieurie informatique et technologies émérgentes</p>
        <div>
          <a href="https://github.com/Nouhaila25">
            <img
              src="/assets/icons/github.svg"
              alt="GitHub"
              className="iconInfo"
            />
          </a>
          <a href="https://www.linkedin.com/in/nouhaila-khabbachi-aa9216267/">
            <img
              src="/assets/icons/linkedin.svg"
              alt="LinkedIn"
              className="iconInfo"
            />
          </a>
          <a href="mailto:khabbachinohaila23@gmail.com">
            <img
              src="/assets/icons/mail.svg"
              alt="E-mail"
              className="iconMail"
            />
          </a>
        </div>
      </S.Infos>
      <section>
        <img src="/assets/img/ana.jpeg" alt="" className="iconImg" />
      </section>
    </S.Container>
  );
};

export default Home;

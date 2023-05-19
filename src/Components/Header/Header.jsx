import React from "react";
import * as S from "./header.js";
import { NavLink } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  return (
    <S.Header>
      <NavLink
        to="/"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        About me
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Portfolio
      </NavLink>
      <img
        src={theme ? "/assets/icons/light.svg" : "/assets/icons/dark.svg"}
        alt=""
        onClick={() => setTheme(!theme)}
        className="buttonTheme"
      />
    </S.Header>
  );
};

export default Header;

import React from "react";
import "../assets/styles/components/Header.css";
import PlatziLogo from "../assets/images/logo-platzi-video-BW2.png";
import ProfileImage from "../assets/images/user-icon.png";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__img" src={PlatziLogo} alt="Platzi Video" />
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={ProfileImage} alt="ProfileImage" />
            <p>Perfil</p>
          </div>
          <ul>
            <li>
              <a href="/">Cuentas</a>
            </li>
            <li>
              <a href="/">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;

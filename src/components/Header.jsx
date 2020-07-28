import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.css";
import PlatziLogo from "../assets/images/logo-platzi-video-BW2.png";
import ProfileImage from "../assets/images/user-icon.png";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="header__img" src={PlatziLogo} alt="Platzi Video" />
        </Link>
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={ProfileImage} alt="ProfileImage" />
            <p>Perfil</p>
          </div>
          <ul>
            <li>
              <a href="/">Cuenta</a>
            </li>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;

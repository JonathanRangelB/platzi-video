import React from "react";
import "../assets/styles/components/Search.css";

const Main = () => {
  return (
    <>
      <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input type="text" className="input" placeholder="Buscar..." />
      </section>
    </>
  );
};

export default Main;

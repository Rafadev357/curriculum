import React from "react";

export const Home = () => {
  return (
    <>
      <div className="content__box">
        <div className="content__home">
          <div className="home__text">
            <h2>¡Bienvenido!</h2>
            <h1>
              Soy
              <span className="spn__name">Rafael Morales</span>
            </h1>
            <span className="spn__dev">Web Developer</span>
          </div>
          <div className="home__picture"></div>
        </div>
      </div>
      <div className="content__box">
        <div className="content__about">
          <div className="about__text"></div>
          <div className="about__picture"></div>
        </div>
      </div>
    </>  
  );
};

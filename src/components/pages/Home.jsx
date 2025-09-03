import React from "react";

export const Home = () => {
  return (
    <>
      <div className="content__box">
        <div className="content__home">
          <div className="home__text">
            <h2>¡Bienvenido!</h2>
            <h1>
              Soy &nbsp;
              <span className="spn__name">Rafael Morales</span>
            </h1>
            <span className="spn__dev">Web Developer</span>
          </div>
          <div className="home__picture">
            <img
              src="../public/logos/ordenador-removebg-preview.png"
              alt="ordenador retro"
              width="150px"
              height="150px"
            />
          </div>
        </div>
      </div>
      <div className="content__box">
        <div className="content__home">
          <div className="about__picture">
            <img
              src="../public/logos/robot-removebg-preview.png"
              alt="robot retro"
              width="150px"
              height="150px"
            />
          </div>
          <div className="about__text">
            <h2>Un poco de mí</h2>
            <div className="text__animation"></div>
            <p>
              Soy un desarrollador de aplicaciones web con 35 años y una sólida
              base en el ecosistema JavaScript. Mi experiencia abarca desde el
              frontend con React hasta el backend con Node.js y MongoDB. Me
              encantan los desafíos, me considero una persona curiosa y tengo
              muchas ganas de seguir creciendo en esta nueva etapa de mi vida profesional.
              Me apasiona resolver problemas y crear soluciones web eficientes y funcionales.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

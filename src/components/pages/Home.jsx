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
            <img src="../public/logos/ordenador-removebg-preview.png" alt="ordenador retro" width='150px' height='150px' />
          </div>
        </div>
      </div>
      <div className="content__box">
        <div className="content__about">
          <div className="about__text">
            <h2>Un poco de mí</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              gravida sed massa in dictum. Curabitur porttitor hendrerit nibh.
              Praesent dapibus ultricies varius. Donec pretium varius sem a
              molestie. Donec euismod tincidunt tempor. Proin sit amet sapien
              ultrices, luctus lacus ac, laoreet justo. Nam vulputate odio
              dignissim, varius leo non, tincidunt lectus. Cras vulputate erat
              nec erat porta efficitur. Pellentesque lobortis quam vel neque
              hendrerit consectetur. Cras dui mi, dapibus quis nisi a, lacinia
              rhoncus erat. Morbi in eros vitae libero pharetra tempor eget
              malesuada ipsum. Duis at quam ut eros lobortis faucibus nec quis
              dui. Aliquam nec nisi non neque aliquam dapibus.
            </p>
          </div>
          <div className="about__picture">Aqui va una imagen</div>
        </div>
      </div>
    </>
  );
};

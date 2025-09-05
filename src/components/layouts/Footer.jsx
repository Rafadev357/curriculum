import React from "react";
import { Imagen } from "../../hooks/Imagen";

export const Footer = () => {

  const imgLogoFooter = 'logo-RD';

  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__box">
          <h3>Diseñado y Desarrollado por Rafael Morales</h3>
        </div>
        <div className="footer__box">
          <Imagen nombreImg={imgLogoFooter}/>
          {/*<div className="footer__img">
            <img src="../public/logos/r.png" width='15rem' height='20rem' />
          </div>
          <div className="footer__img">
            <img src="../public/logos/re.png" width='15rem' height='20rem' />
          </div>*/}
        </div>
        <div className="body__icons">
          <ul className="footer__icons">
            <li className="icons">
              <a href="https://x.com/RafaDev3590">
                <img
                  src="../public/logos/gorjeo.png"
                  width="10rem"
                  height="10rem"
                />
              </a>
            </li>
            <li className="icons">
              <a href="https://github.com/Rafadev357">
                <img
                  src="../public/logos/github.png"
                  width="10rem"
                  height="10rem"
                />
              </a>
            </li>
            <li className="icons">
              <a href="www.linkedin.com/in/rafael-morales-sánchez-028aa7b4">
                <img
                  src="../public/logos/social.png"
                  width="10rem"
                  height="10rem"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

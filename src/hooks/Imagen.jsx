import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen/index';
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";



/**
 * Para poder utilizar las imagenes al subir la web a internet
 * estoy utilizando la plataforma Cloudinary.
 * He instalado la librería de cloudinary y en el componente App.jsx
 * importo las distintas herramientas que voy a utilizar
 */



export const Imagen = ({nombreImg}) => {

    // Creo una instancia y le doy a la propiedad cloudName el nombre de mi cuenta
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dskpfgixt'
    }
  });

  // Instancio  un objeto imagen de cloudinary con id publico robot-remove
  const myImg = cld.image(nombreImg);

  // Redimensiono la imagen usando el metodo fill() como manera de ajustar o recortar
  myImg.resize(fill().width(250).height(250));

  return (
    <>
        <AdvancedImage cldImg={myImg}/>
    </>
  )
}

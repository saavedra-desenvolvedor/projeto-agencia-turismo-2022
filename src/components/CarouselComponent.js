import React from "react";
//import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "react-carousel-minimal";
//import argentina from "../../public/countries/argentina.png";

export default function CarouselComponent() {
  const data = [
    {
      image: "/countries/australia.png",
      caption: "Australia"
    },
    {
      image: "/countries/argentina.png",
      caption: "Argentina"
    },
    {
      image: "/countries/brasil.png",
      caption: "Brasil"
    },
    {
      image: "/countries/canada.png",
      caption: "Canada"
    },
    {
      image: "/countries/franca.png",
      caption: "França"
    },
    {
      image: "/countries/suica.png",
      caption: "Suiça"
    }
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold"
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold"
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Conheça alguns destinos</h2>

      <div
        style={
          {
            //padding: "0"
          }
        }
      >
        <Carousel
          data={data}
          time={1000}
          width="100%"
          height="360px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true} //numeração slides
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true} //pontos slide
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true} //fotos miniaturas
          thumbnailWidth="200px" //Tamanho fotos miniaturas
        />
      </div>
    </div>
  );
}

import React from "react";
//import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "react-carousel-minimal";
//import argentina from "../../public/countries/argentina.png";

export default function BannerComponet() {
  const data = [
    {
      image: "/banners/argentinaBanner.jpg",
      caption: "Conheça a Argentina"
    },
    {
      image: "/banners/autraliaBanner.jpg",
      caption: "Conheça a Austrália"
    },
    {
      image: "/banners/brasilBanner.jpg",
      caption: "Conheça o Brasil"
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
      <h2>Promoções</h2>

      <div
        style={
          {
            //padding: "0"
          }
        }
      >
        <Carousel
          data={data}
          time={5000}
          width="100%"
          height="200px"
          captionStyle={captionStyle}
          radius="10px"
          //slideNumber={true} //numeração slides
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          //dots={true} //pontos slide
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          //thumbnails={true} //fotos miniaturas
          //thumbnailWidth="100px" //Tamanho fotos miniaturas
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "400px",
            margin: "20px auto"
          }}
        />
      </div>
    </div>
  );
}

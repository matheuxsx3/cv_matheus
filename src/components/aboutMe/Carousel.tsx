// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Ativa a reprodução automática
    autoplaySpeed: 3000, // Velocidade de transição automática
  };

  return (
    <div style={{ width: "70%", maxWidth: "600px", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://github.com/matheuxsx3/cv_matheus/blob/main/conteudo/teste/generationRj.jpg?raw=true"
            alt="Imagem 1"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
        <div>
          <img
            src="https://github.com/matheuxsx3/cv_matheus/blob/main/conteudo/teste/mercadelaLogo.png?raw=true"
            alt="Imagem 2"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
        <div>
          <img
            src="https://github.com/matheuxsx3/cv_matheus/blob/main/conteudo/teste/padaria.jpg?raw=true"
            alt="Imagem 3"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

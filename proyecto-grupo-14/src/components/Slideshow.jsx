import React, { useState } from 'react';
import '../styles/Slideshow.css'

const slidesData = [
  {
    videoSrc: "https://www.youtube.com/embed/R_KdW1LcI_s?si=nUlgkhOqZj50zApz" ,
    title: "1. Agricultural",
    description: "El sector agrícola no sólo es el mayor consumidor de recursos de agua dulce en el mundo, ya que la producción agrícola y ganadera utiliza alrededor del 70 por ciento de las reservas de agua superficial de la Tierra, sino que también es un grave contaminador del agua. En todo el mundo, la agricultura es la principal causa de la degradación del agua.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/VFeHAxiKwlY?si=2spm8ply8GRrfyc4",
    title: "2. Aguas residuales",
    description: "Las aguas usadas son aguas residuales. Provienen de nuestros lavabos, duchas e inodoros (piense en el alcantarillado) y de actividades comerciales, industriales y agrícolas (piense en metales, disolventes y lodos tóxicos).",
  },

  {
    videoSrc: "https://www.youtube.com/embed/072_cgGIYsw?si=ePse-7e33uDP1slg",
    title: "3. Contaminación del petróleo",
    description: "Casi la mitad del millón de toneladas de petróleo que se calcula llegan al medio marino cada año no procede de vertidos de petroleros, sino de fuentes terrestres como fábricas, granjas y ciudades. En el mar, los derrames de petroleros suponen alrededor del 10 por ciento del petróleo en las aguas de todo el mundo",
  },

  {
    videoSrc: "https://www.youtube.com/embed/WPdwGRJKYDc?si=b6fuDJ4MqIqLLp8C",
    title: "4. Sustancias radioactivas",
    description: "Los residuos radiactivos son cualquier tipo de contaminación que emite radiaciones más allá de lo que libera naturalmente el medio ambiente. Se crean en las minas de uranio, en las centrales nucleares y en la producción y pruebas de armas militares, así como en las universidades y hospitales que utilizan materiales radiactivos para la investigación y la medicina",
  },

];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slide-card">
        <iframe
          className="video-slide"
          width="100%"
          height="300"
          src={slidesData[currentSlide].videoSrc} 
          title="Video Slide"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <div className='inside-card'>
        <h2 className="slide-title">{slidesData[currentSlide].title}</h2>
        <p className="slide-description">{slidesData[currentSlide].description}</p>
          <div className="slideshow-controls">
            <button onClick={prevSlide}>Anterior</button>
            <button onClick={nextSlide}>Siguiente</button>
          </div>
          
        </div>
       
        
      </div>
      
    </div>
  );
};

export default Slideshow;

import weather from "../assets/weather.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import box from "../assets/box.jpg";
import rickAndMorty from "../assets/rickandmorty.jpg";
import pokedex from "../assets/pokedexfoto.jpg";
import quotes from "../assets/quotesfoto.jpg";
import { useState } from "react";

const Portfolio = () => {
  const [id, setId] = useState(0);

  const proyects = [
    {
      title: "Weather App",
      background: "url(" + weather + ")",
      description: "Aplicación construida con React js, consumiendo Api de Open Weather, basada en la geolocalización del navegador del usuario.",
      adress: "https://weather-forecast-lyn.netlify.app",
    },
    {
      title: "Rick and Morty",
      background: "url(" + rickAndMorty + ")",
      description: "Aplicación construida con React js, basada en la búsqueda de filtrada personajes según locación.",
      adress: "https://wiki-rick-and-morty-eg.netlify.app",
    },
    {
      title: "E-commerce",
      background: "url(" + ecommerce + ")",
      description: "Aplicación de tienda virtual elaborada con React.js, Redux y Bootstrap.",
      adress: "https://e-commerce-react-eg.netlify.app",
    },
    {
      title: "Pokedex App",
      background: "url(" + pokedex + ")",
      description: "Construcción de App interactiva elaborada con React.js, Redux y React Router, consumiendo pokeapi. Utilicé rutas protegidas y elaboré lógica para filtran búsquedas.",
      adress: "https://pokedex-eg.netlify.app",
    },
    {
      title: "Quotes App",
      background: "url(" + quotes + ")",
      description: "Elaboración de aplicación que muestra frases famosas. En su lógica genera colores aleatorios cada vez que cambia de frase.",
      adress: "https://eg-quotes-random.netlify.app",
    },
    {
      title: "Box Shadow Generator",
      background: "url(" + box + ")",
      description: "Construcción de herramienta que genera código de la propiedad CSS Box Shadow. Elaborada con HTML, CSS y Javascript.",
      adress: "https://box-shadow-generator1.netlify.app",
    },
  ];

  const next = () => {
    if (id < proyects.length - 1) setId(id + 1);
  };

  const previous = () => {
    if (id > 0) setId(id - 1);
  };

  const squareDetailsPortfolio = {
    backgroundImage: `${proyects[id].background}`,
    backgroundSize: "cover",
  };

  return (
    <div className="square-background">
      <div className='container-image'>
        <div style={squareDetailsPortfolio} className='image-proyect'></div>
      </div>

      <div className="container-buttons">
        <button onClick={previous}>
          <i className="fa-solid fa-arrow-left arrow"></i>
        </button>
        <button onClick={next}>
          <i className="fa-solid fa-arrow-right arrow"></i>
        </button>
      </div>

      <div className="description-proyect">
        <h1>{proyects[id].title}</h1>
        <p>{proyects[id].description}</p>
        <a href={proyects[id].adress}>CLICK TO VISIT</a>
      </div>

    </div>
  );
};

export default Portfolio;

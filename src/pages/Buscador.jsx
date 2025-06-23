// src/components/ListaPeliculas.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "./buscador.css"; // Importa el CSS para estilos
import { Link } from "react-router-dom"; // Importa Link para navegación
import { Botones } from "../components/Botones";

const ListaPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  function handleMovieDetails(movieId) {
    // Aquí puedes implementar la lógica para mostrar los detalles de la película
    console.log("Detalles de la película con ID:", movieId);
    // Por ejemplo, podrías redirigir a una página de detalles o mostrar un modal
    // window.location.href = `/pelicula/${movieId}`;
    
  }


  return (
    <>
    <Botones setPeliculas={setPeliculas}/>
    <div className="general-movies-list">
      {peliculas.length > 0 && peliculas[0].results.map(p => (
        <div key={p.id} className="movie-card">
          <div className="movie-card-inner">
            <div className="movie-card-front">
              {p.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${p.poster_path}`}
                  alt={p.title}
                />
              )}
            </div>
            <div className="movie-card-back">
              <div>
                <h2>{p.title} </h2>
                <p>{p.release_date}</p>
              </div>
             <Link to="/MovieDetails" state={{movie: p }} className="btn-movie-details">
              Ver detalles
             </Link>

              <p className="num-vote">{p.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ListaPeliculas;

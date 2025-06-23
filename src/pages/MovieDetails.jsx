import { useLocation } from "react-router-dom";
import "./movieDetails.css"; // Importa el CSS para estilos 

const MovieDetails = () => {
  const { state } = useLocation();
  const movie = state?.movie;

  return (
   <div className="movie-details-container">
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster de ${movie.title}`} />

    <div className="movie-details-content">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  </div>

  );
};

export default MovieDetails;

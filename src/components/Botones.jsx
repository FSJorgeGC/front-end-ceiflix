import axios from "axios";
import "./botones.css"; 

export const Botones = ({setPeliculas}) => {
    const peliculasTendencia = "peliculasTendencia";
    const peliculasPopulares = "peliculasPopulares";
    function obtenerPeliculas(tipo) {
        axios.get(`/api/${tipo}`)
        .then(res => {
            console.log("Películas desde MongoDB:", res.data);
            setPeliculas(res.data);
        })
        .catch(err => console.error("Error al obtener películas", err));
    }


  return (
    <div className="botones-container">
      <button onClick={() => obtenerPeliculas(peliculasTendencia)}>Tendencia</button>
      <button onClick={() => obtenerPeliculas(peliculasPopulares)}>Populares</button>
    </div>
  );
};
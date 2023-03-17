import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);
  const { id } = useParams();
  
  const getMovie = async() => {
    const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovieInfo(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      {loading ? <h1>Loading..</h1> : (
        <div>
          <h2>{movieInfo.title}</h2>
          <img src={movieInfo.medium_cover_image} alt={movieInfo.title} />
          <hr />
          <h3>Description</h3>
          <p>{movieInfo.description_full}</p>
        </div>
      )}
    </div>
  );  
}
export default Detail;
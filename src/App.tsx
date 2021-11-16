import { useEffect, useState } from "react";
import { useLocalStorage } from './use-local-storage'
import "./styles.css";

const getMovies = () => {
  return fetch("https://swapi.dev/api/films/").then((results) => {
    return results.json();
  });
};

export default function App() {
  const [data, setData] = useState(null);
  const [chosenMovie, setChosenMovie] = useState(null);
  const [localStorageMovie, setLocalStorageMovie] = useLocalStorage(
    "movie",
    null
  );

  const handleMovieChoice = (movie) => {
    setChosenMovie(movie);
    setLocalStorageMovie(movie);
  };

  useEffect(() => {
    getMovies().then((res) => {
      setData(res.results);
      setChosenMovie(localStorageMovie || res.results[0]);
    });
  }, []);

  if (!data || !chosenMovie) {
    return <main className="App">Loading...</main>;
  }


  return (
    <main className="App">
      <section className="toc">
        <h1>TOC</h1>
        <ul>
          {data?.map((movie) => (
            <li onClick={() => handleMovieChoice(movie)}>{movie.title}</li>
          ))}
        </ul>
      </section>
      <section className="movie-details">
        <h1>{chosenMovie.title}</h1>
        <p>{chosenMovie.opening_crawl}</p>
      </section>
    </main>
  );
}

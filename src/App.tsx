import { useEffect, useState } from "react";
import "./styles.css";

const getMovies = () => {
  return fetch("https://swapi.dev/api/films/").then((results) => {
    return results.json();
  });
};

export default function App() {
  const [data, setData] = useState(null);
  const [chosenMovie, setChosenMovie] = useState(0);

  useEffect(() => {
    getMovies().then((res) => {
      setData(res.results);
      setChosenMovie(res.results[0]);
    });
  }, []);

  if (!data) {
    return <main className="App">Loading...</main>;
  }

  console.log(data);
  console.log({ chosenMovie });
  return (
    <main className="App">
      <section className="toc">
        <h1>TOC</h1>
        <ul>
          {data?.map((movie) => (
            <li>{movie.title}</li>
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

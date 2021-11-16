import { useEffect, useState } from "react";
import "./styles.css";

const getMovies = () => {
  return fetch("https://swapi.dev/api/films/").then((results) => {
     return results.json()
  });
};

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMovies().then((res) => setData(res.results));
  }, []);

  console.log(data);
  return (
    <main className="App">
      <section className="toc">
        sidebar / TOC
      </section>
      <section className="movie-details">
        movie details
      </section>
    </main>
  );
}

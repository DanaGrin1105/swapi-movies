import { useEffect, useState } from "react";
import "./styles.css";

const getMovies = async () => {
  const res = await fetch("https://swapi.dev/api/films/");
  const results = await res?.json();
  return results;
};

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMovies().then((res) => setData(res.results));
  }, []);

  console.log(data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

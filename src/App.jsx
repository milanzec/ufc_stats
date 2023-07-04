import { useState, useEffect } from "react";
import "./App.css";

import { fetchData, eventOptions } from "./utils/fetchData";

function App() {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const url = "https://mma-stats.p.rapidapi.com/July_01_2023";
        const data = await fetchData(url, eventOptions);
        console.log(data);
        setFighters(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  if (!Array.isArray(fighters)) {
    return <p>No fighters data available.</p>;
  }

  return (
    <>
      <h1>UFC Stats Project</h1>
      <ul>
        {fighters.map((fighter, index) => (
          <li key={index}>
            <h2>Fighter {index + 1}</h2>
            <p>Matchup: {fighter.matchup.join(" vs ")}</p>
            <p>Tale of the Tape: {JSON.stringify(fighter.tale_of_the_tape)}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

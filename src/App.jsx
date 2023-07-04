import { useState, useEffect } from "react";
import "./App.css";
import CurrentEvent from "./components/CurrentEvent";

import { fetchData, eventOptions } from "./utils/fetchData";

function App() {
  const [currentEventData, setCurrentEventData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const url = "https://mma-stats.p.rapidapi.com/July_01_2023";
        const data = await fetchData(url, eventOptions);
        console.log(data);
        setCurrentEventData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <>
      <h1>UFC Stats Project</h1>
      <CurrentEvent data={currentEventData}/>
    </>
  );
}

export default App;

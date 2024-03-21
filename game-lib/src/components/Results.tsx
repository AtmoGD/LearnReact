import { useState } from "react";
import GameCard from "./GameCard";
import "./Results.css";
import axios from "axios";

interface Props {
  genre: string;
}

function Results(props: Props) {
  const [results, setResults] = useState([]);

  let [dataFetched, setDataFetched] = useState(false);

  async function fetchData() {
    const fetchOptions = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "2188c92c50msh9de57ebc66ef5ecp1e0ff4jsn914be536bcbb",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(fetchOptions);
      setResults(response.data);
    } catch (err) {
      console.log(err);
    }

    setDataFetched(true);
  }

  if (!dataFetched) fetchData();

  return (
    <div className="results">
      <h1 className="results-header">Games</h1>

      <select id="sortOrder" name="Sort by">
        <option value="none">Sort by</option>
        <option value="relevance">Relevance</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="release-date">Release Date</option>
        <option value="popularity">Popularity</option>
      </select>

      <select id="filterPlatform" name="Platform">
        <option value="none">Platform</option>
        <option value="pc">PC</option>
        <option value="browser">Browser</option>
      </select>

      <div className="results-area">
        {results.map(function (element) {
          return (
            <GameCard
              title={element["title"]}
              thumbnailURL={element["thumbnail"]}
              description={element["short_description"]}
              genre={element["genre"]}
              platform={element["platform"]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Results;

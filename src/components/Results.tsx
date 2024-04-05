import { useState } from "react";
import GameCard from "./GameCard";
import "./Results.css";
import axios, { AxiosRequestConfig } from "axios";

interface Props {
  genre: string;
}

function Results(props: Props) {
  const [results, setResults] = useState([]);
  const [lastGenre, setLastGenre] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [lastSortOrder, setLastSortOrder] = useState("");
  const [platform, setPlatform] = useState("");
  const [lastPlatform, setLastPlatform] = useState("");
  const [dataFetched, setDataFetched] = useState(false);

  async function fetchData() {
    const fetchOptions: AxiosRequestConfig = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: getParams(),
      headers: {
        "X-RapidAPI-Key": "2188c92c50msh9de57ebc66ef5ecp1e0ff4jsn914be536bcbb",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    console.log(fetchOptions.params);

    try {
      const results: AxiosRequestConfig = await axios.request(fetchOptions);
      setResults(results.data);
    } catch (err) {
      console.log(err);
    }

    setDataFetched(true);
    setLastGenre(props.genre);
    setLastSortOrder(sortOrder);
    setLastPlatform(platform);
  }

  function getParams() {
    let filterPlatform: boolean = platform !== "";
    let filterGenre: boolean = props.genre !== "";
    let filterOrder: boolean = sortOrder !== "";

    let params = {};

    if (filterPlatform && filterGenre && filterOrder) {
      params = {
        "platform": platform,
        "category": props.genre,
        "sort-by": sortOrder,
      };
      return params;
    }

    if (filterPlatform && filterGenre) {
      params = {
        platform: platform,
        category: props.genre,
      };
      return params;
    }

    if (filterPlatform && filterOrder) {
      params = {
        "platform": platform,
        "sort-by": sortOrder,
      };
      return params;
    }

    if (filterGenre && filterOrder) {
      params = {
        "category": props.genre,
        "sort-by": sortOrder,
      };
      return params;
    }

    if (filterPlatform) {
      params = {
        platform: platform,
      };
      return params;
    }

    if (filterGenre) {
      params = {
        category: props.genre,
      };
      return params;
    }

    if (filterOrder) {
      params = {
        "sort-by": sortOrder,
      };
      return params;
    }

    return params;
  }

  if (
    !dataFetched ||
    props.genre !== lastGenre ||
    lastSortOrder !== sortOrder ||
    lastPlatform !== platform
  )
    fetchData();

  return (
    <div className="results">
      <h1 className="results-header">Games</h1>

      <select
        id="sortOrder"
        name="Sort by"
        onChange={async (value) => {
          setSortOrder(value.target.value === "None" ? "" : value.target.value);
          fetchData();
        }}
      >
        <option value="">Sort by</option>
        <option value="relevance">Relevance</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="release-date">Release Date</option>
        <option value="popularity">Popularity</option>
      </select>

      <select
        id="filterPlatform"
        name="Platform"
        onChange={(value) => {
          setPlatform(value.target.value === "None" ? "" : value.target.value);
          fetchData();
        }}
      >
        <option value="">Platform</option>
        <option value="pc">PC</option>
        <option value="browser">Browser</option>
      </select>

      <div className="results-area">
        {results.map(function (element, index) {
          return (
            <GameCard
              title={element["title"]}
              thumbnailURL={element["thumbnail"]}
              description={element["short_description"]}
              genre={element["genre"]}
              platform={element["platform"]}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Results;

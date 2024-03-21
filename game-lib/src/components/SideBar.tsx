import { useState } from "react";
import "./SideBar.css";

interface Props {
  onUpdateGenre: (element: string) => void;
}

function SideBar(props: Props) {
  const [activeElement, setActiveElement] = useState("");

  const genres = [
    "None",
    "MMORPG",
    "Shooter",
    "MOBA",
    "Anime",
    "Battle Royale",
    "Strategy",
    "Fantasy",
    "Sci-Fi",
    "Card Games",
    "Racing",
    "Fighting",
    "Social",
    "Sports",
  ];

  function clickedOnGenre(element: string) {
    setActiveElement(element == "None" ? "" : element);
    props.onUpdateGenre(element);
  }

  return (
    <aside className="side-bar">
      <h2 className="genre-header">Genres</h2>
      <div className="list-wrapper">
        {genres.map(function (element) {
          return (
            <div
              className={
                "genre-element " + (activeElement === element ? "active" : "")
              }
              onClick={() => clickedOnGenre(element)}
            >
              {element}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default SideBar;

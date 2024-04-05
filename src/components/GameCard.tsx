import "./GameCard.css";

interface Props {
  title?: string;
  thumbnailURL?: string;
  description?: string;
  genre?: string;
  platform?: string;
}

function GameCard(props: Props) {
  return (
    <div className="game-card">
      <img className="thumb-image" src={props.thumbnailURL} />
      <div className="information-wrapper">
        <div className="platform-icons">
          <div className="platform-element">{props.platform}</div>
        </div>
        <div className="genre-information-badge">
          <span>{props.genre}</span>
        </div>
      </div>
      <p className="title-text">{props.title}</p>
      <p className="description-text">{props.description}</p>
    </div>
  );
}

export default GameCard;

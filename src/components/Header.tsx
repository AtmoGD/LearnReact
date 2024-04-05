import "./Header.css";
import Switch from "./Switch";

function Header() {
  return (
    <div className="header">
      <div className="header-icon-wrapper">
        <img className="header-icon" src="game-icon-white.svg" />
      </div>
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <img className="search-bar-icon" src="search-icon-white.svg" />
          <input
            className="search-bar-input"
            type="text"
            placeholder="Search for free games"
          />
        </div>
      </div>
      <div className="settings-section-wrapper">
        <Switch />
      </div>
    </div>
  );
}

export default Header;

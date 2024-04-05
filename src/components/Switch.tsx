import "./Switch.css";

function Switch() {
  return (
    <label className="switch">
      <img className="dark-icon" src="dark-white.svg" />
      <img className="light-icon" src="light-white.svg" />
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}

export default Switch;

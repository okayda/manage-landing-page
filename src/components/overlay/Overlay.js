import "./Overlay.css";

const Overlay = function (prop) {
  return (
    <div className="overlay" onClick={prop.onClick}>
      &nbsp;
    </div>
  );
};

export default Overlay;

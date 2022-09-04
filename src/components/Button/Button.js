import style from "./Button.module.css";

const Button = function (prop) {
  return (
    <button className={`${style.button} ${prop.className}`}>
      {prop.children}
    </button>
  );
};

export default Button;

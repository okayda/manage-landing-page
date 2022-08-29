import Button from "../Button/Button";
import style from "./CallToAction.module.css";

const CallToAction = function () {
  return (
    <section className={style.cta}>
      <div className={style.cta__box}>
        <h2 className={style.cta__title}>Simply how your team works today.</h2>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default CallToAction;

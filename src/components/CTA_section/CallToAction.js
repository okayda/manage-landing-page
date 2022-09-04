import Button from "../Button/Button";
import style from "./CallToAction.module.css";
import bg_img from "../../images/bg-tablet-pattern.svg";

const CallToAction = function () {
  return (
    <section className={style.cta}>
      <div className={style.cta__box}>
        <div className={style.cta__container_one}>
          <h2 className={style.cta__title}>
            Simply how your team works today.
          </h2>
          <img
            src={bg_img}
            className={`${style.cta__img_background} ${style.cta__img_background__one}`}
            alt=""
          />
        </div>
        <div className={style.cta__container_two}>
          <Button className={style.cta__button}>Get Started</Button>

          <img
            src={bg_img}
            className={`${style.cta__img_background} ${style.cta__img_background__two}`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

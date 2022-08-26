import style from "./Hero.module.css";
import Button from "../Button/Button";
import heroImg from "../../images/illustration-intro.svg";

const Hero = function () {
  return (
    <section className={style.hero}>
      <div className={style.hero__content}>
        <h1 className={style.hero__title}>
          Bring everyone togethere to build better products
        </h1>
        <p className={style.hero__description}>
          Manage makes it simple for software teams to plan day-to-day taks
          while keeping the larger team goals in view
        </p>
        <Button>Get Started</Button>
      </div>

      <img src={heroImg} alt="charts" className={style.hero__img} />
    </section>
  );
};

export default Hero;

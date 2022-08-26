import style from "./Testimonials.module.css";
import Button from "../Button/Button";

const Testimonials = function () {
  // Testimonials imgs
  const person1 = require("../../images/avatar-ali.png");

  return (
    <section className={style.testimonials}>
      <h2 className={style.testimonials__title}>What they've said</h2>

      <figure className={style.testimonials__content}>
        <img src={person1} className={style.testimonials__img} alt="person" />
        <h3 className={style.testimonials__name}>Ali Bravo</h3>
        <blockquote className={style.testimonials__description}>
          <p>
            "We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confussion and everyone is
            much more focused."
          </p>
        </blockquote>
      </figure>

      <div className={style.testimonials__dots}>
        <div className={style.testimonials__dot}></div>
        <div className={style.testimonials__dot}></div>
        <div className={style.testimonials__dot}></div>
        <div className={style.testimonials__dot}></div>
      </div>

      <Button>Get Started</Button>
    </section>
  );
};

export default Testimonials;

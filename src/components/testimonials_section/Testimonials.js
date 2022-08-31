// Swiper Files
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./swiper.css";
import "swiper/css";
import "swiper/css/pagination";

import style from "./Testimonials.module.css";
import Button from "../Button/Button";

const Testimonials = function () {
  // Testimonials imgs
  const person1 = require("../../images/avatar-anisha.png");
  const person2 = require("../../images/avatar-ali.png");
  const person3 = require("../../images/avatar-richard.png");
  const person4 = require("../../images/avatar-shanai.png");

  return (
    <section className={style.testimonials}>
      <h2 className={style.testimonials__title}>What they've said</h2>

      <Swiper
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="swiper-background">&nbsp;</div>
          <div className="swiper-content">
            <figure className={style.testimonials__content}>
              <img
                src={person1}
                className={style.testimonials__img}
                alt="person"
              />

              <h3 className={style.testimonials__name}>Anisha Li</h3>
              <blockquote className={style.testimonials__description}>
                <p>
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </blockquote>
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-background">&nbsp;</div>

          <div className="swiper-content">
            <figure className={style.testimonials__content}>
              <img
                src={person2}
                className={style.testimonials__img}
                alt="person"
              />
              <h3 className={style.testimonials__name}>Ali Bravo </h3>
              <blockquote className={style.testimonials__description}>
                <p>
                  “We have been able to cancel so many other subscriptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused.”
                </p>
              </blockquote>
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-background">&nbsp;</div>

          <div className="swiper-content">
            <figure className={style.testimonials__content}>
              <img
                src={person3}
                className={style.testimonials__img}
                alt="person"
              />
              <h3 className={style.testimonials__name}>Richard Watts</h3>
              <blockquote className={style.testimonials__description}>
                <p>
                  “Manage allows us to provide structure and process. It keeps
                  us organized and focused. I can’t stop recommending them to
                  everyone I talk to!”
                </p>
              </blockquote>
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-background">&nbsp;</div>

          <div className="swiper-content">
            <figure className={style.testimonials__content}>
              <img
                src={person4}
                className={style.testimonials__img}
                alt="person"
              />
              <h3 className={style.testimonials__name}>Shanai Gough</h3>
              <blockquote className={style.testimonials__description}>
                <p>
                  “Their software allows us to track, manage and collaborate on
                  our projects from anywhere. It keeps the whole team in-sync
                  without being intrusive.”
                </p>
              </blockquote>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* 
      <div className={style.testimonials__dots}>
        <div className={style.testimonials__dot}></div>
        <div className={style.testimonials__dot}></div>
        <div className={style.testimonials__dot}></div>
        <div className={style.testimonials__dot}></div>
      </div> */}

      <Button>Get Started</Button>
    </section>
  );
};

export default Testimonials;

import { useState } from "react";
import React from "react";
// Swiper Files
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./swiper.css";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialsContent from "./TestimonialsContent";
import style from "./Testimonials.module.css";
import Button from "../Button/Button";

const Testimonials = function () {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  return (
    <section className={style.testimonials}>
      <h2 className={style.testimonials__title}>What they've said</h2>
      <Swiper
        grabCursor={true}
        slidesPerView={width >= 1200 ? 3 : width >= 700 ? 2 : 1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper-drag"
      >
        {TestimonialsContent.map((content) => {
          return (
            <SwiperSlide key={content.id}>
              <div className="swiper-background">&nbsp;</div>
              <div className="swiper-content">
                <figure className={style.testimonials__content}>
                  <img
                    src={content.personPic}
                    className={style.testimonials__img}
                    alt="person"
                  />

                  <h3 className={style.testimonials__name}>
                    {content.personName}
                  </h3>
                  <blockquote className={style.testimonials__description}>
                    <p>{content.personMsg}</p>
                  </blockquote>
                </figure>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Button>Get Started</Button>
    </section>
  );
};

export default Testimonials;

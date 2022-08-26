import style from "./Steps.module.css";
import ProcedureList from "./ProcedureList";

const Steps = function () {
  return (
    <section className={style.steps}>
      <div className={style.steps__content}>
        <h2 className={style.steps__title}>What's different about Manage?</h2>
        <p className={style.steps__description}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams
        </p>
      </div>
      <div className={style.steps__procedures}>
        <ProcedureList
          steps__procedure_list={style.steps__procedure_list}
          steps__list_title={style.steps__list_title}
          steps__number={style.steps__number}
          steps__list_description={style.steps__list_description}
        />
      </div>
    </section>
  );
};

export default Steps;

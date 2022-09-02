const ProcedureList = function (prop) {
  return (
    <ul className={prop.steps__procedure_list}>
      <li>
        <div className={prop.steps__procedure_title}>
          <h3 className={prop.steps__list_title}>
            <span className={prop.steps__number}>01</span>
            Track company-wide progress
          </h3>
        </div>
        <p className={prop.steps__list_description}>
          See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of details. Never lose sight of the bigger picture again.
        </p>
      </li>

      <li>
        <div className={prop.steps__procedure_title}>
          <h3 className={prop.steps__list_title}>
            <span className={prop.steps__number}>02</span>
            Advanced built-in reports
          </h3>
        </div>
        <p className={prop.steps__list_description}>
          Set internal delivery estimates and track progress toward company
          goals. Our customisable dashboard helps you build out the reports you
          need to keep key stakeholders informed
        </p>
      </li>

      <li>
        <div className={prop.steps__procedure_title}>
          <h3 className={prop.steps__list_title}>
            <span className={prop.steps__number}>03</span>
            Everthing you need in one place
          </h3>
        </div>
        <p className={prop.steps__list_description}>
          Stop jumping from one service to another to communicate, store files,
          track tasks and share documents. Manage offers an all-in-one team
          productivity solution.
        </p>
      </li>
    </ul>
  );
};

export default ProcedureList;

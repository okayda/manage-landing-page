import Button from "../Button/Button";

const Form = function (prop) {
  return (
    <div className={prop.footer__form_container}>
      <form className={prop.footer__form}>
        <input type="text" placeholder="Updates in your inbox..." required />
        <Button>GO</Button>
      </form>
    </div>
  );
};

export default Form;

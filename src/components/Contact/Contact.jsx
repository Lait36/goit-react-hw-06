import css from "./Contact.module.css";
export default function Contact({ contact: { name, number, id }}) {
  return (
    <div className={css.container}>
      <div>
        <p className={css.info}>{name}</p>
        <p className={css.info}>{number}</p>
      </div>
      <button className={css.button}>Delete</button>
    </div>
  );
}

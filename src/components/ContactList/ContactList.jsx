import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({contacts, deleteContact}) {
  return (
    <ul className={css.container}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.listItem} >
            <Contact contact={contact} deleteContact={deleteContact} />    
        </li>
      ))}
    </ul>
  );
}

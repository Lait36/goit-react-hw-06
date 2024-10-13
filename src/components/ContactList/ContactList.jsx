import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";


export default function ContactList({deleteContact}) {
  const value = useSelector(state => state.contacts.items);
  

  return (
    <ul className={css.container}>
      {value.map((contact) => (
        <li key={contact.id} className={css.listItem} >
            <Contact contact={contact} deleteContact={deleteContact} />    
        </li>
      ))}
    </ul>
  );
}

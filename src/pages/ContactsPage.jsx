import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";

export default function ContactsPage() {
    return (
      <section>
        <h1>Contacts</h1>
            <ContactList />
            <ContactForm/>
      </section>
    );
  }
  
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import styles from './ContactsView.module.css';


const PhoneBookView = () => {
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        <ContactList />
        </div>
    )
}

export default PhoneBookView;
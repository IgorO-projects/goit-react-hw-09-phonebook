import { useState } from 'react';
import styles from './ContactForm.module.css';
import { handleContactAdd, } from '../../redux/actions/phonebook-operations';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { Component } from 'react';


export default function ContactForm ({ contacts }) {
  const [nameContact, setNameContact] = useState('');
  const [numberContact, setNumberContact] =useState('');

  const handleChange = event => {
    const { name, value } =event.target;

    switch(name) {
      case 'name':
      setNameContact(value);
      break;
    
    case 'number':
      setNumberContact(value);  
      break

    default: console.warn(`there is no type of ${name}`);
    }
    
  }

  const dispatch = useDispatch();

  const nameCheked = ( contacts, name ) => {
        return contacts.find(contact => name === contact.name);
      }

  const onSubmit = event => {
    event.preventDefault();

    // const { handlePhoneAdd, contacts } = this.props;
    const contact = { nameContact, numberContact };

    if(nameCheked(contacts.items, nameContact)) {
        alert(`${name} is already in Phonebook`)
        return;
      }   

    dispatch(handleContactAdd(contact));
  }

  return (
    <form onSubmit={onSubmit} >
      <label>
        <br/>
        <input
        className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        placeholder="Name"
        required
        value={nameContact}
        onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        <br/>
        <input
        className={styles.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        placeholder="Number"
        required
        value={numberContact}
        onChange={handleChange}
        />
      </label>
      <br/>
      <button
      className={styles.button}
      type="submit"
      >Add contact</button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   }

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   nameCheked = ( contacts, name ) => {
//     return contacts.find(contact => name === contact.name);
//   }

//   onSubmit = event => {
//     event.preventDefault();

//     const { name, number } = this.state;
//     const { handlePhoneAdd, contacts } = this.props;
//     const contact = { name, number };

//     if(this.nameCheked(contacts.items, name)) {
//         alert(`${name} is already in Phonebook`)
//         return;
//       }   

//     handlePhoneAdd(contact)
//   }

  
//   render() {

//     return (
//       <form onSubmit={this.onSubmit} >
//         <label>
//           <br/>
//           <input
//           className={styles.input}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           placeholder="Name"
//           required
//           value={this.state.name}
//           onChange={this.handleChange}
//           />
//         </label>
//         <br/>
//         <label>
//           <br/>
//           <input
//           className={styles.input}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           placeholder="Number"
//           required
//           value={this.state.number}
//           onChange={this.handleChange}
//           />
//         </label>
//         <br/>
//         <button
//         className={styles.button}
//         type="submit"
//         >Add contact</button>
//       </form>
//   );
//   }
// }


// const mapStateToProps = state => state;

// const mapDispatchToProps = dispatch => ({
//   handlePhoneAdd: (name) => dispatch(handleContactAdd(name)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);